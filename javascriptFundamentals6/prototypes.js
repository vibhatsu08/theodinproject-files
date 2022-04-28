// using javascript prototypes
function Person (firstname, lastname, age, eyecolour) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.eyecolour = eyecolour;
}

const person1 = new Person ("tony", "stark", 53, "blue");
const person2 = new Person ("steve", "rogers", 189, "green");
person1.avenger = "leader";
person2.avenger = "hero";

console.log(person1);
console.log(person2);

// using prototype property
// making this prototype property causes the the two created objects to inherit the nationality property when called.
Person.prototype.nationality = "English"; 

console.log(person1.nationality);