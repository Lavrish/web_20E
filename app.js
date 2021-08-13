// const hello = () => {

// }

// hello()

// const str = 'Hello'

// const hello1 = str => {
//     console.log(str+' World');
// }

// const hello2 = str => `${str} World`;

// const hello3 = (str) => {
//     return `${str} World`
// }


// DRY - Don't repeat yourself

const main = () => {
    const array = [1,2,3,4,5,6,7,8,9]
    console.log( getSum(array) );
}

const getSum = (arr) => {
    let result = 0
    for (const iterator of arr) {
        result += iterator
    }
    return result
}

const getMax = (arr) => {
    const result = arr[0]
    for(let i = 1; i < arr.length; i++) { 
        if (result < arr[i]) {
            result = arr[i]
        }
    }
    return result
}






main()