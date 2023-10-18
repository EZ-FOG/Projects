/*Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. 
In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life.

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.*/

//my age as a variable
var myAge = 19
//first two years of a dogs life are measured differently
let earlyYears = 2

earlyYears *= 10.5
//normal dog years conversion
let laterYears = myAge-2
//changing value of later years variable
laterYears *= 4

console.log(earlyYears, laterYears)
//adding early and later years together to calculate my age if I was a dog
var myAgeInDogYears = earlyYears + laterYears
//stores my name in lower case
var myName = 'Erin'.toLowerCase()
//printing statement with all variables used
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
