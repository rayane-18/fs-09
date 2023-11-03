//1
function isEvenOrOdd(num) {
  if (num % 2 == 0) {
    return "Number is even";
  } else {
    return "Number is odd";
  }
}
//2
function isNumber(num) {
  if (NaN(num)) {
    return "Variable is a valid number";
  } else {
    return "Variable is not a number";
  }
}
//3
function findLargest(num1, num2) {
  if (num1 > num2) {
    return "num1";
  } else if (num1 == num2) {
    return "num1,num2";
  } else {
    return "num2";
  }
}
//4
function findLargestofthree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return "num1";
  } else if (num2 > num3) {
    return "num2";
  } else {
    return "num3";
  }
}
//5
function findTriangleType(side1, side2, side3) {
  if (side1 == side2 && side1 == side3 && side2 == side3) {
    return "equilateral triangle.";
  } else if (side1 == side2 || side1 == side3 || side2 == side3) {
    return "isosceles triangle.";
  } else {
    return "scalene triangle.";
  }
}
//6
function evalNumbers(operation, num1, num2) {
  if (operation == add) {
    return "addition is " + num1 + num2;
  } else if (operation == "subtract") {
    return "subtraction is " + num1 - num2;
  } else if (operation == "multiply") {
    return "multiply is " + num1 * num2;
  } else if (operation == "divide") {
    if (num2 != 0) {
      return "division is " + num1 / num2;
    } else {
      return "cannot divide by 0";
    }
  } else if (operation == "modulus") {
    return "modulus is " + (num1 % num2);
  } else {
    return "Invalid operation";
  }
}
//7
function findGrade(grade) {
  if (grade > 100 || grade < 0) {
    return "Invalid mark";
  } else if (grade >= 90) {
    return "S Grade";
  } else if (grade >= 80) {
    return "A Grade";
  } else if (grade >= 70) {
    return "B Grade";
  } else if (grade >= 60) {
    return "C Grade";
  } else if (grade >= 50) {
    return "D Grade";
  } else if (grade >= 40) {
    return "E Grade";
  } else {
    return "Student has failed";
  }
}
//8 with switch
//Find the a number is present in given range
//Function checkInRange() finds if the given number is within the provided start and end range using >=, <= and && operators in JavaScript.
//checkInRange(startnum,endnum,num) {
//  switch (true) {
//    case num >= startnum && num <= endnum:
//      return "present in given range"
//    case num <= startnum && num >= endnum:
//      return "present in given range"
//    default:
//      break;
//  }
//}
//Print “Between the range” if num is between start and end values
//Else Print “Outside the range” since num is outside start and end values.
//9     remove all the elements after #
// www.facebook.com#login
