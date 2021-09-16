"use strict"

let tareasTotal = [];


let tarea = document.getElementById('list');



let boxPlace = document.querySelector('.box');

document.querySelector(".enviando").addEventListener('click',()=>{
   
mostrar();

tarea.value = "";

})




function mostrar(){

    boxPlace.innerHTML = ""; //vacio el box para no ir acumulando el que puse antes mas el nuevo valor de ingreso
    tareasTotal.push (tarea.value);
    for (let elementoActual of tareasTotal){    
        boxPlace.innerHTML += `<li>${elementoActual}</li>` ;     
        }
        console.log(tareasTotal)
       

        
}