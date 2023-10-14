/*
In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
You will be passed a string and you must return that string in an array where an uppercase letter
is a person standing up. 
*/
//example :hello => [hEllo,heLlo,helLo,hellO]

function wave(word) {
  word = word.toLowerCase();
  temp = "";
  mexicanwave = [];
  for (let i = 0; i < word.length; i++) {
    temp = word.split("");
    temp[i] = temp[i].toUpperCase();
    mexicanwave[i] = temp.join("");
  }
  return mexicanwave;
}

/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
*/
function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 !== arr.length) {
      if (arr[i] === arr[i + 1]) {
        continue;
      } else {
        return arr[i + 1];
      }
    }
  }
}

/*

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string,
the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/
function longest(s1, s2) {
  s1 = s1.split("").sort().join("");
  s2 = s2.split("").sort().join("");
  let comp = 0;
  for (let i = 0; i < s1.length; i++) {
    if (newStr.indexOf(newStr[i]) !== newStr.lastIndexOf(newStr[i])) {
      let s = newStr.lastIndexOf(newStr[i]) - newStr.indexOf(newStr[i]) + 1;
      res += newStr[i] + ":" + s + " ";
    } else {
      let s = newStr.lastIndexOf(newStr[i]) - newStr.indexOf(newStr[i]) + 1;
      res += newStr[i] + ":" + s + " ";
    }
  }
}
/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe" */
function toWeirdCase(word) {
  word = word.toLowerCase().split(" ");
  temp = [];
  weirdcase = [];
  for (let i = 0; i < word.length; i++) {
    temp = word[i].split("");
    for (let j = 0; j < temp.length; j++) {
      if (j % 2 === 0) {
        temp[j] = temp[j].toUpperCase();
      }
    }
    weirdcase.push(temp.join(""));
  }
  return weirdcase.join(" ");
}
console.log(toWeirdCase("Weird full dlpsakfpodsa"));
