//Convert Kelvin to Celsius, then to Fahrenheit.

//forecast today, stays constant
const kelvin = 0
//celsius is 273 lower than kelvin
var celsius = kelvin-273
//formula to calculate fahrenheit from celsius
let fahrenheit = celsius*(9/5)+35
//rounding to whole number since usually results in decimal
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

let newton = celsius*(33/100)
newton = Math.floor(newton)
console.log(newton)
