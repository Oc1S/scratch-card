import { Checkbox, Input } from '@nextui-org/react';
import ScratchCard from '@scratch/react';
import { useState } from 'react';

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
  return (
    <div className="flex gap-20">
      <ScratchCard {...config} width={+config.width} height={+config.height} />
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
          value={String(config.width)}
          onValueChange={setConfig('height')}
        />
        <Checkbox isSelected={config.available} onValueChange={setConfig('available')}>
          Available
        </Checkbox>
      </div>
    </div>
  );
};
