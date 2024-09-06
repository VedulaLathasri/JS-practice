//find

let users = [
    { id : 1, name: 'John'},
    { id : 2, name: 'Peter'},
    { id : 3, name: 'England'},
];
console.log(users);
let users1 = users.find((item) => item.id == 2);

console.log(users1.name);
//forEach
// arr.forEach(function(item, index, array) {
//     // ... do something with an item
//   });

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(() =>{
//     arr[index] = arr[index] * arr[index]; 
// })
// arr.forEach((item, index, array) =>{
//     array[index] = item * item;
// })

// console.log(arr);


// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     console.log(`${item} is at index ${index} in ${array}`);
//   });

// concat
/*
let arr1 = [1, 2];

console.log(arr1.concat([3,4],5,6));

*/
//slice
/*
let arr2 = ["I", "study", "JavaScript", "right", "now"];

console.log(arr2.slice(1,3));
let arr = ["t", "e", "s", "t"];

console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)
console.log( arr.slice(-2) ); // s,t (copy from -2 till the end)
*/
//splice
/*
let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

console.log( arr ) // now ["Let's", "dance", "right", "now"

arr.splice(0,2);
console.log(arr)

arr.splice(0,0,'hi', 'bye')
console.log(arr)

let arr2 = [2, 0, 3, 4, 5];
arr2.splice(-1, 0, 8, 9);
console.log(arr2)
*/

//delete 1 element
/*
let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

console.log( arr ); // ["I", "JavaScript"]
*/

// add or remove items
/*
let arr = [1, 'hi', 405];
console.log(arr);

arr.push('bye');
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift('good');
console.log(arr);
*/