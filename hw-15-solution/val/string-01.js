'use strict;'

/* 04 makeOutWord
Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. "<>". Note: use str.substring(i, j) to extract the String starting at index i and going up to but not including index j.

makeOutWord("<<>>", "Yay") → "<<Yay>>"
makeOutWord("<<>>", "WooHoo") → "<<WooHoo>>"
makeOutWord("[[]]", "word") → "[[word]]" */

function makeOutWord(out, word) {
    return out.substring(0, 2) + word + out.substring(2, 4);
}

console.log(makeOutWord("<<>>", "Yay"));
console.log(makeOutWord("<<>>", "WooHoo"));
console.log(makeOutWord("[[]]", "word"));
console.log('');

/* 05 extraEnd
Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.

extraEnd('Hello') → lololo
extraEnd('ab') → ababab
extraEnd('Hi') → HiHiHi */

function extraEnd(word) {
    return word.substring(word.length - 2) + word.substring(word.length - 2) + word.substring(word.length - 2);
}

console.log(extraEnd('Hello'));
console.log(extraEnd('ab'));
console.log(extraEnd('Hi'));
console.log('');

/* 06 firstTwo
Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.

firstTwo('Hello') → He
firstTwo('abcdefg') → ab
firstTwo('ab') → ab */

function firstTwo(word) {
    if (word.length < 2) {
        return word;
    } else {
        return word[0] + word[1];
    }
}

console.log(firstTwo('Hello'));
console.log(firstTwo('abcdefg'));
console.log(firstTwo('ab'));
console.log(firstTwo('X'));
console.log(firstTwo(''));
console.log('');

/* 07 firstHalf
Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

firstHalf("WooHoo") → "Woo"
firstHalf("HelloThere") → "Hello"
firstHalf("abcdef") → "abc" */

function firstHalf(word) {
    return word.substring(0, word.length / 2);
}

console.log(firstHalf('WooHoo'));
console.log(firstHalf('HelloThere'));
console.log(firstHalf('abcdef'));
console.log('');