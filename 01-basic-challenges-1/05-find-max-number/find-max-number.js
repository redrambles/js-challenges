function findMaxNumber(arr) {
  return arr.reduce((acc, num) => {
    return num > acc ? num : acc;
  }, arr[0]);
}

module.exports = findMaxNumber;
