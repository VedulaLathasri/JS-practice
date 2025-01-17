// let array = ['lalitha', 'latha', 'lavanya', 'subha', 'subhadra'];

// let search = 'sub';
// let user = array.filter(e => e.includes(search)); 

// console.log(user);

let arr = [ 1, 15, 2 ];
arr.sort((a,b) => {
    console.log(`a: ${a} and b: ${b}`);
     return a-b ;
});
console.log(arr);