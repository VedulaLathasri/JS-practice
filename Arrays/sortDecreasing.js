// let arr = [5, 2, 1, -10, 8];

// arr.sort((a,b) => b-a);

// console.log(arr);

function copySorted(array) {
    return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)