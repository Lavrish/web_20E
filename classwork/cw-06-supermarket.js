"use strict";

function proveAgeForAlcoholSale(customerAge) {
    //Ungar-notation 8.3
    //andrej18.doc

    if (customerAge < 16) {
        return "alcohol sale forbidden";
    } else if (customerAge >= 16 && customerAge < 18) {
        return "beer und cigarettes allowed";
    } else {
        return "vodka allowed"
    }
}

function proveAgeForAlcoholSaleTwo(customerAge) {
    //Ungar-notation 8.3
    //andrej18.doc

    if (customerAge < 16) {
        return "alcohol sale forbidden";
    } else if (customerAge >= 18) {
        return "vodka allowed";
    } else {
        return "beer und cigarettes allowed";
    }
}