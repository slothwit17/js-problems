var a = 5;
var b = 7;
var temp = a;
var a = b;
var b = temp;
console.log("After swap the value of a:", a, "and b:", b);

var x = 5;
var y = 7;
x = x + y;
y = x - y;
x = x - y;
console.log("After swap the value of x:", x, "and y:", y);



var p = 5;
var q = 7;
[p,q]=[q,p];
console.log("After swap the value of p:", p, "and q:", q);