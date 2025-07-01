///////////////////////////
const obj5 = {
    comics: 'marvel',
    pen: ' ',
    printComic: function () {
        this.pen += 'p';
    },
    printComic2:  () => {
        this.pen += 'k';
    }
}

obj5.printComic2();
console.log(`--- ${this.pen}---`);

/////////////
// const obj4 = Object.create({});
// Object.defineProperty(obj4, 'book', {get: () => 'I'/*{icon:'I'}*/, enumerable: true});
// console.log(obj4);
// console.log(obj4.book);
// ///////////////
// for(k in obj4){
//     console.log(`value is : ${k}`);
// }

/////////////////
// const obj2 = new Object();
// obj2.redbook  ='R';
// obj2.1bluebook = 'k';
// console.log(obj2);

///////////
// const obj1 = {
//     rocket:'R',
//     fuel: 2,
//     config: {
//         name:'mars'
//     }
// }

// obj1.fuel = 200;
// obj1['year'] = 2000;