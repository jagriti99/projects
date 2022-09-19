const licence = document.querySelector("licence_number");
const lic_number = document.querySelector("#lic_number");
const maker = document.querySelector("#car_maker");
const model = document.querySelector("#car_model");
const owner = document.querySelector("#car_owner");
const price = document.querySelector("#car_price");
const color = document.querySelector("#car_color");
const carform = document.querySelector("#car");

let cars = [];
const addRow = (event) => {
  event.preventDefault();
  let car = {
    licence: licence.value,
    maker: maker.value,
    model: model.value,
    owner: owner.value,
    price: price.value,
    color: color.value,
  };
  cars.push(car);
  form.reset();
};

carform.addEventListener("click", addRow);
