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
      <ScratchCard {...config} width={+config.width} height={+config.height} ref={ref} />
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
