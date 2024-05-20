/*===================================
||
|| Data Types: Numbers and Strings
||
===================================*/

/*---------------------------
| Date Types: Numbers
---------------------------*/
console.group("Data Types: Numbers");

const myNum1 = 4949;
const myNum2 = 5644;
console.log(myNum1 + myNum2);

console.groupEnd();

/*---------------------------
| Data Types: Strings
---------------------------*/

console.group("Data Types: Strings");

const myString1 = "I went to the";
const myString2 = "park";
console.log(myString1 + myString2);

console.groupEnd();

/*---------------------------
| Data Types: Template Strings
---------------------------*/

console.group("Data Types: Template Strings");

const myString3 = "Yet another String";
const myTempString = `
I can write

multi line stuff here

yada yada yada
 ${myNum1}
`;

console.log(myTempString);

console.groupEnd();
