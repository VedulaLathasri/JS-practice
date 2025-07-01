// Given a list of data. HTML page has a name input box and search option,
// Give the data matching with the letters entered in the name input box
// Ex: if we enter "la" in the box, then give the data of all the items
//  in the list whose name include the letters "la"
// Note: the letters need not to be at the starting of the name,
// it can be at any position in the names

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