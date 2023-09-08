function titleCase(text) {
  const textArray = text.toLowerCase().split(" ");
  const titleTextArray = [];
  for (let word of textArray) {
    const firstLetterTitleCase = word[0].toUpperCase();
    const newWord = firstLetterTitleCase + word.slice(1);
    titleTextArray.push(newWord);
  }
  return titleTextArray.join(" ");
}

module.exports = titleCase;
