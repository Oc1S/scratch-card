'use client';
import React, { forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useRef } from 'react';
import throttle from 'lodash.throttle';

import { useLatest } from './hooks';
import { calcPosition, getDistance } from './utils';

export type ScratchCardProps = {
  id?: string;
  width: number;
  height: number;
  available?: boolean;
  finishTransition?: boolean;
  cover?: string;
  threshold?: number;
  fadeDuration?: number;
  scratchRadius?: number;
  fillStyle?: string;
  onFill?: () => void;
  onFinishStart?: () => void;
  onFinish?: () => void;
} & React.CanvasHTMLAttributes<HTMLCanvasElement>;

type CanvasData = {
  context: CanvasRenderingContext2D | null;
} & Record<'x' | 'y' | 'width' | 'height' | 'ratioWidth' | 'ratioHeight', number>;

export interface ScratchCardRef {
  canvasData: CanvasData;
  fillArea: (cover?: string) => void;
  finishScratching: () => void;
}

const defaultRatio = 2;

const ScratchCard = forwardRef<ScratchCardRef, ScratchCardProps>(
  (
    {
      id: canvasId = 'scratch-card',
      width,
      height,
      style,
      available = true,
      threshold = 0.95,
      cover = '',
      fillStyle = '#fff',
      scratchRadius = 15,
      fadeDuration = 1,
      onFinishStart,
      onFinish,
      onFill,
      ...rest
    },
    ref
  ) => {
    const ratioRef = useRef(defaultRatio);
    const canvasDataRef = useRef<CanvasData>({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      ratioWidth: 0,
      ratioHeight: 0,
      context: null,
    });
    const prevPos = useRef<any>({ x: null, y: null });
    const finishRef = useRef(false);
    const hoverRef = useRef(false);
    const coverImageRef = useRef<HTMLImageElement>();
    const availableRef = useLatest(available);

    const scratchOff = (ctx: CanvasRenderingContext2D, posX: number, posY: number) => {
      if (!availableRef.current) return;
      const ratio = ratioRef.current;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(posX * ratio, posY * ratio, scratchRadius, 0, Math.PI * 2);
      ctx.fill();
    };

    const getOrCreateImgElement = () => {
      if (coverImageRef.current) {
        return coverImageRef.current;
      }
      const imgElement = document.createElement('img');
      imgElement.src = cover;
      imgElement.crossOrigin = 'Anonymous';
      coverImageRef.current = imgElement;
      return imgElement;
    };

    const paint = () => {
      const { context, ratioHeight, ratioWidth } = canvasDataRef.current;
      if (!context) return;
      /* fillStyle */
      context.fillStyle = fillStyle;
      context.fillRect(0, 0, ratioWidth, ratioHeight);
      /* pic */
      if (cover) {
        const imgElement = getOrCreateImgElement();
        typeof imgElement.onload === 'function'
          ? context.drawImage(imgElement, 0, 0, ratioWidth, ratioHeight)
          : (imgElement.onload = () => {
              context.drawImage(imgElement, 0, 0, ratioWidth, ratioHeight);
            });
      }
    };

    /**
     * @returns {number} 透明程度，全透明为1，不透明为0，与alpha值相反
     */
    const getTransparency = (): number => {
      const { context, ratioWidth, ratioHeight } = canvasDataRef.current;
      if (!context) return 1;
      const { data } = context.getImageData(0, 0, ratioWidth, ratioHeight);
      const { length } = data;
      /* every 4 number */
      const step = 4;
      let transparentPixels = 0;
      /* 遍历 alpha */
      for (let index = 3; index < length; index += step) {
        if (data[index] === 0) {
          transparentPixels++;
        }
      }
      return transparentPixels / (length / step);
    };

    const fillArea = () => {
      const { context } = canvasDataRef.current;
      if (!context) return;
      context.globalCompositeOperation = 'source-over';
      paint();
      finishRef.current = false;
      onFill?.();
    };

    const rafId = useRef(-1);
    const fadeOut = (): Promise<void> =>
      new Promise(resolve => {
        if (!window.requestAnimationFrame) return resolve();
        const { context } = canvasDataRef.current;
        if (!context) return resolve();
        let alpha = 1;
        const end = 0;
        /* value / frames */
        const step = 1 / (fadeDuration * 60);
        const throttledFadeOut = throttle(() => {
          if (!finishRef.current) {
            return cancelAnimationFrame(rafId.current);
          }
          alpha -= step;
          context.save();
          context.globalCompositeOperation = 'source-in';
          context.globalAlpha = alpha;
          paint();
          context.restore();
        }, 16);

        const recursion = () => {
          if (alpha <= end) return resolve();
          throttledFadeOut();
          rafId.current = requestAnimationFrame(recursion);
        };
        recursion();
      });

    const finishScratching = () => {
      if (finishRef.current) return;
      finishRef.current = true;
      onFinishStart?.();
      fadeOut().finally(onFinish);
    };
    const finishScratchingRef = useLatest(finishScratching);

    useLayoutEffect(() => {
      const canvasElement = document.querySelector(`#${canvasId}`) as HTMLCanvasElement;
      if (!canvasElement) return;
      const ratio = (ratioRef.current = window.devicePixelRatio || defaultRatio);
      const ratioWidth = width * ratio;
      const ratioHeight = height * ratio;
      canvasElement.style.width = `${width}px`;
      canvasElement.style.height = `${height}px`;
      canvasElement.width = ratioWidth;
      canvasElement.height = ratioHeight;
    }, [width, height]);

    const recordCanvasInfo = () => {
      const canvasElement = document.querySelector(`#${canvasId}`) as HTMLCanvasElement;
      if (!canvasElement) return;
      const ratio = ratioRef.current;
      const ratioWidth = width * ratio;
      const ratioHeight = height * ratio;

      const canvasRect = canvasElement.getBoundingClientRect();
      canvasDataRef.current.x = canvasRect.x + document.documentElement.scrollLeft;
      canvasDataRef.current.y = canvasRect.y + document.documentElement.scrollTop;
      canvasDataRef.current.width = canvasRect.width;
      canvasDataRef.current.height = canvasRect.height;
      canvasDataRef.current.ratioWidth = ratioWidth;
      canvasDataRef.current.ratioHeight = ratioHeight;
    };

    const handleScratchCard = () => {
      const canvasElement = document.querySelector(`#${canvasId}`) as HTMLCanvasElement;
      const context = canvasElement?.getContext('2d', {
        willReadFrequently: true,
      });
      if (!context) return;
      canvasDataRef.current.context = context;
      recordCanvasInfo();
      fillArea();
      const throttledCheckTransparency = throttle(() => {
        if (getTransparency() > threshold) {
          finishScratchingRef.current?.();
        }
      }, 300);

      const handleTouchStart = (evt: Event) => {
        availableRef.current && evt.preventDefault();
        hoverRef.current = true;
      };

      const handleScratch = (pageX: number, pageY: number) => {
        const distanceThreshold = 5;
        const currentPointCoordinates = {
          x: pageX,
          y: pageY,
        };
        if (prevPos.current.x) {
          const dis = getDistance(currentPointCoordinates, prevPos.current);
          if (dis >= distanceThreshold) {
            const pointsCount = ~~(dis / distanceThreshold);
            const isParallelToX = prevPos.current.x === pageX;
            /* parallel to y axis */
            if (isParallelToX) {
              const iterator = (pageY - prevPos.current.y) / (pointsCount + 1);
              let cur = prevPos.current.y;
              for (let idx = 0; idx < pointsCount; idx++) {
                cur = cur + iterator;
                scratchOff(
                  context,
                  prevPos.current.x - canvasDataRef.current.x,
                  cur - canvasDataRef.current.y
                );
              }
            } else {
              const iterator = (pageX - prevPos.current.x) / (pointsCount + 1);
              let cur = prevPos.current.x;
              const isParallelToY = prevPos.current.y === pageY;
              for (let idx = 1; idx <= pointsCount; idx++) {
                cur = cur + iterator;
                scratchOff(
                  context,
                  cur - canvasDataRef.current.x,
                  isParallelToY
                    ? pageY - canvasDataRef.current.y
                    : calcPosition(cur, prevPos.current, currentPointCoordinates) -
                        canvasDataRef.current.y
                );
              }
            }
          }
        }
        prevPos.current = {
          x: pageX,
          y: pageY,
        };
        scratchOff(context, pageX - canvasDataRef.current.x, pageY - canvasDataRef.current.y);
        throttledCheckTransparency();
      };

      const handleTouchScratch = throttle((evt: TouchEvent) => {
        if (!hoverRef.current) return;
        const touchPoint = evt.changedTouches[0];
        const { pageX, pageY } = touchPoint;
        handleScratch(pageX, pageY);
      }, 16);

      const handleMouseScratch = throttle((evt: MouseEvent) => {
        if (!hoverRef.current) return;
        const { pageX, pageY } = evt;
        handleScratch(pageX, pageY);
      }, 16);

      const handleTouchEnd = () => {
        hoverRef.current = false;
        prevPos.current = {
          x: null,
          y: null,
        };
      };

      /* mouse events --- start */
      const addEventListenerToMouse = () => {
        canvasElement.addEventListener('mousedown', handleTouchStart, {
          passive: false,
        });
        window.addEventListener('mousemove', handleMouseScratch);
        window.addEventListener('mouseup', handleTouchEnd);
      };
      const removeEventListenerToMouse = () => {
        canvasElement.removeEventListener('mousedown', handleTouchStart);
        window.removeEventListener('mousemove', handleMouseScratch);
        window.removeEventListener('mouseup', handleTouchEnd);
      };
      /* mouse events --- end */

      /* touch events --- start */
      const addEventListenerToTouch = () => {
        canvasElement.addEventListener('touchstart', handleTouchStart, {
          passive: false,
        });
        window.addEventListener('touchmove', handleTouchScratch);
        window.addEventListener('touchend', handleTouchEnd);
      };
      const removeEventListenerToTouch = () => {
        canvasElement.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchScratch);
        window.removeEventListener('touchend', handleTouchEnd);
      };
      /* touch events --- end */

      /* bind events */
      addEventListenerToMouse();
      addEventListenerToTouch();
      return () => {
        removeEventListenerToMouse();
        removeEventListenerToTouch();
      };
    };

    useEffect(handleScratchCard, [canvasId]);
    useEffect(() => {
      const callback = throttle(() => {
        recordCanvasInfo();
      }, 16);
      const observer = new ResizeObserver(callback);
      const canvasElement = document.querySelector(`#${canvasId}`)!;
      observer.observe(canvasElement);
      window.addEventListener('resize', callback);
      window.addEventListener('scroll', callback);
      return () => {
        observer.disconnect();
        window.removeEventListener('resize', callback);
        window.removeEventListener('scroll', callback);
      };
    }, [canvasId]);

    useImperativeHandle(ref, () => {
      return {
        fillArea,
        finishScratching,
        canvasData: canvasDataRef.current,
      };
    });

    return (
      <canvas
        id={canvasId}
        width={width}
        height={height}
        style={{
          width,
          height,
          ...style,
        }}
        {...rest}
      />
    );
  }
);

export default ScratchCard;
