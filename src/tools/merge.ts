type Indexed<T = Record<string, unknown>> = {
  [key in string]: T;
};

export const merge = (left: Indexed, right: Indexed): Indexed => {
  for (const p in right) {
    if (!right.hasOwnProperty(p)) {
      continue;
    }

    try {
      if (right[p].constructor === Object) {
        right[p] = merge(left[p] as Indexed, right[p] as Indexed);
      } else {
        left[p] = right[p];
      }
    } catch (e) {
      left[p] = right[p];
    }
  }

  return left;
};
