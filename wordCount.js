var speech = "We do not  need magic to  change the world, we carry all the power we need inside ourselves already: we have the power to   imagine better.";
var count = 0;
for(var i =0; i<speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-1] != " "){
        count++;
    }
}
count++;
console.log(count); 