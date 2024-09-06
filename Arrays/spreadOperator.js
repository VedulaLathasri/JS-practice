//Using spread operator on Objects

let object1 = {
    name: 'Latha',
    Age : 30,
    Mail : 'xyz.gmail.com'
}

let object2 = {
    phoneNum : 89634,
    streetNum : 12,
    place : 'New Jersey'
}

let object3 = {...object1, ...object2}

console.log(object3);

// USing spread operator on arrays 
/*
let arr1 = [1, 2, 3, 4 ];

let arr2 = [6, 9, 8, 5];

let arr3 = [...arr1, ...arr2];

console.log(arr3);

let arr4 = [...arr1];

console.log(arr4);

let arr5 = ['apple', 'ball', 'cat'];

//insert arr5 between 2 and 3

let arr6 = [3, 4, ...arr5, 8, 9];
console.log(arr6);
*/