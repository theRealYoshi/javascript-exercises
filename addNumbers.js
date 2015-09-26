var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft > 0){
    reader.question("Add these numbers", function (num1) {
       var num = parseInt(num1);
       sum += num;
       console.log(sum);
       addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
