//الة حاسبة//

function calculate(num1, num2, operation) {
    var num1= +prompt("Enter number 1:");
    var num2= +prompt("Enter number 2:");
    var operation= prompt("Enter operation (+, -, *, /):");

    if (operation === "+") {
        result = num1 + num2;
    }
    else if (operation === "-") {

        result = num1 - num2;
    }
    else if (operation === "*") {
        result = num1 * num2;
    }

    else if (operation === "/") {
            result = num1 / num2;
        }
       
   
    return result;

}


console.log("The result = " + calculate());