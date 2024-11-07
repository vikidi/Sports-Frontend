/**
 * Rounds a number to the given number of decimal places.
 *
 * @param {number} value The value to round.
 * @param {number} [digits=0] The number of decimal places to round to.
 * @returns {number} The rounded value.
 */
export const round = (value: number, digits: number = 0): number => {
  if (isNaN(digits)) {
    return value;
  }

  if (digits < 0) {
    digits = 0;
  } else if (digits > 100) {
    digits = 100;
  }

  const isNegative = value < 0;
  const absoluteValue = Math.abs(value);
  const factor = Math.pow(10, digits);

  const multipliedValue = parseFloat((absoluteValue * factor).toFixed(11));
  let roundedValue = (Math.round(multipliedValue) / factor).toFixed(digits);

  if (isNegative) {
    roundedValue = (parseFloat(roundedValue) * -1).toFixed(digits);
  }

  return parseFloat(roundedValue);
};
