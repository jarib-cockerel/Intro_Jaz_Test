function calculateTaxes(income) {
  if (!Number.isFinite(income)) {
    throw new Error("BAD INCOME");
  }
  if (income > 30000) {
    return income * 0.25;
  } else {
    return income * 0.15;
  }
}
// best to seperate test from actual application code
// you could write jasmine but not best practice
// same file name with file.test.js for script

//format is expect(someValue).someMatcher(...)

//remove dupliaces of values

function removeDupes(values) {
  return [...new Set(values)]; //return value as an array to remove duplicates
}

function removeCopyCat(value) {
  const arr = [...new Set(value)];
  if (typeof value === "string") return arr.join(""); //return value that remove duplicate strings 'hello' to 'helo' as the l was removed since it was a duplicate
  //the "" will return the value into a string
  return;
}

//tobeInstanceOf

//using.not.matcher
function remove(arr, val) {
  return arr.filter((el) => {
    return el !== val;
  });
} //return value outside of array so [1-6], 6 which test should return 6

// function enterNum(numEnter) {
//   if (!Number.isFinite(numEnter)) {
//     throw new Error("Invalid Number input!!");
//   } else {
//     return numEnter;
//   }
// }

let userNames = []; //passthru result in array form

let nameInput = document.getElementById("userName"); //select input from userName submission

function subForm() {
  userNames.push(nameInput.value);
} //push value of userNames into an array format
