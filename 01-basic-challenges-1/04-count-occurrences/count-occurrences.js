function countOccurrences(string, char) {
  let text = string.toLowerCase();
  let charToSearch = char.toLowerCase();
  // let count = 0;
  // for (let letter of text) {
  //   if (letter === charToSearch) {
  //     count++;
  //   }
  // }
  // return count;
  return text.split(charToSearch).length - 1;
}

module.exports = countOccurrences;
