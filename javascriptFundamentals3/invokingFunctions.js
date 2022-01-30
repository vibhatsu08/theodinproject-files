function helloWorld() {
    console.log("hello world");
}
helloWorld();

//adding default parameters to functions
function greeting(name = "Tony") {
    console.log(`hello world ${name}`);
}
greeting("Steve");
greeting();

//arrow functions
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(item => item*2); //here doubled is the variable name, and item is the parameter name, and the item*2 is the return value to be returned.
console.log(doubled);

//function inside functions
function bigFunction() {
    const myValue = 17;

    subFunction1();
    subFunction2();
    subFunction3();
}

function subFunction1(value) {
    console.log(value);
}
function subFunction2(value) {
    console.log(value);
}
function subFunction3(value) {
    console.log(value);
}
