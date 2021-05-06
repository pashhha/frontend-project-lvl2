import { readFileSync } from 'fs';
import path from 'path';

const formatter = (filepath) => {
  const JsonFile = readFileSync(path.resolve(filepath), 'utf-8');
  const parsedJson = JSON.parse(JsonFile);
  return parsedJson;
};

export default formatter;
