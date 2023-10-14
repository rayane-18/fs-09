/*Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false).*/

function countTrue(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      count++;
    }
  }
  return count;
}
/*Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.*/
function sevenBoom(arr) {
  for (let i = 0; i < arr.length; i++) {
    const numStr = arr[i].toString();
    for (let j = 0; j < numStr.length; j++) {
      if (numStr[j] === "7") {
        return "Boom!";
      }
    }
  }
  return "there is no 7 in the array";
}
function reverseOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    const numStr = arr[i].split(" ");
    for (let j = 0; j < numStr.length; j++) {
      if (numStr[j].length % 2 === 0) {
        numStr[j] = numStr[j].split("").reverse().join("");
      }
      arr[i] = numStr.join(" ");
    }
  }
  return arr;
}
// new exo
/*
  Create a function that takes a sentence and returns the number of letters in this sentence sorted alphabetically.

  Output format:
  letter:count space letter:count (see examples).
  
  Special cases:
  space is NOT a letter!
  special symbols like ($ & * @ ! ' @') is NOT a letter!
  lower and upper letters IS EQUAL (A == a, B == b ... Z == z)!
  */
/*function wordcount(sentence) {
  let newsentence = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < sentence.length; j++) {
      if (sentence[j] === alphabet[i]) {
        newsentence += sentence[j];
      }
    }
  }
  let res = "";
  newsentence = newsentence.split("");
  for (let i = 0; i < newsentence; i++) {
    if (
      newsentence.indexof(newsentence[i]) !==
      newsentence.lastindexof(newsentence[i])
    ) {
        res += lastindexof(newsentence) - newsentence.indexOf(newsentence;
    } else {
    }
    return res;
  }
  
  counter = [];
  for (let i = 0; i < alphabet.length; i++) {
    counter[i] = 0;
  }
  for (let i = 0; i < newsentence.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (newsentence[i].includes(alphabet[j])) {
        counter[j] += 1;
      }
    }
  }
  let result = [];
  for (let i = 0; i < alphabet.length; i++) {
    if (counter[i] !== 0) {
      result.push(alphabet[i] + " : " + counter[i] + " ");
    }
  }
  return result;
}
console.log(wordcount("dklsfjlksa"));
*/
function checkCharCount(str) {
  let newStr = "";
  let alph = "abscdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < alph.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[j] === alph[i]) {
        newStr += str[j];
      }
    }
  }

  let res = "";
  newStr = newStr.split("");
  let count = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (newStr.indexOf(newStr[i]) !== newStr.lastIndexOf(newStr[i])) {
      let s = newStr.lastIndexOf(newStr[i]) - newStr.indexOf(newStr[i]) + 1;
      res += newStr[i] + ":" + s + " ";
    } else {
      let s = newStr.lastIndexOf(newStr[i]) - newStr.indexOf(newStr[i]) + 1;
      res += newStr[i] + ":" + s + " ";
    }
  }
  let finalResult = [];
  res = res.split(" ");
  for (let i = 0; i < res.length; i++) {
    if (res[i] !== res[i + 1]) {
      finalResult.push(res[i]);
    }
  }

  return finalResult.join(" ").trim();
}

console.log(checkCharCount("hello &&"));
console.log(checkCharCount("baace &&"));
console.log(checkCharCount("ba&écdééace &&"));
console.log(checkCharCount("fksdbvlsdbvlsé(&'&(&'&(éè--&(&-è"));
console.log(checkCharCount("brown fox jçump over the f(èence"));
