import ArrayBufferConverter from '../ArrayBufferConverter';

const arrBufferConverter = new ArrayBufferConverter();

test('The load() method takes an ArrayBuffer and stores it in the \'bufferUnit16\' property in the \'Unit16Array\' view', () => {
  arrBufferConverter.load((new Uint16Array([1, 2, 3])).buffer);
  expect(arrBufferConverter.bufferUint16).toEqual(new Uint16Array([1, 2, 3]));
});

test('The toString() method should convert the loaded data to a string', () => {
  arrBufferConverter.bufferUint16 = new Uint16Array(['a'.charCodeAt(), 'ё'.charCodeAt()]);
  expect(arrBufferConverter.toString()).toBe('aё');
});
