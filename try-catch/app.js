let a = 10;
let b = 0;
const c = [1,2,3];

// c = 10;

try {
    // c = 10;
    console.log("Work in try");
} catch (e) {
    console.log("Uppps ..." + e.message);
} finally {
    console.log("Everytime work!");
}

console.log("Working here...");