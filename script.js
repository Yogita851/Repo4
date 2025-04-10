document.getElementById('convert-btn').addEventListener('click', function() {
    // Get the input value and selected units
    const tempInput = document.getElementById('temperature-input').value;
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;

    // Validate the input
    if (isNaN(tempInput) || tempInput === "") {
        alert("Please enter a valid number for the temperature.");
        return;
    }

    let temperature = parseFloat(tempInput);
    let convertedTemp;

    // Conversion logic
    if (fromUnit === "Celsius") {
        if (toUnit === "Celsius") {
            convertedTemp = temperature;
        } else if (toUnit === "Fahrenheit") {
            convertedTemp = (temperature * 9/5) + 32;
        } else if (toUnit === "Kelvin") {
            convertedTemp = temperature + 273.15;
        }
    } else if (fromUnit === "Fahrenheit") {
        if (toUnit === "Celsius") {
            convertedTemp = (temperature - 32) * 5/9;
        } else if (toUnit === "Fahrenheit") {
            convertedTemp = temperature;
        } else if (toUnit === "Kelvin") {
            convertedTemp = ((temperature - 32) * 5/9) + 273.15;
        }
    } else if (fromUnit === "Kelvin") {
        if (toUnit === "Celsius") {
            convertedTemp = temperature - 273.15;
        } else if (toUnit === "Fahrenheit") {
            convertedTemp = ((temperature - 273.15) * 9/5) + 32;
        } else if (toUnit === "Kelvin") {
            convertedTemp = temperature;
        }
    }

    // Display the result
    document.getElementById('result').innerText = `${convertedTemp.toFixed(2)} ${toUnit}`;
});