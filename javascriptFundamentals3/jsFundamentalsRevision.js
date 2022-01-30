//Write a function called add7 that takes one number and returns that number + 7.
function add7 (number) {
    return number + 7;
}
console.log(add7 (17));

//Write a function called multiply that takes 2 numbers and returns their product.
function multiply (number1, number2) {
    return number1 * number2;
}
console.log(multiply(7 ,18));

//Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function capitalize (sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}
console.log(capitalize("heLlO WorLd"));

//Write a function called lastLetter that takes a string and returns the very last letter of that string:
function lastLetter (str) {
    return str.slice(-1);
}
console.log(lastLetter("hello world"));