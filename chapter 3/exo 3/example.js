//9
// create a function to check wether the string is isogram if yes return true else false
//let word = "random";
//let indexedletter = 0;
//for (let i = 0; i < word.length; i++) {
//  word = word
//  for (let j = 1; j < word[i].length; j++) {
//    if (word[i].indexOf(word[j]) == word[i].lastIndexOf(word[j])) {
//      indexedletter = indexedletter + 1;
//    }
//  }
//}
//if (indexedletter === word.length) {
//  console.log("true");
//} else {
// console.log("false");
//}
//
//function checkInvert(str) {
//  let left = 0;
//  let right = str.length - 1;
//
//  while (left < right) {
//   if (str[left] !== str[right]) {
//     return false;
//  }
//   left++;
//   right--;
// }
// return true;
//}
//console.log(checkInvert("racecar"));
function capfirst(str) {
  str = str.toLowerCase();
  let result = str.split();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[0]) {
      result.push(str[i].toUpperCase());
    }
    if (str[i] === "," || str[i] === ";" || str[i] === ".") {
      result.push(str[i + 1].toUpperCase());
    }
    return result.join("");
  }
}
console.log(capfirst("racecar,food"));
