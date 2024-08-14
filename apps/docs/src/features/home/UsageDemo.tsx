import { Button } from '@nextui-org/react';
import ScratchCard, { ScratchCardRef } from '@scratch/react';
import { useRef } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

const ReactLiveDemo = ({ scope, code }: { scope: Record<string, unknown>; code: string }) => (
  <LiveProvider code={code} scope={scope}>
    <LiveEditor className="max-w-3/5 min-w-[400px]" />
    <LiveError />
    <LivePreview />
  </LiveProvider>
);
const UsageDemo: React.FC = () => {
  const ref = useRef<ScratchCardRef>();
  return (
    <div className="mobile:flex-col flex justify-center gap-4">
      <ReactLiveDemo
        scope={{ ScratchCard, Button, ref }}
        code={`
<div className='flex items-center flex-col gap-4'>
  <div className="relative overflow-hidden rounded w-[400px]">
    <div className="text-primary-50 absolute z-[-1] flex h-full w-full items-center justify-center bg-gradient-to-br from-[#4ADE80] to-[#06B6D4] text-3xl">
      Thanks!
    </div>
    <ScratchCard
      id="usage-demo"
      width={400}
      height={300}
      ref={ref}
      cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtiRKZmjSNV05CznXFyEChACf6czEvsYuBw&s"
    />
  </div>
  <div className='flex gap-4'>
    <Button
      onClick={() => {
        ref.current.finishScratching();
      }}
    >
      Finish
    </Button>
    <Button
      onClick={() => {
        ref.current.fillArea();
      }}
    >
      Reset
    </Button>
  </div>
</div>
`}
      />
    </div>
  );
};

export default UsageDemo;
