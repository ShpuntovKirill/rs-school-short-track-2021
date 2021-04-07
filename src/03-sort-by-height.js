/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const Arr = arr;
  for (let i = 1; i < Arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (Arr[i] !== -1 && Arr[i] < Arr[j]) {
        const x = Arr[i];
        Arr[i] = Arr[j];
        Arr[j] = x;
      }
    }
  }
  return Arr;
}

module.exports = sortByHeight;
