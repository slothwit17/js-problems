function getArraySum(numbers){
    var sum = 0;
    for( var i = 0; i<numbers.length; i++){
        var element = numbers[i];
        sum = sum+element;
    }

    return sum;

}

var num = [100, 200, 250];
var result = getArraySum(num);
console.log("The sum of the array is: ", result);

var total = getArraySum([10, 10, 30]);
console.log("The sum of the array is: ", total);