let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

// let names = Array.prototype.push((k) =>{
//     user[k].name
// })

let names = users.map(item => item.name);

console.log( names );