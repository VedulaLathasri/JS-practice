//bind method
let name1 = {
    firstName: "Akash",
    lastName: 'Gupta',
}

let printName = function(occupation, birthMonth){
    console.log(`firstName is ${this.firstName} and lastName is ${this.lastName}`);
    console.log(`occupation is ${occupation} and birthmonth ${birthMonth}`);
}

let fullName = printName.bind(name1,['goldsmith', 'Jan']);
console.log(fullName);
fullName();



//apply method
// let name1 = {
//     firstName: "Akash",
//     lastName: 'Gupta',
// }

// let printName = function(occupation, birthMonth){
//     console.log(`firstName is ${this.firstName} and lastName is ${this.lastName}`);
//     console.log(`occupation is ${occupation} and birthmonth ${birthMonth}`);
// }

// let name2={
//     firstName: 'latha',
//     lastName:'sri',
// }

// printName.apply(name1,['welding', 'feb']);
// printName.apply(name2,['welding', 'oct']);

//call method
/*
const obj = {
    firstName: this.firstName,
    lastName: this.lastName,
    printName: function() {
        console.log(`firstname is ${this.firstName} and lastname is ${this.lastName}`);
    }
}

let obj1 ={
    firstName: "latha",
    lastName: "vedula",
}

obj.printName.call(obj1);
obj.printName.call(obj);
*/