/*
Using one single line of JavaScript code, complete
 the following tasks on the array of integers below.
 */

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

//Sort the numbers in descending order (10, 9, 8, 7, etc).
const intSort = integers.sort(function(a, b) { return b - a })
console.log(intSort)

//Remove any integers greater than 19.

const removeint = intSort.filter(int => {
    if (int < 19) {
        return int
    }
})
console.log(removeint)

//Multiply each remaining number by 1.5 and then subtract 1.
const multSubint = removeint.map(int => {
    return ((int * 1.5) - 1)
})
console.log(multSubint)

//Then output (either in the DOM or the console) the sum of all the resulting numbers.

const sumOfAll = multSubint.reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(sumOfAll)