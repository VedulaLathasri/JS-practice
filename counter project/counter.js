var myNumber = document.querySelector(".displayNumber");

console.log(myNumber);

let count = 1;
myNumber.innerText = count ;
setInterval(() => {
    if(count<1000)
    {

        myNumber.innerText = ++ count;
    }
}, 10);

setTimeout