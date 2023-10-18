/*There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).

Runners that are exactly 18 must go to the registration desk*/

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
