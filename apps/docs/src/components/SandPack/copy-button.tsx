import React from 'react';
import { useSandpack } from '@codesandbox/sandpack-react';
import { Tooltip, Button } from '@nextui-org/react';
import { useClipboard } from '@nextui-org/use-clipboard';

export const CopyLinearIcon = ({
  size = 24,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  size: number;
}) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={height || size}
    role="presentation"
    viewBox="0 0 24 24"
    width={width || size}
    {...props}
  >
    <path
      d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

export const CopyButton = () => {
  const { copy, copied } = useClipboard();

  const { sandpack } = useSandpack();

  const copyHandler = () => {
    const code = sandpack.files[sandpack.activeFile].code;
    copy(code);
  };

  return (
    <Tooltip
      className="px-2 text-xs"
      closeDelay={0}
      content={copied ? 'Copied!' : 'Copy'}
      radius="md"
    >
      <Button isIconOnly size="sm" title="Copy Code" variant="light" onClick={copyHandler}>
        <CopyLinearIcon className="text-white dark:text-zinc-500" size={16} />
      </Button>
    </Tooltip>
  );
};
