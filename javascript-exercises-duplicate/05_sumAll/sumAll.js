const sumAll = function(number1, number2) {
    let sum = 0;

    if ((number1 < 0) || (number2 < 0)) {
        return "ERROR";
    }
    else if (number1 > number2) {

        for (let i=number2; i<=number1; i++) {
            sum += i;
        }
        return sum;
    }
    else if ((typeof number1 != 'number') || (typeof number2 != 'number')) {
        return "ERROR";
    }
    else if ((number1 >= 0) && (number2 >= 0)) {
        for (let i=number1; i<=number2; i++) {
            sum += i;
        }
        return sum;
    }
    
};
console.log(sumAll(10, 1));
// Do not edit below this line
module.exports = sumAll;
