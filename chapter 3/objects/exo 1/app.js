// second edit
function FindOddTimes(Array) {
  let count = 0;
  for (let i = 0; i < Array.length; i++) {
    count[i] = 0;
    for (let j = 0; j < Array.length; j++) {
      if (Array[j] === Array[i]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return Array[i];
    }
  }
}
function StringToChara(string) {
  let Array = string.toLowerCase().split("");
  let newtr = "";
  for (let i = 0; i < Array.length; i++) {
    if (Array.indexOf(Array[i]) === Array.lastIndexOf(Array[i])) {
      newtr += "(";
    } else {
      newtr += ")";
    }
  }
  return newtr;
}
function countxny(string) {
  let countx = 0;
  let counto = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === "x") {
      countx++;
    }
    if (string[i].toLowerCase() === "o") {
      counto++;
    }
  }
  if (countx === counto) {
    return true;
  } else {
    return false;
  }
}
// spaphgeti code
/*function sortarray(array) {
  let temp = array;
  let check = true;
  let res = []; 
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        check = true;
      } else {
      }
      console.log(check);
    }
    if (check === true) {
      res.push(temp[i]);
      console.log(temp[i]);
    }
  }
  return res;
}
console.log(sortarray(["Telescopes", "Glasses", "Eyes", "Monocles"]));
*/
/*function rotate(text) {
  text = text.split("");
  let array = [];
  for (let i = 0; i < text.length; i++) {
    text.push(text.shift());
    array.push(text.join(""));
  }
  return array;
}