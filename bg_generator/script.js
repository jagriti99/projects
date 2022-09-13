const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");

const body = document.getElementById("gradient");
const gradient1 = document.querySelector("gradient1");

function generate() {
  const arrow = document.querySelector('input[name="arrow"]:checked').value;
  body.style.background =
    "linear-gradient(" + color1.value + "," + color2.value + ")";
  // body.style.background = `linear-gradient(${color1.value},${color2.value})`;

  gradient1.textContent = body.style.background + ";";
}

color1.addEventListener("input", generate);
color2.addEventListener("input", generate);
