var User = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

User.prototype.getFirstName = function() {
    console.log(`firstName is ${this.firstName}`);
}
var hitesh = new User ("hitesh", "Ch");

// console.log(hitesh);

var latha = new User("latha", "vedula");

// console.log(latha);
latha.getFirstName();