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

//using the shift method
const fruits3 = ["banana", "apple", "grapes", "pear"];
//after using shift method
console.log(fruits3);
fruits3.shift();
console.log(fruits3);

//using the unshift method
//before using the shift method
console.log(fruits3);
fruits3.unshift("juice");
//after using the unshift method
console.log(fruits3);

//using the .length method to add new elements to the array
fruits3[fruits3.length] = "juice";
console.log(fruits3);

//merging two arrays using the concat method
const newArray1 = ["cars", "bikes", "trucks"];
const newArray2 = ["banana", "apple", "grapes"];
const newArray1newArray2 = newArray1.concat(newArray2);
console.log(newArray1newArray2);

//merging three arrays
const newArray3 = ["iphone", "ipad", "airpods"];
const newArray1newArray2newArray3 = newArray1.concat(newArray2, newArray3);
console.log(newArray1newArray2newArray3);

//using the splice method
//splicing an array adds items to an array
const newArray4 = ["mando", "boba fett", "grogu", "fennec shand"];
newArray4.splice(2, 0, "lemon", "kiwi");
//array_name.splice(number_of_elements, number_of_elements_to_delete, elements);
console.log(newArray4);