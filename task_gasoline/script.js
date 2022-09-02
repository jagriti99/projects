//const calculate = () => {}




function calculate(){

let price= Number(document.getElementById("price").value);
let money= +(document.querySelector("#money").value);
let answer1= document.querySelector('#answer');
let cal= Math.floor(money/ price);
let text;
if (cal>=10)
 {
text =  "good, you can escape now"
 }
 else {
    text = "ups, you have to stay here."
}
answer1.textContent = text;
}

