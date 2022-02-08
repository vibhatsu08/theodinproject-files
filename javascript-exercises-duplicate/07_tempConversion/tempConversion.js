const ftoc = function(fahrenheit) {
  let celsius = Number(((5/9) * (fahrenheit - 32)).toFixed(1));
  return celsius;
};

const ctof = function(celsius) {
  let fahrenheit = Number((celsius * (9/5) + 32).toFixed(1));
  return fahrenheit;
};

console.log(ftoc(100));
console.log(ctof(0));
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
