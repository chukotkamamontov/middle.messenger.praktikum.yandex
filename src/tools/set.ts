import { merge } from './merge';

export const set = (object: any, path: any, value: any): any => {
  console.log('[set] [value]: ', value);
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  const result = path.split('.').reduceRight(
    (acc: any, key: any) => ({
      [key]: acc,
    }),
    value,
  );
  return merge(object, result);
};
