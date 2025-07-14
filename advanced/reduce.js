//pipe functions
const pipe = (...functions) =>  {
                                    (initialValue)=>{ 
                                        functions.reduce((acc, fn) => fn(acc), initialValue )
                                                    }
                                }
// Building blocks to use for composition
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Composed function for multiplication of specific values

const multiply6 = pipe(double, triple);

//Usage
multiply6(6);
                                                

/*const array1 = [1,2,3,4,5];
const array2 = [1];
const array3 = [];

let output1 = array1.reduce((sum, acc) => sum + acc);
console.log(`output1 ${output1}`);
let output2 = array2.reduce((sum, acc) => sum + acc);
console.log(`output2 ${output2}`);
// array3.reduce((sum, acc) => sum + acc);
// console.log(`array3 ${array3}`);
*/