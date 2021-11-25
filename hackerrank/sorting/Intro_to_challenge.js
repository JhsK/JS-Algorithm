function processData(input) {
    //Enter your code here
    var inputArray = input.split('\n');
    var V = parseInt(inputArray[0], 10);
    var valueArray = inputArray[2].split(" ");
    for(var i =0; i<valueArray.length; i++){
        if(parseInt(valueArray[i],10) === V){
            console.log(i);
            break;
        }
    }
} 