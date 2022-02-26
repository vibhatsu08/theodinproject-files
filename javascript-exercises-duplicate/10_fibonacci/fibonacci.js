const fibonacci = function(number) {
    if (number < 0) { 
        return "OOPS";
    }
    if (number === 0) {
        return 0;
    }
    let num1=0, num2=1, nextNum;
    if (number >= 0) {

        for (let i=1; i<number; i++) {
            nextNum = num1 + num2;
            num1 = num2;
            num2 = nextNum;
        }

        return nextNum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
