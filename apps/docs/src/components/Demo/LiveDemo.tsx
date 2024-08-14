import React from 'react';
import { LivePreview, LiveProvider, LiveError } from 'react-live';
import { clsx } from '@nextui-org/shared-utils';
import * as Components from '@nextui-org/react';
import * as intlDateUtils from '@internationalized/date';
import * as reactAriaI18n from '@react-aria/i18n';

import { BgGridContainer } from './bg-grid-container';
import { GradientBox, GradientBoxProps } from './gradient-box';

export interface ReactLiveDemoProps {
  code: string;
  noInline?: boolean;
  height?: string | number;
  isCentered?: boolean;
  isGradientBox?: boolean;
  className?: string;
  gradientColor?: GradientBoxProps['color'];
  overflow?: 'auto' | 'visible' | 'hidden';
}

export const scope = {
  ...Components,
  ...intlDateUtils,
  ...reactAriaI18n,
} as Record<string, unknown>;

export const ReactLiveDemo: React.FC<ReactLiveDemoProps> = ({
  code,
  isGradientBox,
  gradientColor = 'orange',
  isCentered = false,
  height,
  className,
  noInline,
}) => {
  const content = (
    <>
      <LivePreview
        className={clsx('live-preview not-prose flex h-full w-full', {
          'items-center justify-center': isCentered,
        })}
        style={{ height }}
      />
      <LiveError />
    </>
  );

  return (
    <LiveProvider code={code} noInline={noInline} scope={scope}>
      {isGradientBox ? (
        <GradientBox
          isCentered
          className={clsx(
            className,
            'border-default-200 dark:border-default-100 relative flex items-center overflow-hidden overflow-y-hidden rounded-lg border px-2 py-4'
          )}
          color={gradientColor}
          to="top-right"
        >
          <div className="scrollbar-hide h-full w-full max-w-full overflow-x-scroll px-2 py-4">
            {content}
          </div>
        </GradientBox>
      ) : (
        <BgGridContainer className={className}>{content}</BgGridContainer>
      )}
    </LiveProvider>
  );
};
