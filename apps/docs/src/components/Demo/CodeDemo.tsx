'use client';

import React, { useCallback, useMemo, useRef } from 'react';
import { useInView } from 'framer-motion';

import { useCodeDemo, UseCodeDemoProps } from './useCodeDemo';
import { ReactLiveDemo } from './LiveDemo';
import { Sandpack, SandpackProps } from '../SandPack';

import { GradientBoxProps } from './gradient-box';

interface CodeDemoProps extends UseCodeDemoProps, SandpackProps {
  title?: string;
  asIframe?: boolean;
  showSandpackPreview?: boolean;
  initialEditorOpen?: boolean;
  enableResize?: boolean;
  showPreview?: boolean;
  hideWindowActions?: boolean;
  showOpenInCodeSandbox?: boolean;
  isPreviewCentered?: boolean;
  resizeEnabled?: boolean;
  typescriptStrict?: boolean;
  displayMode?: 'always' | 'visible';
  isGradientBox?: boolean;
  gradientColor?: GradientBoxProps['color'];
  previewHeight?: string | number;
  overflow?: 'auto' | 'visible' | 'hidden';
  className?: string;
}

export const CodeDemo: React.FC<CodeDemoProps> = ({
  files = {},
  showEditor = true,
  showPreview = true,
  hideWindowActions = false,
  showSandpackPreview = false,
  isPreviewCentered = false,
  // when false .js files will be used
  typescriptStrict = false,
  showOpenInCodeSandbox,
  isGradientBox = false,
  previewHeight = 'auto',
  overflow = 'visible',
  displayMode = 'always',
  gradientColor,
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '600px',
  });

  const { noInline, code } = useCodeDemo({
    files,
  });

  const renderContent = useCallback(
    (content: React.ReactNode) => {
      if (displayMode === 'always') return content;
      if (displayMode === 'visible') {
        if (!isInView) {
          return <div style={{ height: previewHeight }} />;
        }

        return content;
      }
    },
    [displayMode, previewHeight, isInView]
  );

  const previewContent = useMemo(() => {
    if (!showPreview) return null;

    const content = (
      <ReactLiveDemo
        className={className}
        code={code}
        gradientColor={gradientColor}
        height={previewHeight}
        isCentered={isPreviewCentered}
        isGradientBox={isGradientBox}
        noInline={noInline}
        overflow={overflow}
      />
    );

    return renderContent(content);
  }, [
    displayMode,
    isGradientBox,
    gradientColor,
    previewHeight,
    hideWindowActions,
    showPreview,
    isInView,
    className,
  ]);

  const editorContent = useMemo(() => {
    if (!showEditor) return null;

    const content = (
      <Sandpack
        files={files}
        showEditor
        showOpenInCodeSandbox={showOpenInCodeSandbox || showPreview}
        showPreview={showSandpackPreview}
        typescriptStrict={typescriptStrict}
      />
    );

    return renderContent(content);
  }, [
    displayMode,
    showEditor,
    isInView,
    files,
    showPreview,
    showSandpackPreview,
    showOpenInCodeSandbox,
  ]);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      {previewContent}
      {editorContent}
    </div>
  );
};
