let prevVal = "";

let newVal = "";

let resultVal = "";

let mathOperator = "";

let decimalClicked = false;

let valMemStored = "";

function numButtonPress(num) {
    //Check if number has already been clicked
    if (resultVal) {
        newVal = String(num);
        resultVal = "";
    }
    else {
        if (num == '.') {
            if (decimalClicked != true) {
                newVal += num;
                decimalClicked = true;
            }
        }
        else {
            newVal += num;
        }
    }

    document.getElementById("entry").value = newVal;
}

function mathButtonPress(operator) {
    if (!resultVal) {
        prevVal = newVal;
    }

    else {
        prevVal = resultVal;
    }

    newVal = "";
    decimalClicked = false;
    mathOperator = operator;
    resultVal = ""
    document.getElementById("entry").value = "";
}

function clearButtonPress() {
    prevVal = "";
    newVal = "";
    mathOperator = "";
    resultVal = "";
    decimalClicked = false;
    document.getElementById("entry").value = "0";
}

function equalButtonPress() {
    if (mathOperator === '+') {
        resultVal = parseInt(prevVal) + parseInt(newVal);
    }
    else if (mathOperator === '-') {
        resultVal = parseInt(prevVal) - parseInt(newVal);
    }
    else if (mathOperator === '*') {
        resultVal = parseInt(prevVal) * parseInt(newVal);
    }
    else if (mathOperator === '/') {
        resultVal = parseInt(prevVal) / parseInt(newVal);
    }
    else {
        resultVal = newVal;
    }

    prevVal = resultVal;
    mathOperator = "";
    document.getElementById("entry").value = resultVal;
}