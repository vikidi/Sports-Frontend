export const roundUtil = (value: number, digits: number): number => {
  let n = value;
  let negative = false;
  if (digits === undefined) {
    digits = 0;
  }
  if (n < 0) {
    negative = true;
    n = n * -1;
  }
  let multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  let ns = (Math.round(n) / multiplicator).toFixed(digits);
  if (negative) {
    ns = (parseFloat(ns) * -1).toFixed(digits);
  }
  return parseFloat(ns);
};
