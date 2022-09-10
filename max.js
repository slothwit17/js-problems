var a = 100;
var b = 20;
var c = 55;

var max = Math.max(a, b, c);
console.log(max);

if(a>b){
    if(a>c){
        console.log("a is grater");
    }
    else{
        console.log("c is grater");
    }
}
else{
    if(b>c){
        console.log("b is grater")
    }
    else{
        console.log("c is grater")
    }
}