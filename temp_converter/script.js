function converter(id,value) {

    value = parseFloat(value);
let cel = +(document.querySelector("#celsius").value);
let fah = +(document.querySelector("#fahrenheit").value);
let kal = +(document.querySelector("#kelvin").value);
const fahrenheit =(cel*1.8)+32;
//let kelvin =cel+273.15;
//console.log(id,value);
if (id == 'fahrenheit')
{ 
    fah.value =((value-32)/1.8).toFixed(2);
    kal.value = ((value))
}

}

//const converter = () => {}