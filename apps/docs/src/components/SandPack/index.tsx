'use client';

import React, { FC, useRef } from 'react';
import { SandpackProvider, SandpackLayout, SandpackPreview } from '@codesandbox/sandpack-react';

import { SandpackCodeViewer } from './code-viewer';
import { nextuiTheme } from './theme';
import { UseSandpackProps, useSandpack } from './use-sandpack';
import { CopyButton } from './copy-button';

export interface SandpackProps extends UseSandpackProps {
  showTabs?: boolean;
  showPreview?: boolean;
  showEditor?: boolean;
  showCopyCode?: boolean;
  showReportBug?: boolean;
  showOpenInCodeSandbox?: boolean;
  children?: React.ReactNode;
}

export const Sandpack: FC<SandpackProps> = ({
  files: filesProp,
  template,
  typescriptStrict = false,
  showPreview = false,
  showEditor = true,
  showCopyCode = true,
  showTabs,
  children,
}) => {
  const editorContainerRef = useRef(null);

  const { files, customSetup, sandpackTemplate } = useSandpack({
    files: filesProp,
    template,
    typescriptStrict,
  });

  return (
    <SandpackProvider
      customSetup={customSetup}
      files={files}
      template={sandpackTemplate}
      theme={nextuiTheme}
    >
      <SandpackLayout
        style={
          {
            '--sp-border-radius': '0.5rem',
          } as React.CSSProperties
        }
      >
        <div className="flex w-full flex-col">
          <div>{showPreview ? <SandpackPreview /> : children}</div>
          <div ref={editorContainerRef} className="group relative h-auto pt-2">
            {showEditor && (
              <SandpackCodeViewer containerRef={editorContainerRef} showTabs={showTabs} />
            )}
            <div className="bg-code-background absolute right-2 top-2 z-20 hidden items-center justify-center gap-0 opacity-0 transition-opacity group-hover:opacity-100 md:flex">
              {showCopyCode && <CopyButton />}
            </div>
          </div>
        </div>
      </SandpackLayout>
    </SandpackProvider>
  );
};
