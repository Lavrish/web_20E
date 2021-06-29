'use strict;'

/* 10 printDivisors
Реализовать метод, который принимает целое положительное число. Метод должен выводить на экран все положительные числа, на которые заданное число делится без остатка и отображает количество найденных делителей.
Пример: printDivisors(32) ->
32
16
8
4
2
1
Total divisors: 6 */

function printDivisors(givenNumber) {
    let i = givenNumber;
    let count = 0;
    while (i > 0) {
        if (givenNumber % i === 0) {
            console.log(i);
            count++;
        }
        i--;
    }
    console.log('Total divisors:', count);
}

printDivisors(32);
console.log('');

/* 12 Натуральные числа
Даны натуральные числа от a = 35 до b = 87. Вывести на консоль те из них, которые при делении на 7 дают остаток 1, 2 или 5. а и b должны приниматься функцией. */

function divideBySeven(a, b) {
    let i = a;
    while (i <= b) {
        if (i % 7 === 1 || i % 7 === 1 || i % 2 === 5) {
            console.log(i);
        }
        i++;
    }
}

divideBySeven(35, 87);
console.log('');

/* 13 Последовательность (1000)
Необходимо вывести на консоль такую последовательность чисел:

mySecondLine(1000) ->
1 2 4 8 16 32 64 128 256 512 */

function mySecondLine(limit) {
    i = 1;
    line = ''
    while (i <= limit) {
        line += i + ' ';
        i *= 2;
    }
    return line;
}

console.log(mySecondLine(1000));
console.log('');

/* 14 Буква 'я'
Буква "Я" воистину великая буква. И все слова в которых есть это буква являются великими. Напишите метод, который находит великие слова.

findGreatWord(яблоко) -> true
findGreatWord(тыблоко) -> false */

function findGreatWord(word) {
    return word.includes('я') || word.includes('Я');
}

function findGreatWordTwo(word) {
   return !(word.indexOf('я') === -1 && word.indexOf('Я') === -1);
}

console.log(findGreatWord('яблоко'));
console.log(findGreatWord('тыблоко'));
console.log(findGreatWordTwo('яблоко'));
console.log(findGreatWordTwo('тыблоко'));
console.log('');


/* 17 Степень числа
Возведите число n во вторую степень. Не используя арифметический оператор умножения.

digitPowTwo(5) -> 25
digitPowTwo(10) -> 100
digitPowTwo(4) -> 16 */

function digitPowTwo(givenNumber) {
    let i = 1;
    let result = 0;
    while (i <= givenNumber) {
        result += givenNumber;
        i++;
    }
    return result;
}

console.log('5 * 5 =', digitPowTwo(5));
console.log('10 * 10 =', digitPowTwo(10));
console.log('4 * 4 =', digitPowTwo(4));