// Add event listener for the height range slider
document.getElementById("height").addEventListener("input", function () {
    updateHeightValue(this.value);
});

// Add event listener for the weight range slider
document.getElementById("weight").addEventListener("input", function () {
    updateWeightValue(this.value);
});

// Update height value dynamically
function updateHeightValue(value) {
    document.getElementById("height-value").textContent = value;
}

// Update weight value dynamically
function updateWeightValue(value) {
    document.getElementById("weight-value").textContent = value;
}

// Calculate BMI function
function calculateBMI() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector("input[name='gender']:checked");

    if (!age || !gender) {
        alert("Please fill in all fields");
        return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    document.getElementById("bmi-result").textContent = bmi;

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal Weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("bmi-category").textContent = category;
}
