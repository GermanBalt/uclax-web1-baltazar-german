/*===================================
||
|| Functions: Destructuring Objects as Arguments
||
===================================*/
console.group("Functions: Destructuring");

const readPerson = ({ first, last, email, colors }) => {
    // const { first, last, email, colors } = personObj;

    console.log(`Hey ${first} ${last}, your email is: ${email}`);

    console.log("Your favorite colors are:");
    colors.forEach((color, idx) => {
        console.log(color);
    });
};

const person1 = {
    first: "Germs",
    last: "Balt",
    email: "Balty@gmail.com",
    colors: ["red", "white", "green"],
};
const person2 = {
    first: "Juans",
    last: "Balt",
    email: "juany@gmail.com",
    colors: ["yellow", "black", "gold"],
};

readPerson(person1);
readPerson(person2);

console.groupEnd();
