// console.log("Hello object!");
// let user = {
//     //creating an empty object
// }
// user.name = "John"; //adding the property name to the object
// user.surname = "Smith"; //adding the property surname to the object
// console.log(user);
// user.name = "Pete"; //renaming the property name to the object
// console.log(user); //printing the user object
// //deleting the property name from the object
// delete user.name;
// console.log(user);

//check for emptiness
// function isEmpty (obj) {
//     for (key in obj) {
//         return false;
//     }
//     return true;
// }
// let schedule = {};
// console.log( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// console.log( isEmpty(schedule) ); // false

//sum object properies
// let salaries = {
//     John : 100,
//     Ann : 160,
//     Pete : 130,
// }

// let sum = 0;
// for (key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum);

//multiply numeric properties by 2.
function multiplyNumeric (obj) {
    for (key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
  multiplyNumeric(menu);

console.log(menu);

