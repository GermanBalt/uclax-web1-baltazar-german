/*===================================
||
|| Functions: Call Backs (First Class Functions)
||
===================================*/
console.group("Functions: Callbacks");

const myConsumerFn = (fn) => {
    console.log("My Consumer Function");
    fn();
};

const myFnToPas = () => {
    console.log("Passing this function in");
};

myConsumerFn(myFnToPas);
myConsumerFn(() => {
    console.log("My Callback anon");
});

console.groupEnd();
