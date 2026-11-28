//variables
var currentStep = 1;
var totalSteps = 3;

var progressFill = document.getElementById("progress");

function showStep(number) {
    for (var i = 1; i <= totalSteps; i++) {
        var step = document.getElementById("step" + i);
        var circle = document.getElementById("circle" + i);

        if (i === number) {
            step.className = "step active";
            circle.className = "circle active";
            circle.textContent = i;
        }
        else if (i < number) {
            step.className = "step";
            circle.className = "circle done";
            circle.textContent = "✔";
        }
        else {
            step.className = "step";
            circle.className = "circle";
            circle.textContent = i;
        }
    }
    // Progress bar
    progressFill.style.width = (number / totalSteps) * 100 + "%";
}


showStep(1);
