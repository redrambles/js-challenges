function titleCase(text) {
  return text.replace(/\b\w/g, (match) => match.toUpperCase());
}

module.exports = titleCase;
