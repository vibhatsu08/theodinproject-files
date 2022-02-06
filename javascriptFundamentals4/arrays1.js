//creating an array 
const array1 = ["cars", "bikes", "trucks"];
//const/let array_name = ["item1", "item2"]; //can store strings, numbers and boolean values.
console.log(array1);

//can also create the array and then insert the elements 
const array2 = [];
array2[0] = "cars";
array2[1] = "bikes";
array2[2] = "trucks";
console.log(array2);

//using the keyboard 'new' to create an array
const array3 = new Array("cars", "bikes", "trucks");
console.log(array3);

//accessing the elements of the array, by element address in the array
console.log(array1[1]);

//giving an element a new value in the array
//array1 before
console.log(array1);
//array1 after
array1[0] = "planes";
console.log(array1);

//arrays are objects
console.log(typeof(array1));
//using arrays as objects 
const person = ["tony", "stark", "ironman", 52];
console.log(person);

//creating an object
const newPerson = {
    firstName : "tony",
    lastName : "stark",
    superhero : "ironman",
    age : 52
};
console.log(newPerson);

//finding the length of the array
const array4 = ["tony", "stark", "avenger", "ironman", 52];
console.log(array4.length);

//sorting the elements of the array
const numbers = [17, 2, 56, 90, 9, 892, 12];
console.log(numbers.sort());

//accessing the first element of the array
console.log(numbers[0]);
//accessing the last element of the array
console.log(numbers[numbers.length-1]);

//adding elements in the array
numbers.push(12);
console.log(numbers);
//adding elements in a particular position in the array
numbers[2] = "apple";
console.log(numbers);
//removing element from the end
numbers.pop();
console.log(numbers);

//difference between arrays and objects
//arrays use numbered indexes and objects use named indexes
