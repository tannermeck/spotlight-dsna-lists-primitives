function reverseWords(sentence) {
  const letters = sentence.split(" ");
  return letters.map((word) => word.split("").reverse().join("")).join(" ");
}
function titleCase(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
function oddishOrEvenish(number) {
  const nums = number.split("");
  // [1, 2, 1]
  let total = 0;
  nums.map((num) => (total += +num));
  console.log(total);
  if (total % 2 > 0) {
    return "Oddish";
  } else {
    return "Evenish";
  }
}
module.exports = { reverseWords, titleCase, oddishOrEvenish };
