function commonEnd(arr1, arr2) {
    return (arr1[0] === arr2[0] || arr1[arr1.length - 1] === arr2[arr2.length - 1]);
}
// console.log(commonEnd([1, 2, 3], [7, 3]));
// console.log(commonEnd([1, 2, 3], [7, 3, 2]));
// console.log(commonEnd([1, 2, 3], [1, 3]));
function reverse3one(arr) {
    let output = [arr[2], arr[1], arr[0]];
    return output;
}
function reverse3(arr) {
    let i = 1;
    let output = [];
    do {
        output.push(arr[arr.length - i]);
        i++;
    } while (i <= arr.length)
    return output;
}
// console.log(reverse3([1, 2, 3]));
// console.log(reverse3([5, 11, 9]));
// console.log(reverse3([7, 0, 0]));
function findMin(arr) {
    let i = 1;
    let output = arr[0];
    do {
        if (arr[i] < output) {
            output = arr[i];
        }
        i++;
    } while (i < arr.length)
    return output;
}
// console.log(findMin([1, 2, 3]));
// console.log(findMin([5, 11, 9]));
// console.log(findMin([7, 0, -1]));
function findMax(arr) {
    let i = 1;
    let output = arr[0];
    while (i < arr.length) {
        if (arr[i] > output) {
            output = arr[i];
        }
        i++;
    }
    return output;
}
// console.log(findMax([1, 2, 3]));
// console.log(findMax([5, 11, 9]));
// console.log(findMax([7, 0, -1]));
function arrSum(arr) {
    let i = 0;
    let output = 0;
    while (i < arr.length) {
        output = output + arr[i];
        i++;
    }
    return output;
}
// console.log(arrSum([1, 2, 3]));
// console.log(arrSum([5, 11, 9]));
// console.log(arrSum([7, 0, -1]));
// console.log(arrSum([7, 0, 3, 10]));
function middleWay(arr1, arr2) {
    return [arr1[1], arr2[1]];
}
// console.log(middleWay([1, 2, 3], [4, 5, 6]));
// console.log(middleWay([7, 7, 7], [3, 8, 0]));
// console.log(middleWay([5, 2, 9], [1, 4, 5]));
function average(arr) {
    return Math.round(arrSum(arr) / arr.length);
}
console.log(average([1, 2, 3], [4, 5, 6]));
console.log(average([7, 7, 7], [3, 8, 0]));
console.log(average([5, 2, 9], [1, 4, 5]));
