/*git add0 . 
git commit -m "loops" 
git push -u origin main*/
//   1. Declare an empty array;
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 2. Declare an array with more than 5 number of elements
console.log(arr.length);
// 3. Find the length of your array

// 4. Get the first item, the middle item and the last item of the array
console.log(arr[0], arr[arr.length / 2], arr[arr.length - 1]);
// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
mixedDataTypes = ["food", 1.4, true, false, "great", 55];
console.log(mixedDataTypes.length);
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// 7. Print the array using console.log()
console.log(itCompanies);
// 8. Print the number of companies in the array
console.log(itCompanies.length);
// 9. Print the first company, middle and last company
console.log(
  itCompanies[0],
  itCompanies[Math.floor(itCompanies.length / 2)],
  itCompanies[itCompanies.length - 1]
);
// 10. Print out each company
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
// 11. Change each company name to uppercase one by one and print them out
/*for (let i = 0; i < itCompanies.length; i++) {
  itCompanies[i] = itCompanies[i].toUpperCase();
  console.log(itCompanies[i]);
}*/
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
for (let i = 0; i < itCompanies.length - 2; i++) {
  console.log(itCompanies[i] + " ,");
}
console.log(
  itCompanies[itCompanies.length - 2] +
    " and " +
    itCompanies[itCompanies.length - 1] +
    "are big IT companies."
);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function isCompany(name) {
  for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i] === name) {
      return true;
    }
  }
  return false;
}
// 14. Filter out companies which have more than one 'o' without the filter method
function filterOutCompany(letter) {
  const newarr = [];
  let k = 0;

  for (let i = 0; i < itCompanies.length; i++) {
    let count = 0;

    for (let j = 0; j < itCompanies[i].length; j++) {
      if (itCompanies[i][j].toUpperCase() === letter.toUpperCase()) {
        count++;
      }
    }

    if (count > 1) {
      newarr[k] = itCompanies[i];
      k++;
    }
  }

  return newarr;
}
console.log(filterOutCompany("O"));
// 15. Sort the array using sort() method
console.log(itCompanies.sort());
// 16. Reverse the array using reverse() method
console.log(itCompanies.reverse());
// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(3));
// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(0, -3));

// 20. Remove the first IT company from the array
console.log(itCompanies.slice(0));

// 22. Remove the last IT company from the array
console.log(itCompanies.slice(0, itCompanies.length - 1));
// 21. Remove the middle IT company or companies from the array
// 19. Slice out the middle IT company or companies from the array
console.log(itCompanies.splice(Math.floor(itCompanies.length / 2) - 1));
