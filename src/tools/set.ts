import { merge } from './merge';

type SetValue = {
  avatar: null | string;
  created_by: number;
  id: number;
  last_message: null | string;
  title: string
  unread_count: number
}

type Indexed<T = Record<string, unknown>> = {
  [key in string]: T;
};

export const set = (object: Indexed | unknown, path: string, value: unknown): Indexed | unknown => {
  console.log('[set] [value]: ', value)
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  const result = path.split('.').reduceRight<Indexed>(
    (acc, key) => ({
      [key]: acc,
    }),
    value as any,
  );
  return merge(object as Indexed, result);
};
