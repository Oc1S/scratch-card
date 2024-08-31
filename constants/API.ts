export const API: Array<
  Record<'attritube' | 'type' | 'description', string> & {
    default: any;
  }
> = [
  {
    attritube: 'id',
    type: 'string',
    description: 'The id of canvas DOM',
    default: 'scratch-card',
  },
  {
    attritube: 'width',
    type: 'number',
    description: 'The width of canvas DOM',
    default: null,
  },
  {
    attritube: 'height',
    type: 'number',
    description: 'The height of canvas DOM',
    default: null,
  },
  {
    attritube: 'available',
    type: 'boolean',
    description: "If it's available to scratch",
    default: true,
  },
  {
    attritube: 'finishTransition',
    type: 'boolean',
    description: "If the transition is enabled when it's finished",
    default: true,
  },
  {
    attritube: 'cover',
    type: 'string',
    description: 'Cover image of scratch card',
    default: null,
  },
  {
    attritube: 'threshold',
    type: 'number',
    description: 'Threshold to finish scratching automatically',
    default: 0.95,
  },
  {
    attritube: 'fadeDuration',
    type: 'number',
    description: 'Duration for cover fade out',
    default: 1,
  },
  {
    attritube: 'scratchRadius',
    type: 'number',
    description: 'Radius while scratching',
    default: 15,
  },
  {
    attritube: 'fillStyle',
    type: 'number',
    description: 'FillStyle under img',
    default: '#fff',
  },
  {
    attritube: 'onFill',
    type: '() => void',
    description: 'Callback when fillArea',
    default: null,
  },
  {
    attritube: 'onFinishStart',
    type: '() => void',
    description: 'Callback when finish transition start',
    default: null,
  },
  {
    attritube: 'onFinish',
    type: '() => void',
    description: 'Callback when scratching finished',
    default: null,
  },
];
