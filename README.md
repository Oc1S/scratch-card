# @kiefer/scratch

A smooth and easy-to-use canvas scratch card component

## Using this package

Run the following command:

```sh
npm install @kiefer/scratch
```

Learn more about this package at our [Doc Page](https://oc1s.github.io/scratch-card/)

## API

| Attritube | Type | Description | Default |
| --- | --- | ----- | --- |
| id | `string` | The id of canvas DOM | `scratch-card` |
| width | `number` | The width of canvas DOM | - |
| height | `number` | The height of canvas DOM | - |
| available | `boolean` | If it's available to scratch | `true` |
| finishTransition | `boolean` | If the transition is enabled when it's finished | `true` |
| cover | `string` | Cover image of scratch card | - |
| threshold | `number` | Threshold to finish scratching automatically | `0.95` |
| fadeDuration | `number` | Duration for cover fade out | `1` |
| scratchRadius | `number` | Radius while scratching | `15` |
| fillStyle | `number` | FillStyle under img | `#fff` |
| onFill | `() => void` | Callback when fillArea | - |
| onFinishStart | `() => void` | Callback when finish transition start | - |
| onFinish | `() => void` | Callback when scratching finished | - |
