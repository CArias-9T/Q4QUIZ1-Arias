function verifyBMI() {

    let weight = document.getElementById('weightinput').value;
    let height = document.getElementById('heightinput').value;

    // bmi calculator
    let bmi = weight / Math.pow(height,2);
    let bmiround = Math.round(bmi);

    // if-else statements
     if (bmiround < 18.5) {
        document.getElementById('demo').innerHTML = ("Your BMI is " + bmiround + ". You are underweight.");
    } 
    else if (bmiround >= 18.5 && bmiround <= 24.9) {
        document.getElementById('demo').innerHTML = ("Your BMI is " + bmiround + ". Your weight is normal.");
    }
    else if (bmiround >= 25 && bmiround <= 29.9) {
        document.getElementById('demo').innerHTML = ("Your BMI is " + bmiround + ". You are overweight.");
    }
    else {
        document.getElementById('demo').innerHTML = ("Your BMI is " + bmiround + ". You are obese.");
    }

}
