// const form = document.querySelector('form');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');

//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//   }
// });

const form = document.querySelector('form');
const results = document.querySelector('#results');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  calculateBMI();
});

function calculateBMI() {
  const heightInput = document.querySelector('#height');
  const weightInput = document.querySelector('#weight');

  const height = parseInt(heightInput.value);
  const weight = parseInt(weightInput.value);

  if (isNaN(height) || height <= 0) {
    displayError('Please enter a valid positive height.');
  } else if (isNaN(weight) || weight <= 0) {
    displayError('Please enter a valid positive weight.');
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    displayResult(bmi);
  }
}

function displayError(message) {
  results.innerHTML = `<span style="color: red;">Error: ${message}</span>`;
}

function displayResult(bmi) {
  results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
}
