import { API } from '../constants/API';
import { resolve } from 'path';

const readmeFilename = 'README.md';
const keys = ['attritube', 'type', 'description', 'default'];
const shouldHightLightKeys = ['type', 'default'];
const upperCaseKeys = keys.map(key => key.slice(0, 1).toUpperCase() + key.slice(1));

const APIReg = /## API[\s\S]*(?=\r?\n?#?)/;
const endOfLineMarker = '\r\n';

const toLine = (acc: string, key: string) => `${acc} ${key} |`;
let res =
  `## API${endOfLineMarker}${endOfLineMarker}` +
  upperCaseKeys.reduce(toLine, '|') +
  endOfLineMarker;
res +=
  keys.reduce(
    (acc: string, key: string) => `${acc} ${key === 'description' ? '-----' : '---'} |`,
    '|'
  ) + endOfLineMarker;
API.forEach(value => {
  const toRes = (key: string, value: string) => {
    if (shouldHightLightKeys.includes(key)) {
      if (String(value) === 'null') {
        return '-';
      }
      return `\`${value}\``;
    }
    return value;
  };
  res +=
    keys
      .map(key => [key, value[key]])
      .reduce((acc: string, [key, val]: string[]) => `${acc} ${toRes(key, val)} |`, '|') +
    endOfLineMarker;
});

const readmeFile = Bun.file(resolve(__dirname, '..', readmeFilename));
const fileText = await readmeFile.text();
console.log(fileText, APIReg.exec(fileText)?.[0], res);

const finalData = fileText.replace(APIReg, res);
Bun.write(resolve(__dirname, '..', readmeFilename), finalData);
