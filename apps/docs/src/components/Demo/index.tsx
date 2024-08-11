import { Button, Checkbox, Input } from '@nextui-org/react';
import ScratchCard, { ScratchCardRef } from '@scratch/react';
import { useRef, useState } from 'react';

export const Demo: React.FC = () => {
  const [config, _setConfig] = useState({
    available: true,
    width: '400',
    height: '300',
  });
  const setConfig =
    <T extends keyof typeof config>(key: T) =>
    (value: (typeof config)[T]) =>
      _setConfig(prev => ({ ...prev, [key]: value }));
  const ref = useRef<ScratchCardRef>();
  return (
    <div className="flex gap-20">
      <div className="relative">
        <div className="text-primary-50 absolute z-[-1] flex h-full w-full items-center justify-center bg-white text-3xl">
          Thanks!
        </div>
        <ScratchCard
          {...config}
          width={+config.width}
          height={+config.height}
          ref={ref}
          cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtiRKZmjSNV05CznXFyEChACf6czEvsYuBw&s"
        />
      </div>
      {/* config */}
      <div className="flex flex-col gap-4">
        <Input
          label="width"
          type="number"
          value={String(config.width)}
          onValueChange={setConfig('width')}
        />
        <Input
          label="height"
          type="number"
          value={String(config.height)}
          onValueChange={setConfig('height')}
        />
        <Checkbox isSelected={config.available} onValueChange={setConfig('available')}>
          Available
        </Checkbox>
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
  );
};
