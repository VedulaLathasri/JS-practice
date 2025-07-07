

let name = {
    firstname: "latha",
    lastName: "ved",
    }   
    const printFullName = function (hometown, state) {
        console.log(this.firstname+ ' ' +this.lastName
            +" from " + hometown + " " +state
        );
        }        
       let name2 = {
            firstname: "jagan",
            lastName: "duvvada"
            }
printFullName.apply(name, ["Mumbai", "Maharastra"]);
let myName = printFullName(name2, "mumbai", "maharastra");
            /*
printFullName.call(name);
printFullName.call(name2);
*/

/*
let name = {
    firstname: "latha",
    lastName: "ved",
    printFullName: function () {
        console.log(this.firstname+ ' ' +this.lastName);
    }
}

name.printFullName();
let name2 = {
    firstname: "jagan",
    lastName: "duvvada"
}

name.printFullName.call(name2);
*/