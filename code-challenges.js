// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]
const shrinkAndShuffle = (array) => {
  // remove first element
  array.shift();
  // randomly sort remaining elements
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array
}

console.log(shrinkAndShuffle(collections))
console.log(shrinkAndShuffle(collections))
console.log(shrinkAndShuffle(collections))


// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125
const sumCubed = (array) => {
  // let sum = 0
  // reduce() take all values in the array and execute the sum
  // i.e. (a + b), then stor the sum in the accumulator which is
  // a number defaulted to 0
  return array.map(value => value**3).reduce((a, b) => a + b, 0)
  // for (let i = 0; i < array.length; i++) {
  //   sum += array[i]
  // }
  // return sum
}

console.log(sumCubed(cubeAndSum1))
console.log(sumCubed(cubeAndSum2))


// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]
const findMinMax = (array) => {
  let new_array = []
  new_array.push(Math.min(...array))
  new_array.push(Math.max(...array))
  return new_array
}

console.log(findMinMax(nums1))
console.log(findMinMax(nums2))


// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"
const altCapLetter = (string) => {
  // convert to array first
  return string.split("").map((value, index) => {
    if (index % 2 === 1) {
      value = value.toUpperCase()
    }
    return value
    //console.log(index)
  }).join("")
  // let new_string = string.split("");
  // console.log(new_string);
  // for (let i = 1; i < new_string.length; i += 2) {
  //   new_string[i] = new_string[i].toUpperCase();
  // }
  // return new_string.join("");
}

console.log(altCapLetter(testString1))
console.log(altCapLetter(testString2))


// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
const noDups = (arr1, arr2) => {
  // first remove any duplicates in the first array
  let new_array = []
  new_array = arr1.filter((value, index) => arr1.indexOf(value) == index)
  // console.log(new_array)
  // then traverse the second array and only add numbers
  // that dont exist in the first array
  arr2.map((value, index) => {
    for (let j = 0; j < new_array.length; j++) {
      if (!new_array.includes(value)) {
        new_array.push(value);
      }
    }
  })
  return new_array;
}

console.log(noDups(arr1, arr2))
