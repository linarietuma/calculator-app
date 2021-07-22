
let expresion = [];
let operator = 0;
let operatorType;
let float = 0;

function calculate() {
    let input = prompt("Enter a symbol");

    if (expresion.length !== 0 && (!isNaN(parseInt(input)) || input === '.')) {
        reset();
    } 

    while (input !== '=') {
        if (input === "del") {
            if (!isNaN(parseInt(expresion[`${expresion.length - 1}`]))) {
                expresion.pop();
            }
            else if (expresion[`${expresion.length - 1}`] === '.') {
                expresion.pop();
                float--;  
            }
            else {
                expresion.pop();
                operatorType = '';
                operator = 0;
            }
        }
        else if (!isNaN(parseInt(input))) {
            expresion.push(input);
        }
        else if (input === '.') {
            if (operator === 0 && float ===0) {
                expresion.push(input);
                float++;
            }
            else if (operator === 1 && float < 2 ) {
                expresion.push(input);
                float++;
            }
        }
        else {
            if (operator === 0) {
                expresion.push(input);
                operator++;
                operatorType = input;
            }
            else {
                if (expresion.indexOf(operatorType) === (expresion.length - 1)) {
                    expresion.pop();
                    expresion.push(input);
                    operatorType = input;
                }
                else {
                    equals(expresion);
                    operatorType = input;
                }
            }
        }
        console.log(expresion);
        input = prompt("Enter a symbol");
    }

    if (expresion.length === 0) {
        reset();
        calculate();
    } else {
        equals(expresion);
    }
}


function equals() {
    //split the expression array into arrrays of numbers corresponding to argument 1 and 2
    const numArray1 = expresion.slice(0, expresion.indexOf(operatorType));
    const numArray2 = expresion.slice(expresion.indexOf(operatorType) + 1, expresion.length);

    let numString1 = '';
    let numString2 = '';

    // convert the array of numbers into a string
    for (let num1 of numArray1) {
        numString1 = numString1 + num1;
    }

    for (let num2 of numArray2) {
        numString2 = numString2 + num2;
    }

    let argument1;
    let argument2;

    // parse the string of numbers as an integer
    if (float > 0) {
        argument1 = parseFloat(numString1);
        argument2 = parseFloat(numString2);
    }
    else {
        argument1 = parseInt(numString1);
        argument2 = parseInt(numString2);
    }

    let result;


    // solve the mathematical expression depending on the operator type 
    switch (operatorType) {
        case '+':
            result = argument1 + argument2;
            console.log(result);
            reset();
            expresion = result.toString().split('');
            break;
        case '-':
            result = argument1 - argument2;
            console.log(result);
            reset();
            expresion = result.toString().split('');
            break;
        case '*':
            result = argument1 * argument2;
            console.log(result);
            reset();
            expresion = result.toString().split('');
            break;
        case '/':
            result = argument1 / argument2;
            console.log(result);
            reset();
            expresion = result.toString().split('');
            break;
        default: // if no operator is selected the number itself is displayed
            let singleArgument = '';
            for (num of expresion) {
                singleArgument = singleArgument + num;
            }
            console.log(parseInt(singleArgument));
            reset();
            expresion = singleArgument.toString().split('');
    }

}

function reset() {
    expression = expresion.splice(0, expresion.length);
    operator = 0;
    operatorType = '';
    input = '';
    float = 0;
}
