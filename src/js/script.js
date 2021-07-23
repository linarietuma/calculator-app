
// track 
let argument1 = [];
const argument2 = [];
let total = [];
let operator = false;
let float1 = false;
let float2 = false;
let operatorType;
let maxLength = 13;


// change the number of digits displayed depending on screen size 
window.addEventListener('resize', () => {
    console.log('dragged');
})

// math functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// collection of all button objects
const btn = document.querySelectorAll('button');

// div with the class if display
const displayed = document.querySelector('.display');
// by default set the display to argument1
displayed.innerHTML = 0;

// assign click event listener to each button 
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        displayed.innerHTML = clicked(btn[i].value); // upon clicking clicked() is executed parsing in the button's corresponding value
    });
}

// keyboard key-value pairs
const keyboard = {
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '0': '0',
    'Backspace': 'del',
    'Enter': '=',
    '=': '=',
    '-': '-',
    '+': '+',
    '/': '/',
    '*': '*',
    'x': '*',
    '.': '.'
}

// add keydown event listener 
document.addEventListener('keydown', e => {
    try {
        // 
        displayed.innerHTML = clicked(keyboard[e.key]);
    }
    catch {
        console.log('Invalid key');
    }
});

// collection of input objects
const toggle = document.querySelectorAll('input');
// link object with the id of 'theme'
const theme = document.querySelector('#theme');
// paths to the CSS files with styling for the page's colour theme  
const themeHref = ['src/css/theme/default.css', 'src/css/theme/light.css', 'src/css/theme/dark.css'];

// assign event listener to all input objects
for (let i = 0; i < themeHref.length; i++) {
    toggle[i].addEventListener('click', () => {
        theme.href = themeHref[i];
    });
}

// changes color of the selected operator button
function selected() {
    // collection of button objects with the class operator
    const btnOperator = document.querySelectorAll('.operator');

    for (let i = 0; i < btnOperator.length; i++) {
        if (btnOperator[i].value === operatorType) {
            btnOperator[i].classList.add('selected');
        }
        else {
            btnOperator[i].classList.remove('selected');
        }
    }
}


function clicked(input) {
    // no argument has been selected
    if (argument1.length === 0) {
        // length of total is not 0, i.e., thera has been a previous calculation
        if (total.length !== 0) {
            // input equals one of the operators or an equal sign
            if (isOperator(input) ||
                input === '=') {
                argument1 = [...total];
            }
            total.length = 0;
        }
        else {
            argument1.push('0');
        }
    }

    // no operator has been selected
    if (!operator) {
        // input is a number
        if (!isNaN(parseInt(input))) {
            isNumber(argument1, input);
        }
        else if (input === '.') {
            // the argument is not already a float and is less than 14 characters in lenth
            if (!float1 && argument1.length < maxLength - 1) {
                argument1.push(input);
                float1 = true;
            }
        }
        else if (input === 'del' || input === 'reset') {
            argument1.length = 0;
            argument1[0] = '0';
            float1 = false;
        }
        else if (input === '=') {
            return equals();
        }
        // input is an operator
        else if (isOperator(input)) {
            operator = true;
            operatorType = input;
            selected();
        }
        return argument1.reduce((total, num) => total + num);
    }

    // an operator has been selected
    else {
        // input is a number
        if (!isNaN(parseInt(input))) {
            isNumber(argument2, input);
        }
        else if (input === '.') {
            // the argument is not already a float and is less than 14 characters in length
            if (!float2 && argument2.length < maxLength - 1) {
                if (argument2.length === 0) {
                    argument2.push('0');
                    argument2.push(input);
                }
                else {
                    argument2.push(input);
                }
                float2 = true;
            }
        }
        else if (input === 'del') {
            // the second argument has not been selected
            if (argument2.length === 0) {
                operator = false;
                operatorType = '';
                selected();
                return argument1.reduce((total, num) => total + num);
            }
            // the second argument has been selected
            else {
                argument2.length = 0;
                float1 = false;
                return 0;
            }
        }
        else if (input === 'reset') {
            reset();
            selected();
            return argument1;
        }
        else if (input === '=') {
            return equals();
        }
        // input is an operator
        else if (isOperator(input)) {
            if (argument2.length === 0) {
                operatorType = input;
                selected();
                return argument1.reduce((total, num) => total + num);
            }
            else {
                operator = true;
                operatorType = input;
                return equals();
            }
        }
        return argument2.reduce((total, num) => total + num);;
    }
}


// solves the mathematical expression 
function equals() {

    let result;
    // if no second argument is selected the first argument is displayed
    if (argument2.length === 0) {
        result = argument1.reduce((total, num) => total + num);
        reset();
        total = [...result.toString()];
        return result;
    }

    // convert the array of numbers into a string
    let numString1 = argument1.reduce((total, num) => total + num);
    let numString2 = argument2.reduce((total, num) => total + num);

    // parse the string of numbers as a float
    let arg1 = parseFloat(numString1);
    let arg2 = parseFloat(numString2);


    // solve the mathematical expression depending on the operator type 
    switch (operatorType) {
        case '+':
            result = add(arg1, arg2);
            break;
        case '-':
            result = subtract(arg1, arg2);
            break;
        case '*':
            result = multiply(arg1, arg2);
            break;
        case '/':
            result = divide(arg1, arg2);
    }
    reset();
    total = [...result.toString()]; 
    return result;
}

// checks if input is a number
function isNumber(argument, input) {
    if (argument.length < maxLength) {
        // the only character in the argument array is 0 (default)
        if (argument.length === 1 && argument[0] === '0') {
            argument[0] = input;
        }
        else {
            argument.push(input);
        }
    }
}

// checks if input is an operator
function isOperator(input) {
    if (
        input === '+' ||
        input === '-' ||
        input === '*' ||
        input === '/') {
        return true;
    }
    return false;
}

// resets all variables to default values 
function reset() {
    argument1.length = 0;
    float1 = false;
    argument2.length = 0;
    float1 = false;
    operator = false;
    operatorType = '';
    selected();
}