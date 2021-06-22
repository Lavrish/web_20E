/*cigarParty(30, false) → false
cigarParty(50, false) → true
cigarParty(70, true) → true*/

function cigarParty(cigars, weekend) {
    // let result = false;
    // if (cigars >= 40 && cigars <= 60) {
    //     result = true;
    // } else if (weekend && cigars >= 40) {
    //     result = true;
    // }
    // return result;
    // return cigars >= 40 && cigars <= 60 || weekend && cigars >= 40;
    return cigars >= 40 && (cigars <= 60 || weekend);
}

console.log(cigarParty(30, false));
console.log(cigarParty(50, false));
console.log(cigarParty(70, true));