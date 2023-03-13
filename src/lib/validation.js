const tgcelRegex = /^[7,9]{1}[0-3]{1}[0-9]{6}$/;
const moovRegex = /^[7,9]{1}[6-9]{1}[0-9]{6}$/;
/**
 *
 * @param {string | number} value
 * @returns
 */
export function tgcelValidNumber(value) {
  return !tgcelRegex.test(value);
}
/**
 *
 * @param {string | number} value
 * @returns
 */
export function moovValidNumber(value) {
  return !moovRegex.test(value);
}
