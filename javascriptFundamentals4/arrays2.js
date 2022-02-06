//using toString() method to convert array to string
const fruits = ["banana", "apple", "grapes", "pear"];
console.log(fruits);
console.log(fruits.toString());

//using join() method to convert array to string
const fruits1 = ["banana", "apple", "grapes", "pear"];
console.log(fruits1.join(' | '));

//popping and pushing
const fruits2 = ["banana", "apple", "grapes", "pear"];
//before popping
console.log(fruits2);
//after popping
fruits2.pop();
console.log(fruits2);
//now pushing elements in the array
fruits2.push("juice");
console.log(fruits2);
