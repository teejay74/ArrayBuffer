import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

const buffer = getBuffer();

test('Тест метода load()', () => {
  ArrayBufferConverter.load(buffer);
  expect(ArrayBufferConverter.buffer).toBe(buffer);
});

test('Тест метода toString()', () => {
  const dataString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(ArrayBufferConverter.toString()).toBe(dataString);
});
