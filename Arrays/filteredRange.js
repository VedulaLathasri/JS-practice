function filteredRange(arr, a, b) {
    return arr.filter(item => (item>=a) && ( item <= b));
}
let arr = [5, 3, 2, 1, 8]

let arr2 = filteredRange(arr, 1, 4);

console.log(arr2);