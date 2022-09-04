const form = document.querySelector("form");
const customer = document.querySelector("#name");
const health = document.querySelectorAll('input[type="checkbox"]');
let age = document.querySelector("#age");
const habit = document.querySelectorAll('input[type="checkbox"]');

const insuranceCal = (event) => {
  event.preventDefault();
  let custName = customer.value;
  let ageValue = +age.value;
  let amount = 500;
  let healthResult = [];
  let price = 0;
  let goodHabit = [];
  let badHabit = [];
  let goodScore = 0;
  let badScore = 0;

  console.log(custName);
  if (ageValue <= 18) {
    console.log(amount);
  } else if (ageValue > 18 && ageValue < 25) {
    amount = amount + (amount * 10) / 100;
    console.log(amount);
  } else if (ageValue > 26 && ageValue <= 35) {
    amount = amount + (amount * 30) / 100;
    console.log(amount);
  } else if (ageValue > 36 && ageValue <= 45) {
    amount = amount + (amount * 60) / 100;
    console.log(amount);
  } else if (ageValue > 46 && ageValue <= 55) {
    amount = amount + (amount * 100) / 100;
    console.log(amount);
  } else if (ageValue > 56 && ageValue <= 65) {
    amount = amount + (amount * 150) / 100;
    console.log(amount);
  } else if (ageValue > 66) {
    amount = amount + (amount * 210) / 100;
    console.log(amount);
  }

  health.forEach((item) => {
    if (item.checked) {
      healthResult.push(item.value);
    }
  });
  if (healthResult.length > 0) {
    price = (amount * (healthResult.length * 1)) / 100;
  }
  console.log(price);

  habit.forEach((item) => {
    if (item.checked) {
      if (
        item.value === "daily excercise" ||
        item.value === "walking" ||
        item.value === "yoga" ||
        item.value === "meditation"
      ) {
        goodHabit.push(item.value);
        goodScore -= (amount * 5) / 100;
        console.log(goodScore);
      } else {
        badHabit.push(item.value);
        badScore += (amount * 5) / 100;
        console.log(badScore);
      }
    }
  });
  let total = amount + price + badScore + goodScore;
  answer.innerHTML = `Hello <span>${custName}</span>. You are <span>${ageValue}</span> years old. Your insurance is <span>${total}  `;
  form.reset();
};

form.addEventListener("submit", insuranceCal);
