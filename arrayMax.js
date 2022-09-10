var marks = [45, 64, 56, 87, 77, 91, 95, 80, 58];
var max = marks[0];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element>max){
        max = element;
    }
}
console.log("The highest marks is: ", max);