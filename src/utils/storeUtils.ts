type PlainObject<T = unknown> = {
  [key: string]: T;
};

const isArray = (value: unknown): value is [] => Array.isArray(value);

const isPlainObject = (value: unknown): value is PlainObject =>
  Object.prototype.toString.call(value) === '[object Object]';

const isArrayOrObject = (value: unknown): value is [] | PlainObject =>
  isPlainObject(value) || isArray(value);

export const isEqual = (left: PlainObject, right: PlainObject): boolean => {
  if (Object.keys(left).length !== Object.keys(right).length) {
    return false;
  }

  for (const [key, value] of Object.entries(left)) {
    const rightValue = right[key];

    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      if (isEqual(value as PlainObject, rightValue as PlainObject)) {
        continue;
      }
      return false;
    }

    if (value !== rightValue) {
      return false;
    }
  }

  return true;
};
