// Takes an array of integers
// Returns a single integer (the largest)
// Starts off with the first integer in the array

function findMaxNumber(arr) {
  if (arr.length === 0) {
    return null;
  }
  return [...new Set(arr)].reduce((max, num) => {
    return num > max ? num : max;
  }, arr[0]);
}

module.exports = findMaxNumber;
