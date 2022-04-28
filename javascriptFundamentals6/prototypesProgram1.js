// using the prototype property in javascript.
function Plant () {
    this.country = "India";
    this.isOrganic = true;
}

Plant.prototype.showNameAndColour = function () {
    console.log("Fruit is " + this.name + " is of colour " + this.colour);
}

Plant.prototype.isOrganic = function () {
    if (this.isOrganic) {
        console.log("Organic!!! Boom Baby!!!!");
    }
}

function Fruit (fruitName, fruitColour) {
    this.name = fruitName;
    this.colour = fruitColour;
}

Fruit.prototype = new Plant ();

let aBanana = new Fruit ("banana", "yellow");
let aPear = new Fruit ("pear", "green");

console.log(aBanana);
console.log(aPear);
