'use strict;'

/* 03 squirrelPlay
The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive). Unless it is summer, then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer, return true if the squirrels play and false otherwise.

Examples

squirrelPlay(70, false) → true
squirrelPlay(95, false) → false
squirrelPlay(95, true) → true */

function squirrelPlay(temperature, isSummer) {
    return (temperature >= 60 && temperature <= 90 && !isSummer) || (temperature >= 60 && temperature <= 100 && isSummer);
}

console.log(squirrelPlay(70, false));
console.log(squirrelPlay(95, false));
console.log(squirrelPlay(95, true));
console.log('');

/* 04 caughtSpeeding
You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.

Examples

caughtSpeeding(60, false) → 0
caughtSpeeding(65, false) → 1
caughtSpeeding(65, true) → 0 */

function caughtSpeeding(speed, isBirthday) {
    if (speed <= 60 && !isBirthday || speed <= 65 && isBirthday) {
        return 0;
    } else if (speed <= 80 && !isBirthday || speed <= 85 && isBirthday) {
        return 1;
    } else {
        return 2;
    }
}

console.log(caughtSpeeding(60, false));
console.log(caughtSpeeding(65, false));
console.log(caughtSpeeding(65, true));
console.log(caughtSpeeding(84, true));
console.log(caughtSpeeding(84, false));
console.log('');