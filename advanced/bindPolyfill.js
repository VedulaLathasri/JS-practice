let name = {
    firstName: "morgan",
    lastName: "wayne"
}

let printName = function ( city, state, country) {
    console.log(`${this.firstName} ${this.lastName} from ${city},${state}, ${country}` );
}
 let myName = printName.bind(name);

Function.prototype.mybind = function (... args) {
    let params = args.slice(1)
    let myThisObj = this;

    return function (...args2) {
        myThisObj.apply(args[0], [...params, ...args2]);
    }
}
 let myName2 = printName.mybind(name);
 myName2( "Balapur","Telangana", "India")
