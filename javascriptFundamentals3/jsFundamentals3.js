//using the inbuilt javascript methods
//replace method
const myString1 = "hello world, my name is chappie";
const newString1 = myString1.replace("chappie", "jarvis");
console.log(newString1);

//using the join() method to turn an array/object into a string
const myArray1 = [1, "hello", "world", 17, "jarvis", "ironlad", 52, "ultron"];
const myArrayString1 = myArray1.join(" ");
console.log(myArrayString1);
console.log(typeof(myArray1));
console.log(typeof(myArrayString1));

//using the random() method to generate a random number
//usually the random() method generates a random number between 0 and 1.
const randomNumber = Math.random();
console.log(randomNumber);