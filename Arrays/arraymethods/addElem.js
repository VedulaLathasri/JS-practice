const a1 = [1,2,3,4,5];
a1.push(6, 7);
console.log(a1); 

a1.unshift(9);
console.log(a1); 

a1.splice(0,0,10);
console.log(a1); 

const newArray = a1.concat([12,13]);
console.log(newArray); 

const spreadArray = [...a1, 14,15,16];
console.log(spreadArray);

a1[a1.length] = 18;
console.log(a1);