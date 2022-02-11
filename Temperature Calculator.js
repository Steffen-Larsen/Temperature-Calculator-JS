/* This is the Kelvin constant */
const Kelvin = 293;

/* This is converting Kelvin to Celsius */
var Celsius = Kelvin - 273;

/* This is converting Celsius to Fahrenheit */
let Fahrenheit = Celsius * (9/5) + 32;

/* This is rounding Fahrenheit to a full number */
Fahrenheit = Math.floor(Fahrenheit);

console.log('This is the Kelvin temp: ' + Kelvin);
console.log('This is the Celsius temp: ' + Celsius);
console.log('This is the Fahrenheit temp: ' + Fahrenheit);

console.log(`The temperature is: ${Kelvin} degrees Kelvin`);
console.log(`The temperature is: ${Celsius} degrees Celsius`);
console.log(`The temperature is: ${Fahrenheit} degrees Fahrenheit`);
