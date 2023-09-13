function removeDuplicates(arr) {
  const noDuplicates = arr.reduce((newArray, item) => {
    !newArray.includes(item) && newArray.push(item);
    return newArray;
  }, []);

  return noDuplicates;
}

// OR

function removeDuplicates2(arr) {
  return [...new Set(arr)];
}

module.exports = { removeDuplicates, removeDuplicates2 };
