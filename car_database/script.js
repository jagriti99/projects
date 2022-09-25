const licence = document.querySelector("#licence_number");
const lic_number = document.querySelector("#lic_number");
const maker = document.querySelector("#car_maker");
const model = document.querySelector("#car_model");
const owner = document.querySelector("#car_owner");
const price = document.querySelector("#car_price");
const color = document.querySelector("#car_color");
const carform = document.querySelector("#car");
const form = document.querySelector("form");
const addBtn = document.querySelector("#add");
const search = document.querySelector("#searchBtn");

addBtn.addEventListener("click", function (ev) {
  ev.preventDefault();
  document.getElementById("ctable").style.display = "block";

  let table = document.getElementById("ctable");

  let row = table.insertRow(-1);
  let licence_number = row.insertCell(0);
  let carMaker = row.insertCell(1);
  let carModel = row.insertCell(2);
  let carOwner = row.insertCell(3);
  let carPrice = row.insertCell(4);
  let carColor = row.insertCell(5);

  licence_number.textContent = lic_number.value;
  carMaker.textContent = maker.value;
  carModel.textContent = model.value;
  carOwner.textContent = owner.value;
  carPrice.textContent = price.value;
  carColor.textContent = color.value;

  return false;
});

search.addEventListener("click", function () {
  let lNumber = licence.value;
  let newSearch = licence.value.includes(lNumber);

  if ((newSearch = true)) {
    result.innerHTML = `The licence plate is <span>${licence.value}</span>. The Model is <span>${model.value}</span> and the owner is <span>${owner.value}</span>.`;
  } else {
    result.textContent = `There is no car found. Try again`;
  }
});
