
// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function displays the values
function display(value) {
    var result = document.getElementById("result");
    if (result.value === "Error") {
        result.value = "";
    } else {
        result.value += value;
    }
}
 
// This function evaluates the expression and returns the result
function calculate() {
    var result = document.getElementById("result");
    var expression = result.value;
    var resultValue = eval(expression);
    result.value = resultValue;
    
}

// This function deletes the values
function deleteScreen() {
    var result = document.getElementById("result");
    if (result.value === "Error") {
        result.value = ""; 
    } else {
        result.value = result.value.slice(0, -1);
    }
}