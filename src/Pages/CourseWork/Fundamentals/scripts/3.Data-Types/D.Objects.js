/*===================================
||
|| Data Types: Objects
||
===================================*/
/*---------------------------
| Date Types: Objects - essentially curly braced elements that keep property values in a group
an object has properties and those properties have values.
---------------------------*/
console.group("Data Types: Objects");

let myObj = {
    str: "Red",
    num: 8712,
    arr: [10, 23, 45],
    fn: () => {
        console.log("This is a function assigned to an object");
    },
};

myObj.fn();

// Everything is an Object
let myArr = ["up", "down", 23];

console.log(myArr);

if (myArr.length > 2) {
    console.log("Array has more than 2 elements");
}
myArr.sayWhat = "Say who?";
console.log(myArr);

console.groupEnd();
