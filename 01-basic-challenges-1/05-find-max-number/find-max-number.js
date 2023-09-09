// Takes an array of integers
// Returns a single integer (the largest)
// Starts off with the first integer in the array

function findMaxNumber(arr) {
  return arr.reduce((acc, num) => {
    return num > acc ? num : acc;
  }, arr[0]);
}

module.exports = findMaxNumber;
