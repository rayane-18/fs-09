function numInStr(arr) {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return arr.filter((str) =>
    str.split("").some((char) => num.includes(Number(char)))
  );
}

function findFrequent(arr) {
  const newArr = arr;
  let rep = [];
  let start = 1;
  let count = [];
  arr.map((el, i) => {
    if (arr.indexOf(el) !== arr.lastIndexOf(el)) {
      count++;
      newArr.splice(newArr.indexOf(el));
    }

    rep.push(count);
  });
  return rep;
}
console.log(findFrequent(["1cds", "fdsg", "8f", "ff", "55f"]));
