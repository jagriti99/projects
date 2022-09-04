const form = document.querySelector("form");
const customer = document.querySelector("#name");
const size = document.querySelectorAll('[name="psize"]');
const toppings = document.querySelectorAll('input[type="checkbox"]');
const delivery = document.querySelector("#delivery");
const order = document.querySelector("#order");

const takeOrder = (event) => {
  event.preventDefault();

  let customerName = customer.value;
  let sizeResult = "";
  let toppResult = [];
  let delResult = delivery.options[delivery.selectedIndex].value;
  let price = 0;

  size.forEach((item) => {
    if (item.checked) {
      sizeResult = item.value;
    }
  });

  switch (sizeResult) {
    case "2":
      price += 7.5;
      break;
    case "4":
      price += 10.5;
      break;
    case "6":
      price += 12.5;
      break;
    case "8":
      price += 15.5;
      break;
    default:
  }

  toppings.forEach((item) => {
    if (item.checked) {
      toppResult.push(item.value);
    }
  });

  if (toppResult.length > 4) {
    price += (toppResult.length - 4) * 0.5;
  }

  if (delResult == "home") {
    price += 5;
  }

  order.innerHTML = `Thank You for the order, <span>${customerName}</span>. You ordered pizza for <span>${sizeResult}</span>. Toppings selected are: <span>${toppResult.join(
    ", "
  )}</span> and delivery method is: <span>${delResult}</span>. Total price is: <span>${price}</span> €. `;

  /*order.style["boxShadow"] = "0 0 5px #999999";
  order.style["border"] = "1px solid #eee";*/

  form.reset();
};

form.addEventListener("submit", takeOrder);
