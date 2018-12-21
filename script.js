var button = document.getElementById("submit");
button.onclick = performAction;

function performAction() {
    let nValue = document.getElementById("nValue").value;
    let range = document.getElementById("range").value;
    let maxSum = document.getElementById("maxSum").value;

    displayResult(nValue, range, maxSum);
}

function displayResult(nValue, range, maxSum) {
    let status = false;
    while(!status) {
        let sum = 0;
        let values = new Array(nValue);
        for(i = 0; i < nValue; i++) {
            values[i] = Math.round((Math.random() * range));
            sum += values[i];
        }
        if(sum <= maxSum) {
            status = true;
            var result = document.getElementById("result");
            let output = "Result: " + values[0];
            for(i = 1; i < nValue; i++) {
                output += ' + ' + values[i];
            }
            output += " = " + sum;
            result.innerHTML = output;
        }
    }
}