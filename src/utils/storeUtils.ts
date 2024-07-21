const isArray = (value: unknown): value is [] => Array.isArray(value);

type PlainObject<T = unknown> = {
  [k in string]: T;
};

const isPlainObject = (value: unknown): value is PlainObject => typeof value === 'object' && value !== null && value.constructor === Object && Object.prototype.toString.call(value) === '[object Object]';

const isArrayOrObject = (value: unknown): value is [] | PlainObject => isPlainObject(value) || isArray(value);

export const isEqual = (left: PlainObject, right: PlainObject) => {
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
