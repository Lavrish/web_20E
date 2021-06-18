
function someFunctionOne(primaryVariable, secondaryVariable, someVariable) {
    if (primaryVariable) {
        console.log("first way");
    } else if (secondaryVariable) {
        console.log("second way");
    } else if (someVariable) {
        console.log("Do it!");
    } else {
        console.log("app done");
    }

}

function someFunctionTwo(primaryVariable, secondaryVariable, someVariable) {
    if (primaryVariable) {
        console.log("first way");
    }

    if (secondaryVariable) {
        console.log("second way");
    }

    if (someVariable) {
        console.log("Do it!");
    }
}

someFunctionTwo(true, true, true)
