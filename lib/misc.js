export const byAscending = (fn) => (left, right) => {
  const l = fn(left), r = fn(right);

  return l < r ? -1 : l > r ? 1 : 0;
};