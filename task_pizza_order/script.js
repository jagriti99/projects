const form = document.querySelector("form");
const customer = document.querySelector("#name");
const size = document.querySelectorAll('[name="size"]');
const topping = document.querySelectorAll('input [type ="checkbox"]');

console.log(customer);

const takeOrder = (event) => {
  event.preventDefault();

  let customerName = customer.value;
  let sizeResult = "";
  size.forEach((item) => {
    sizeResult = item.value;
  });
 topping.forEach((item) => {
 if (item.checked){
  toppingResult.push(item.value);
 }

 }
 }

};



form.addEventListener("submit", takeOrder);
