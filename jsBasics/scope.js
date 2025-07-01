function b() {
    var myVar;
}
function a() {
    var myVar = 2;
    b();
}

myVar = 1;
a();
console.log(myVar);