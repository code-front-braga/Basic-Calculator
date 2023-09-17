const display = document.querySelector('#display');
function appendToDisplay (value) {
    display.textContent += value;
}
function clearDisplay () {
    display.textContent = '';
}
function equal () {
    const result = eval(display.textContent);
    display.textContent = result;
}