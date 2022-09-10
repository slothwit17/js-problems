var numbers = [3, 6, 8, 10, 3, 4, 6, 12, 8, 2, 1, 4];
var uniqueNumber = [];

for(var i = 0; i<numbers.length; i++){
    var element = numbers[i];
    var index = uniqueNumber.indexOf(element);

    if(index == -1){
        uniqueNumber.push(element);
    }
}

console.log(uniqueNumber);