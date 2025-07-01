console.log(this);
var add = () => {
    console.log(this);
}
add();

var c = {
    name: 'The C object',
    log: function() {
        console.log(this);
    }
}

c.log();