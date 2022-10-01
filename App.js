const h1= document.querySelector("h1");
const h2= document.querySelector("h2");
const input= document.querySelector("#calculo");
const input2= document.querySelector("#calculo2");
const form1= document.querySelector("#form")

const btn= document.querySelector("#btn1");

form1.addEventListener('submit',sumar);

function sumar(){
    event.preventDefault();
    let a=parseInt(input.value);
    let b=parseInt(input2.value);
    let e=a+b;
    h2.innerText=a +"+" +b+ "="+ (e);
   
}