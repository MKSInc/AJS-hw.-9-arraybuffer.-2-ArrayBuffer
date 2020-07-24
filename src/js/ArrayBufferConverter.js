export default class ArrayBufferConverter {
  constructor() {
    this.bufferUint16 = undefined;
  }

  load(data) {
    this.bufferUint16 = new Uint16Array(data);
  }

  toString() {
    return this.bufferUint16.reduce((result, code) => result + String.fromCharCode(code), '');
  }
}
