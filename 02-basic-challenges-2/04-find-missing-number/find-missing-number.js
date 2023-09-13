function findMissingNumber(arr) {
  if (!arr || arr.length === 0) {
    return undefined;
  }

  const n = arr.length + 1;
  const totalExpected = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((total, num) => total + num, 0);

  return totalExpected - actualSum;
}

module.exports = findMissingNumber;
