const myMap = new Map();

myMap.set(0, "Zero");
myMap.set(1, "One");
myMap.set(2, "TWO");
myMap.set(3, "three");
myMap.set(4, "four");

console.log(myMap);

for(let k of myMap.keys())
{
    console.log(`key is ${k}`);
}
for(let k of myMap.values())
{
    console.log(`value is ${k}`);
}
for(let [k, v] of myMap)
{
    console.log(`key is ${k} and value is ${v}`);
}