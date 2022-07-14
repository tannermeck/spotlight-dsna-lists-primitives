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
  if (total % 2 > 0) {
    return "Oddish";
  } else {
    return "Evenish";
  }
}
function at(arr, index) {
  if (index > 0) {
    return arr[index];
  } else {
    return arr[arr.length + index];
  }
}
function fizzBuzz(arr) {
  //   const newArr = arr.map((num) => {
  //     if (num % 3 === 0 && num % 5 === 0) {
  //       return "FizzBuzz";
  //     } else if (num % 3 === 0) {
  //       return "Fizz";
  //     } else if (num % 5 === 0) {
  //       return "Buzz";
  //     } else {
  //       return num;
  //     }
  //   });
  //   return newArr;
  let newArr = [];
  arr.map((num) => {
    let word = "";
    if (num % 3 === 0) word += "Fizz";
    if (num % 5 === 0) word += "Buzz";
    newArr.push(word || num);
  });
  return newArr;
}
function anagrams(one, two) {
  const sort1 = one.split("").sort().join("");
  const sort2 = two.split("").sort().join("");
  if (sort1 === sort2) return true;
  return false;
}
function uniqueString(array) {
  const normalized = array.map((string) =>
    [...new Set(string.toLowerCase())].sort().join("")
  );
  if (normalized[0] !== normalized[1] && normalized[1] === normalized[2]) {
    return array[0];
  }
  const index = normalized.findIndex((string, i) => {
    const prev = normalized[i - 1];
    const next = normalized[i + 1];
    return i !== 0 && string !== prev && string !== next;
  });
  return array[index];
}
function uniqueCharacter(string) {
  const split = string.split("").sort();
  let result = "";
  for (let i = 1; i < split.length - 1; i++) {
    let prev = split[i - 1];
    let current = split[i];
    let next = split[i + 1];

    if (prev !== current && current !== next) return split[i];
  }
  return "_";
}

function equalSides(array) {
  //[1,2,3,4,3,2,1]
  //   for (let i = 0; i < array.length; i++) {
  //     let left = array.slice(0, i).reduce((a, b) => a + b, 0);
  //     console.log("left", left);
  //     let right = array.slice(i + 1).reduce((a, b) => a + b, 0);
  //     console.log("right", right);
  //     if (left === right) return i;
  //   }
  let left = 0;
  let right = array.reduce((a, b) => a + b, -array[0]);
  for (let i = 0; i < array.length; i++) {
    if (left === right) return i;
    left += array[i];
    right -= array[i + 1];
  }
}
function isHappy(num) {
  const seen = {};
  while (true) {
    const split = num
      .toString()
      .split("")
      .map((digit) => digit ** 2)
      .reduce((a, b) => a + b);
    if (split === 1) return true;
    if (seen[split]) return false;
    seen[split] = true;
    num = split;
  }
}

module.exports = {
  reverseWords,
  titleCase,
  oddishOrEvenish,
  at,
  fizzBuzz,
  anagrams,
  uniqueString,
  uniqueCharacter,
  equalSides,
  isHappy,
};
