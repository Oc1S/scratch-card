import React, { useEffect, useRef } from 'react'
import './App.css'

const Scratch = () => {
  const hoverRef = useRef(false)
  const canvasPos = useRef({ x: 0, y: 0 })
  const fadeRef = useRef(false)

  const draw = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, 10, 0, Math.PI * 2)
    ctx.fill()
  }

  const fade = (ctx: CanvasRenderingContext2D, alpha: number) => {
    const fadeOut = () => {
      ctx.save()
      ctx.globalCompositeOperation = 'source-in'
      ctx.fillStyle = ctx.fillStyle + (alpha -= 1).toString(16)
      ctx.fillRect(0, 0, 400, 300)
      ctx.restore()
    }

    // 到210已经看不到涂层了
    // if (alpha > 210) {
    //   requestAnimationFrame(() => {
    //     fade(ctx, alpha)
    //   })
    // }
    const timer = setInterval(() => {
      if (alpha <= 0) {
        return clearInterval(timer)
      }
      fadeOut()
    }, 16)
  }

  const getTransparency = (data: Uint8ClampedArray) => {
    const { length: total } = data
    const step = 4
    let transpentCount = 0
    for (let i = 3; i < data.length; i += step) {
      if (data[i] === 0) {
        transpentCount++
      }
    }
    return transpentCount / (total / step)
  }

  useEffect(() => {
    const canvas = document.querySelector('#canvas') as HTMLCanvasElement
    const context = canvas.getContext('2d')!
    // 绘制涂层
    context.beginPath()
    context.fillStyle = 'cyan'
    context.fillRect(0, 0, 400, 300)

    const canvasRect = canvas.getBoundingClientRect()
    context.fillRect(0, 0, 400, 300)
    canvasPos.current.x = canvasRect.x + document.documentElement.scrollLeft
    canvasPos.current.y = canvasRect.y + document.documentElement.scrollTop

    const mouseDraw = (e: MouseEvent) => {
      if (!hoverRef.current) return
      const x = e.offsetX,
        y = e.offsetY
      draw(context, x, y)
      const { data } = context.getImageData(0, 0, 400, 300)
      const transparency = getTransparency(data)
      if (transparency > 0.1) {
        if (fadeRef.current) return
        fadeRef.current = true
        fade(context, 255)
      }
    }

    const handleMouseDown = () => {
      hoverRef.current = true
    }

    const handleMouseUp = () => {
      hoverRef.current = false
    }

    canvas.addEventListener('mousemove', mouseDraw)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      canvas.removeEventListener('mousemove', mouseDraw)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <div>
      <canvas id='canvas' width='400' height='300'></canvas>
      <div onClick={() => {}}>{count}</div>
    </div>
  )
}

export default Scratch
