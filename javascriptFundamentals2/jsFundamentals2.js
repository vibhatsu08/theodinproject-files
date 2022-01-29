const string = "hello world!";
console.log(string);

const string1 = "this is a string";
//concatenating strings 
const greeting = `hello world!, ${string1}`; //by using the `` quotating marks, concatentating of strings is possible.
console.log(greeting);


const number = '1234';
const num = Number(number);
console.log(typeof num);

//multiline strings
const multiString = `hello world
my name is chappie`;
console.log(multiString);

//calculate the string length
const newString = "hello world";
const length = newString.length;
console.log(length);

//extracting string parts
//javascript slice()
const newArray = "Apple, banana, mango";
console.log(newArray.length);
let stringSlice = newArray.slice(5, 13)
console.log(stringSlice);

//javascript substring()
//difference is that substring() cannot accept negative index
let newString2 = "Apple, banana, kiwi";
let substring = string.substring(7, 9);
console.log(substring);

//javascript substr()
//difference is that the second index specifies the length of the required substr()

