// returns array of common elements that appear in both arrays
function arrayIntersection(arr1, arr2) {
  const uniqueArr1 = [...new Set(arr1)];
  const uniqueArr2 = [...new Set(arr2)];

  // return uniqueArr1.reduce((result, num) => {
  //   uniqueArr2.includes(num) && result.push(num);
  //   return result;
  // }, []);

  return uniqueArr1.filter((el) => uniqueArr2.includes(el));
}

module.exports = arrayIntersection;
