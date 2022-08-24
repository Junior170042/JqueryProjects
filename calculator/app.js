$('document').ready(() => {
    var result = 0;
    var prevEntry = 0;
    var operation = null;
    var currentEntry = '0';
    updateScreen(result);

    $('.btn').on('click', function (evt) {
        var btnPressed = $(this).html()


        //buttons handling
        if (btnPressed === 'C') {
            result = 0;
            currentEntry = '0';

        } else if (btnPressed === 'CE') {
            currentEntry = '0';

        } else if (btnPressed === 'back') {
            if (currentEntry.length == 1) {
                currentEntry = '0';
            } else {
                currentEntry = currentEntry.substring(0, currentEntry.length - 1);
            }
        } else if (btnPressed === '+/-') {
            currentEntry *= -1;
        } else if (btnPressed === '.') {
            currentEntry += '.';
        } else if (isNumber(btnPressed)) {
            if (currentEntry === '0') {
                currentEntry = btnPressed
            } else {
                currentEntry = currentEntry + btnPressed;
            }
        } else if (isOperator(btnPressed)) {
            prevEntry = parseFloat(currentEntry);
            operation = btnPressed;
            currentEntry = '0';
        } else if (btnPressed === '%') {
            currentEntry = currentEntry / 100;
        } else if (btnPressed === '√') {
            currentEntry = Math.sqrt(currentEntry);
        } else if (btnPressed === 'pi') {
            currentEntry = Math.PI;
        } else if (btnPressed === '=') {
            currentEntry = operate(prevEntry, currentEntry, operation);
            operation = null;
        }

        updateScreen(currentEntry)

    })
})

const updateScreen = function (entry) {
    var valueString = entry.toString();
    $('.screen').html(valueString.substring(0, 10));
}

const isNumber = (val) => {
    return !isNaN(val)
}

const isOperator = (val) => {
    return val === '-' || val === 'x' || val === '+' || val === '/' || val === 'exp';
}

const operate = (prevVal, currentVal, operation) => {
    const val1 = parseFloat(prevVal);
    const val2 = parseFloat(currentVal);

    console.log(val1, val2, operation)
    if (operation === '+') return val1 + val2;
    if (operation === '-') return val1 - val2;
    if (operation === 'x') return val1 * val2;
    if (operation === '/') return val1 / val2;
    if (operation === 'exp') return Math.pow(val1, val2);

}
