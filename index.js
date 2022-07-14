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
  const split1 = one.split("").sort().join("");
  const split2 = two.split("").sort().join("");
  if (split1 === split2) return true;
  return false;
}
function uniqueString(array) {
  let noDup = array.map((string) => {
    const stringArr = string.toLowerCase().split("").sort();
    return [...new Set(stringArr)].join("");
  });
  for (let i = 0; i < array.length; i++) {
    let prev = noDup[i - 1];
    let curr = noDup[i];
    let next = noDup[i + 1];
    if (prev !== curr && curr !== next) {
      return array[i];
    }
  }
}
function uniqueCharacter(string) {}

function equalSides(array) {}
function isHappy(num) {}

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
