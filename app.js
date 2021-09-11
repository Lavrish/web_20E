/*const prom = new Promise((resolve, reject) => {
    setTimeout(() =>{
        if (1!==0) {
            reject( new Error('Uppps...'));
        }
        resolve( {fName: "Ivan", lName:"Ivanov"} )
    }, 2000)
})


prom
    .then((data) => {
        console.log(data )
    })
    .catch((e) => {
        console.log( e.message )
    })*/

const getDivision = (a,b) => {
    return new Promise( (res, rej) => {
        setTimeout(() =>{
            if(b === 0) {
                rej(new Error('Division by zero'));
            }
            res( a / b);
        },2000);
    } );
}

getDivision(4,2)
    .then(res => {
        console.log(res);
        getDivision(10, res)
            .then(res => {
                getDivision(100, res)
                    .then(re => {
                        console.log(re)
                    })
                    .catch(err => {
                        console.log(err.message);
                    })
            })
            .catch(err => {
                console.log(err.message)
            })
    })
    .catch(e=>console.log(e.message));

// console.log( "Working code." );
// setTimeout(()=>{
//     console.log("5 sec");
// },5000);
// setTimeout(()=>{
//     console.log("1 sec");
// },1000);
//
// console.log("after sec")

// const main = async () => {
//     try {
//         const result = await getDivision(4,2);
//         console.log( result );
//         const a = await getDivision(10, result);
//         console.log( a )
//     }
//     catch (e) {
//         console.log(e.message);
//     }
// }
//
// main();