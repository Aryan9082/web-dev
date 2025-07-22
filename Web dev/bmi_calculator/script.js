
  let unitSystem = 'metric';

  function updateUnits() {
    unitSystem = document.querySelector('input[name="unit"]:checked').value;
    document.getElementById('height').placeholder = unitSystem === 'metric' ? 'Height in cm' : 'Height in inches';
    document.getElementById('weight').placeholder = unitSystem === 'metric' ? 'Weight in kg' : 'Weight in lbs';
  }

  function calculateBMI() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    if (!height || !weight || !age || age < 2) {
      alert("Please enter valid data.");
      return;
    }

    let bmi = 0;
    if (unitSystem === 'metric') {
      height /= 100;
      bmi = weight / (height * height);
    } else {
      bmi = (weight / (height * height)) * 703;
    }

    const bmiRounded = bmi.toFixed(1);
    let category = "", tip = "";

    if (bmi < 18.5) {
      category = "Underweight";
      tip = "Try a balanced diet rich in proteins and good fats.";
    } else if (bmi < 25) {
      category = "Normal";
      tip = "Maintain your healthy lifestyle!";
    } else if (bmi < 30) {
      category = "Overweight";
      tip = "Exercise regularly and monitor your calorie intake.";
    } else {
      category = "Obese";
      tip = "Consult a healthcare provider and start a fitness plan.";
    }

    document.getElementById("bmiResult").innerHTML =
      `${name}, your BMI is <strong>${bmiRounded}</strong> and you're classified as <strong>${category}</strong>.`;
    document.getElementById("bmiTips").innerText = tip;

    // Horizontal needle
    const maxBMI = 40;
    const percent = Math.min((bmi / maxBMI) * 100, 100);
    document.getElementById("needle").style.left = `calc(${percent}% - 1px)`;

    // Circular gauge rotation
    const angle = Math.min((bmi / maxBMI) * 360, 360);
    document.getElementById("gaugeNeedle").style.transform = `rotate(${angle}deg)`;
  }