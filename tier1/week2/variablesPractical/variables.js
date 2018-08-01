/* jshint esversion:6 */

console.log('js');

//  declare and initialize a variable
let testVar = 9;
console.log(testVar);

// comma only works in console to concatenate (positive: adds space for you)
console.log('testVar value is', testVar);

testVar = 2345;
console.log('testVar value is', testVar);

testVar = 'awesome switch to words';
console.log('testVar value is', testVar);


// NUMBERS
let motocycles = 9;
let cars = 0;
console.log('motocycles:', motocycles);

console.log('we had to be that one in the garage');
// decrement motocycles
motocycles--;
console.log('motocycles:', motocycles);

console.log('cars:', cars);
console.log('need to add to my car collection');
// increment cars by 2
cars += 2;
console.log('cars:', cars);


// STRINGS
// When you concatenate a number INTO text, it becomes text.
let catName = 'Bandit';
let catAge = 1;
let sentence = catName + ' is ' + catAge + ' years old.';
console.log(sentence);
