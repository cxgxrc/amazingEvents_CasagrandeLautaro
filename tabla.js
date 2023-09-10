let dataUrl = "https://mindhub-xj03.onrender.com/api/amazing";
let data = []
let assistances = []
let capacitys = []
let maxCapacity = 0
let percentage = []
let finalPercentage = 0
let min = 0
let max = 0
console.log("🚀 ~ file: tabla.js:5 ~ capacitys:", capacitys)

const tabla = document.querySelector('#tabla')
const tabla2 = document.querySelector('#tabla2')
const tabla3 = document.querySelector('#tabla3')

traerDatos()

async function traerDatos(){
    try {
     const response = await fetch(dataUrl);
     console.log(response)
     const jsData = await response.json();
     let data = jsData.events
     let capacitys = data.map( item => item.capacity)
     console.log("🚀 ~ file: tabla.js:19 ~ traerDatos ~ capacitys:", capacitys)
     let maxCapacity = Math.max(...capacitys)
     console.log("🚀 ~ file: tabla.js:27 ~ traerDatos ~ maxCapacity:", maxCapacity)
     let assistances = data.map( item => item.assistance)
     console.log("🚀 ~ file: tabla.js:22 ~ traerDatos ~ assistances:", assistances)
     calcPercentages(capacitys, assistances)
     console.log(percentage)
    } 
    catch(error) {
     console.log(error);
    }
 
 }

function calcPercentages(arrayCapacity, arrayAssistance) {
    let acc = 0;
    let cont = 0;
    arrayCapacity.forEach(element => {
        if(isNaN(arrayAssistance[acc]) != true ) {
            percentage.push(Math.round(arrayAssistance[acc]/(element/100)))
            cont += 1
        }
        acc += 1
    });
    let finalPercentage = Math.round((percentage.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / cont);
    let min = Math.min(...percentage)
    console.log("🚀 ~ file: tabla.js:48 ~ calcPercentages ~ min:", min)
    let max = Math.max(...percentage)
    console.log("🚀 ~ file: tabla.js:49 ~ calcPercentages ~ max:", max)


}



