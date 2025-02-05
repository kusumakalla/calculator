function add(a, b) {
    console.log(`${a} +${b}`);
    return a + b;
}

function subtract(a, b) {
    console.log(`${a} -${b}`);
    return a - b;
}

function multiply(a, b) {
    console.log(`${a} *${b}`);
    return a * b;
}

function divide(a, b) {
    console.log(`${a} *${b}`);
    return a / b;
}

// console.log(divide(7, 2));
// console.log(multiply(4, 2));

// declare variables for operaror and operands

let operator = "";
let operand1 = "0";
let operand2 = "0";
let result = "";

function operate(operator, operand1, operand2) {
    switch(operator){
        case "+" : return add(operand1, operand2)
        case "-" : return subtract(operand1, operand2)
        case "*" : return multiply(operand1, operand2)
        case "/" : return divide(operand1, operand2)
    }
}

// if number button is clicked, its displays number and stores it

let numButtons = document.querySelectorAll(".number");
let display = document.querySelector(".display")
display.textContent = "0";

let numArray = [...numButtons];
display.innerHTML = '';

numArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (operand1 == "0" && operator == ""){
            display.innerHTML = e.target.value;
            operand1 = e.target.value;
            console.log("start");
        }
        else if(operator == ""){
            display.innerHTML += e.target.value;
            operand1 += e.target.value;
            console.log("middle")
        }
        else if(result == ""){
            display.innerHTML += e.target.value;
            operand2 += e.target.value;
            console.log("second")
        }
        else if(operand2 == "0"){
            display.innerHTML = e.target.value;
            operand2 = e.target.value;
            console.log("second start with opr")
        }
        else {
            display.innerHTML += e.target.value;
            operand2 += e.target.value;
            console.log("second continue with opr")
        }
    })
});

// Operator button

let operatorBtn = document.querySelectorAll(".operator");

operatorBtn.forEach(btn => {
    btn.addEventListener('click', (e)=> {
        display.innerHTML = "";
        console.log(e.target.value);
        if(operand2 == "0" && e.target.value == "="){
            display.innerHTML = operand1;
            console.log("= pressed with out 2opr")
        }
        else if(operand2 != "0"){
            operand1 = operate(operator,parseInt(operand1),parseInt(operand2));
            result = operand1;
            display.innerHTML = operand1;   
            if(e.target.value == "="){
                operator ="";
                operand1 ="0";
                operand2 ="0";
                console.log("= pressed")
                result = "";
            } 
            else {
                operator = e.target.value;  
                console.log("!= pressed") 
                operand2 ="0";
            }
        }
        else {
            operator = e.target.value;
            console.log("middle opr pressed")
        }
    })
})

