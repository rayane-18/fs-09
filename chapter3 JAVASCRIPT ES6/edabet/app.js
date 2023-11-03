/*Array of Multiples
Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of 
num until the array length reaches length.

Examples
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
*/
function arrayOfMultiples(num, length) {
  let arr = [];
  for (let i = 1; i < length; i++) {
    arr.push(num * 2);
    console.log(arr);
  }
}
console.log(arrayOfMultiples(2, 5));
/*Convert Age to Days
Create a function that takes the age in years and returns the age in days.

Examples
calcAge(65) ➞ 23725

calcAge(0) ➞ 0

calcAge(20) ➞ 7300*/
function calcAge(age) {
  return age * 365;
}
/*Convert Hours into Seconds
Write a function that converts hours into seconds.

Examples
howManySeconds(2) ➞ 7200

howManySeconds(10) ➞ 36000

howManySeconds(24) ➞ 86400
Notes
60 seconds in a minute, 60 minutes in an hour
Don't forget to return your answer.*/
function howManySeconds(hour) {
  return hour * 3600;
}
/*
Tower of Hanoi
There are three towers. The objective of the game is to move all the disks over to tower #3,
 but you can't place a larger disk onto a smaller disk. To play the game or learn more about
  the Tower of Hanoi, check the Resources tab.

Tower of Hanoi

Create a function that takes a number discs as an argument and returns the minimum amount of
 steps needed to complete the game.

Examples
towerHanoi(3) ➞ 7

towerHanoi(5) ➞ 31

towerHanoi(0) ➞ 0
Notes
The amount of discs is always a positive integer.
1 disc can be changed per move.*/
/*Number of Boomerangs
A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

Some boomerang examples:

[3, 7, 3], [1, -1, 1], [5, 6, 5]
Create a function that returns the total number of boomerangs in an array.

To illustrate:

[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
Be aware that boomerangs can overlap, like so:

[1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
Examples
countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2

countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0
Notes
[5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.
*/
function countBoomerangs(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
      counter++;
    }
  }
  return counter;
}
function findBrokenKeys(str1, str2) {
  let res = [];
  for (let i = 0; i < str1.length; i++) {
    {
      for (let j = 0; j < res.length; j++) {
        if (str1[i] !== str2[i]) {
          if (str1[i] !== res[j]) {
            res.push(str1[i]);
          }
        }
      }
    }
  }
  return res;
}
