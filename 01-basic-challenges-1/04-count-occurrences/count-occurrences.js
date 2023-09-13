function countOccurrences(string, char) {
  let text = string.toLowerCase();
  let charToSearch = char.toLowerCase();

  return text.split(charToSearch).length - 1;
}

module.exports = countOccurrences;
