const array = [1,2,3,4];
let initialValue = 0;

const sumWithInitial = array.reduce (
    (previousValue, currentValue) => (previousValue + currentValue),
    initialValue
);

console.log(sumWithInitial);