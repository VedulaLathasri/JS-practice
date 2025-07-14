const myObj = {
    variable: 1,
    printobj: function () {
        console.log("hi");
    }
}

// let outputObj = {};
// for(let key in myObj ) {
//     outputObj[key] = myObj[key];
// }

// const anotherObj = Object.assign({}, myObj);

const anotherObj = {...myObj}
console.log(anotherObj);