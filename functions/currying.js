// function curry(f) { // curry(f) does the currying transform
//     return function(a) {
//       return function(b) {
//         return f(a, b);
//       };
//     };
//   }

function sum(a, b) {
    return a + b;
  }
  
  let curriedSum = _.curry(sum); // using _.curry from lodash library
  
  alert( curriedSum(1, 2) ); // 3, still callable normally
  alert( curriedSum(1)(2) ); // 3, called partially