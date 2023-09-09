function isPalindrome(string) {
  // only lowercase letters or digits (no spaces, no punctuation)
  const cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedClean = cleanString.split("").reverse().join("");
  return reversedClean === cleanString;
}

module.exports = isPalindrome;
