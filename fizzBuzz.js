let limit = 15;

for (let i=1; i<=limit; i++) {
    if (i%3 == 0) {
        console.log("fizz");
    }
    else if (i%5 == 0) {
        console.log("buzz");
    }
    else {
        console.log(i);
    }
}