// using the this keyword and the new keyword in javascript
function player (name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(name);
        console.log(marker);
    }
}
const player1 = new player("steve", "o");
const player2 = new player("tony", "x");
player1.sayName();
player2.sayName();
