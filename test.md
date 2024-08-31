| Attritube | Type | Description | Default |
| --- | --- | ----- | --- |
| id | `string` | The id of canvas DOM | `scratch-card` |
| width | `number` | The width of canvas DOM | `null` |
| height | `number` | The height of canvas DOM | `null` |
| available | `boolean` | If it's available to scratch | `true` |
| finishTransition | `boolean` | If the transition is enabled when it's finished | `true` |
| cover | `string` | Cover image of scratch card | `null` |
| threshold | `number` | Threshold to finish scratching automatically | `0.95` |
| fadeDuration | `number` | Duration for cover fade out | `1` |
| scratchRadius | `number` | Radius while scratching | `15` |
| fillStyle | `number` | FillStyle under img | `#fff` |
| onFill | `() => void` | Callback when fillArea | `null` |
| onFinishStart | `() => void` | Callback when finish transition start | `null` |
| onFinish | `() => void` | Callback when scratching finished | `null` |
