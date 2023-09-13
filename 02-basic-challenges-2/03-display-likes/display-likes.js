function displayLikes(namesArray) {
  if (namesArray.length === 0) {
    return "no one likes this";
  } else if (namesArray.length === 1) {
    return `${namesArray[0]} likes this`;
  } else if (namesArray.length === 2) {
    return `${namesArray[0]} and ${namesArray[1]} like this`;
  } else if (namesArray.length === 3) {
    return `${namesArray[0]}, ${namesArray[1]} and ${namesArray[2]} like this`;
  } else {
    return `${namesArray[0]}, ${namesArray[1]} and ${namesArray.length - 2} others like this`;
  }
}

module.exports = displayLikes;
