import { resolve } from 'path';

const filename = 'README.md';

const file = Bun.file(resolve(__dirname, '..', filename));
Bun.write(resolve(__dirname, '../packages/react/', filename), file);
