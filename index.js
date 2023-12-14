
//Get elements by DOM selector
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const decimal = document.querySelector('#decimal');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const subtract = document.querySelector('#subtract');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const add = document.querySelector('#add');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const equal = document.querySelector('#equal');
const doublezero = document.querySelector('#doublezero');
const zero = document.querySelector('#zero');
const display = document.querySelector('#display');

//Add event listeners with fat arrow function.
clear.addEventListener('click', () => {
    display.value = '';
});

backspace.addEventListener('click', () => {
    display.value = display.value.toString().slice(0, -1);
});

decimal.addEventListener('click', () => {
    display.value += '.';
});

divide.addEventListener('click', () => {
    display.value += '/';
});

multiply.addEventListener('click', () => {
    display.value += '*';
});

subtract.addEventListener('click', () => {
    display.value += '-';
});

add.addEventListener('click', () => {
    display.value += '+';
});

equal.addEventListener('click', () => {
    display.value = eval(display.value);
});

zero.addEventListener('click', () => {
    display.value += '0';
});

one.addEventListener('click', () => {
    display.value += '1';
});

two.addEventListener('click', () => {
    display.value += '2';
});

three.addEventListener('click', () => {
    display.value += '3';
});

four.addEventListener('click', () => {
    display.value += '4';
});

five.addEventListener('click', () => {
    display.value += '5';
});

six.addEventListener('click', () => {
    display.value += '6';
});

seven.addEventListener('click', () => {
    display.value += '7';
});

eight.addEventListener('click', () => {
    display.value += '8';
});

nine.addEventListener('click', () => {
    display.value += '9';
});

doublezero.addEventListener('click', () => {
    display.value += '00';
});


//Create an array of input elements
let inputs = [
    clear,
    backspace,
    decimal,
    divide,
    multiply,
    seven,
    eight,
    nine,
    subtract,
    four,
    five,
    six,
    add,
    one,
    two,
    three,
    equal,
    doublezero,
    zero];


//add input color change
const inputcolor = inputs.forEach(input => {
    input.addEventListener('mouseenter', () => {
        input.style.backgroundColor = 'white';
        input.style.color = 'black';
    });
});

//remove input color change
const inputcolor2 = inputs.forEach(input => {
    input.addEventListener('mouseleave', () => {
        input.style.backgroundColor = 'transparent';
        input.style.color = 'white';
    });
});
