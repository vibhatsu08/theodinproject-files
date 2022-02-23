// creating objects
// let user = new Object(); //object constructor syntax
// let user = {}; //object literal syntax

// making a simple object
// let user = {
//     firstName: "tony",
//     lastName: "stark",
//     alias: "iron man"
// };
// //printing the property values of the object
// console.log(user);
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.alias);

// //adding values to the object
// user.isAdmin = true;
// console.log(user);

// //deleting values from the object
// delete user.alias;
// console.log(user);

// handing multiword properties
// let person1 = {
//     firstName : "steve",
//     lastName : "rogers",
//     "likes stark" : false,
// };

// console.log(person1);

// //adding multiword properties to the object using the square brackets
// person1["is avenger"] = true;
// console.log(person1);

// //deleting multiword properties from the object using the square brackets
// delete person1["likes stark"];

// console.log(person1);
// let avenger = {
//     name : "peter",
//     alias : "spiderman",
//     age : 19,
//     "is superhero" : true,
// };

// console.log(avenger);

// let key = "is guardian";
// avenger[key] = false;

// console.log(avenger);

//property value shorthand
// function makeUser (name, age) {
//     return {
//         name : name,
//         age : age,
//     };
// }

// let user = makeUser("Tony", 58);

// console.log(user.name);
// console.log(user.age);

//property value shorthand method 2
// function makeUser (name, age) {
//     return {
//         name,
//         age,
//     };
// }

// let user = makeUser("tony", 58);
// console.log(user.name);
// console.log(user.age);

//using the in property of javascript in objects

// let user = {
//     name : "tony",
//     age : 58,
// }

// console.log("name" in user);
// console.log("steve" in user);

//the for...in loop
let user = {
    name1 : "peter",
    name2 : "nate",
    name3 : "kate",
}

for (key in user) {
    console.log(key);
    console.log(user[key]);
}