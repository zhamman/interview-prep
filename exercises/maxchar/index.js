// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let count = 0;
  let letter = "";
  let map = {};

  let newArr = str.split(" ").join("").toLowerCase();

  for (let i of newArr) {
    map[i] ? (map[i] += 1) : (map[i] = 1);
  }

  for (let i in map) {
    if (map[i] > count) {
      count = map[i];
      letter = i;
    }
  }
  return letter;
}

module.exports = maxChar;
