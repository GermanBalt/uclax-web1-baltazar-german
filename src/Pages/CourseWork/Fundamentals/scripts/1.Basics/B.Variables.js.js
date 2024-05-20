/*===================================
||
|| Variables
||
===================================*/
console.group("Variables");

/*
A variable is a reference to a value so it can be used over and over again or referenced later on
Words like let or const are declarations of a variable meaning it is the origin or first time we set it up.
*/
// Let Variable can be changed
let favColor = "Blue";
console.log(favColor);
favColor = "Red";
console.log(favColor);

// Const cannot be changed (constant)
const firstName = "Germs";
console.log(firstName);

console.groupEnd();
