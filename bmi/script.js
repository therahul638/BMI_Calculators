const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const info = document.querySelector("#info");
  if (height === 0 || height === "" || isNaN(height)) {
    (result.innerHTML = "Please enter height"), height;
  } else if (weight === 0 || weight === "" || isNaN(weight)) {
    (result.innerHTML = "Please enter  weight"), height;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = bmi;
    if (bmi < 18.6) {
      info.innerHTML = `Your weight is too low ${weight}`;
    } else if (bmi >= 18.6 || bmi <= 24.9) {
      info.innerHTML = `Your weight is normal ${weight}`;
    }
    if (bmi > 24.9) {
      info.innerHTML = `Your weight is too height ${weight}`;
    }
  }
});
