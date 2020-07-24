// TODO: write your code here
import ArrayBufferConverter from './ArrayBufferConverter';
import getBuffer from './getBuffer';

const arrBufferConverter = new ArrayBufferConverter();

arrBufferConverter.load(getBuffer());

// eslint-disable-next-line no-console
console.log(arrBufferConverter.toString());
