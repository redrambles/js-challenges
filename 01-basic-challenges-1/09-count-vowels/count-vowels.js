function countVowels(string) {
  const lowerString = string.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u", "y"];
  // const totalVowels = lowerString.split("").reduce((total, letter) => {
  //   if (vowels.includes(letter)) {
  //     total += 1;
  //   }
  //   return total;
  // }, 0);

  // OR
  const vowelArray = lowerString.split("").filter((letter) => vowels.includes(letter));
  return vowelArray.length;
}

module.exports = countVowels;
