//Object destructuring

let object1 ={
    name: 'Latha',
    Age : 30,
    Mail : 'xyz.gmail.com'
}

let {name, Mail, salary} = object1;

console.log(name +' & '+ Mail + ' & '+ salary);

//array destructuring
/*
let arr =  ['A', 'B', 'C', 'D'];

//instead of accessing each element as arr[0] and arr[1] etc we use destructing.
// let ['A', 'B', 'C', 'D'] = array;
let [A, B, C, D] = arr;

console.log(A+B);

// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [ ,fruit1, ,fruit2] = fruits;

console.log(fruit2);
console.log(fruit1);
*/
