let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 18;

if (registeredEarly === true && age>18) {
  raceNumber = raceNumber+1000;
}

if (age>18 && registeredEarly === true) {
  console.log(raceNumber, 'Your race will start at 9:30am');
} else if (age > 18 && registeredEarly === false) {
  console.log(raceNumber, 'Your race will start at 11:00am');
} else if (age < 18 ) {
  console.log(raceNumber, 'Your race will start at 12:30pm');
} else {
  console.log('Please go to the registration desk');
}
