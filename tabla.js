let dataUrl = "https://mindhub-xj03.onrender.com/api/amazing";
let data = []
let assistances = []
let capacitys = []
let maxCapacity = 0
let percentage = []
let finalPercentage = 0
let min = 0
let max = 0

const tabla = document.querySelector('#tabla')
console.log("🚀 ~ file: tabla.js:5 ~ capacitys:", capacitys)




primerTabla()

async function primerTabla(){
    try {
     const response = await fetch(dataUrl);
     console.log(response)
     const jsData = await response.json();
     let data = jsData.events
     let capacitys = data.map( item => item.capacity)
     let maxCapacity = Math.max (...capacitys)
     console.log("🚀 ~ file: tabla.js:27 ~ traerDatos ~ maxCapacity:", maxCapacity)
     console.log("🚀 ~ file: tabla.js:26 ~ traerDatos ~ capacitys:", capacitys)
     let assistances = data.map( item => item.assistance)

     calcPercentages(capacitys, assistances)
     
     let html = ''
    let min = Math.min(...percentage)
    let max = Math.max(...percentage)
    
   
    
    html += `<tr>
    <th colspan="3" class="bg-black text-white fs-3 ">Events Statistics</th>
  </tr>
  <tr class="m-3">
    <td>Highest % of assistance</td>
    <td>Lowest % of assistance</td>
    <td>Larger capacity</td>
  </tr>
  <tr>
    <td>${max}</td>
    <td>${min}</td>
    <td>${maxCapacity}</td>
  </tr>`

    tabla.innerHTML = html
     
    } 
    catch(error) {
     console.log(error);
    }
 
 }

function calcPercentages(arrayCapacity, arrayAssistance) {
    let acc = 0;
    // let cont = 0;
    arrayCapacity.forEach(element => {
        if(isNaN(arrayAssistance[acc]) != true ) {
            percentage.push(Math.round(arrayAssistance[acc]/(element/100)))
            // cont += 1
        }
        acc += 1
    });
    // let finalPercentage = Math.round((percentage.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / cont);
    
    
    
}


// function generalStats(){
//     let html = ''
//     let min = Math.min(...percentage)
//     let max = Math.max(...percentage)
//     let maxCapacity = Math.max (...capacitys)
   
    
//     html += `<tr>
//     <th colspan="3" class="bg-black text-white fs-3 ">Events Statistics</th>
//   </tr>
//   <tr class="m-3">
//     <td>Highest % of assistance</td>
//     <td>Lowest % of assistance</td>
//     <td>Larger capacity</td>
//   </tr>
//   <tr>
//     <td>${max}</td>
//     <td>${min}</td>
//     <td>${maxCapacity}</td>
//   </tr>`

//     tabla.innerHTML = html
// }



