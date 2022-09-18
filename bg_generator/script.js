const form = document.querySelector("#gradient");

let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");

let direction = document.querySelectorAll('input[name="direction"]');
let text = document.querySelector("p");

const gradient1 = (event) => {
  event.preventDefault();
  let selValue;
  for (const val of direction) {
    if (val.checked) {
      selValue = val.value;
    }
  }

  let brGradient = `linear-gradient(${selValue}, ${color1.value}, ${color2.value})`;

  document.body.style.backgroundImage = brGradient;
  text.textContent = brGradient + ";";
};

form.addEventListener("change", gradient1);
