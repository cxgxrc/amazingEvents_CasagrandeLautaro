let dataUrl = "https://mindhub-xj03.onrender.com/api/amazing";
let data = []
let assistances = []
let capacitys = []
let orderedCapacity = []
let percentage = []
let finalPercentage = 0
let min = []
let max = []
let reduc = []

const tabla = document.querySelector('#tabla')





primerTabla()

async function primerTabla(){
    try {
     const response = await fetch(dataUrl);
     console.log(response)
     const jsData = await response.json();
     let data = jsData.events
     

    //  map
     let capacitys = data.map( item => item.capacity)
     let assistances = data.map( item => item.assistance)
     calcPercentages(capacitys, assistances)
     
    //  Capacity
     let orderedCapacity = (capacitys.sort(function(a, b){return a - b})).reverse()
     let fCapacity = (data.find((element) => element.capacity == orderedCapacity[0])).name;
     let sCapacity = (data.find((element) => element.capacity == orderedCapacity[1])).name;
     let tCapacity = (data.find((element) => element.capacity == orderedCapacity[2])).name;
     
    //  Assistance
     let min = percentage.sort(function(a, b){return a - b})
     let fMin = (data.find((element) => Math.round(element.assistance/(element.capacity/100)) == min[0])).name;
    let sMin = (data.find((element) => (Math.round(element.assistance/(element.capacity/100)) == min[1]) && element.name !== (data.find((element) => Math.round(element.assistance/(element.capacity/100)) == min[0])).name)).name;
     let max =  min.reverse();
     
 
    //  let min = Math.min(...percentage)
    //  let max = Math.max(...percentage)
    
     
     let fMax = (data.find((element) => Math.round(element.assistance/(element.capacity/100)) == max[0])).name;
     let sMax = (data.find((element) => (Math.round(element.assistance/(element.capacity/100)) == max[1]) && element.name !== (data.find((element) => Math.round(element.assistance/(element.capacity/100)) == max[0])).name)).name;
    // let tMax = (data.find((element) => (Math.round(element.assistance/(element.capacity/100)) == max[2]) && (element.name !== (data.find((element) => Math.round(element.assistance/(element.capacity/100)) == max[0])).name)).name) && (element.name !== (data.find((element) => (Math.round(element.assistance/(element.capacity/100)) == max[1]) && (element.name !== (data.find((element) => Math.round(element.assistance/(element.capacity/100)) == max[0])).name))).name ).name;

    //  let reduc = data.filter((element) => element.name = maxOne );
    //  console.log("🚀 ~ file: tabla.js:42 ~ primerTabla ~ reduc:", reduc)
    //  let sMax = (data.find((element) => element = max[1])).name;
    
     
     
     
    // Print
    let html = ''
    html += `<tr>
    <th colspan="3" class="bg-black text-white fs-3 ">Events Statistics</th>
  </tr>
  <tr class="m-3">
    <td>Highest % of assistance</td>
    <td>Lowest % of assistance</td>
    <td>Larger capacity</td>
  </tr>
  <tr>
    <td>${fMax}</td>
    <td>${fMin}</td>
    <td>${fCapacity}</td>
  </tr>
  <tr>
    <td>${sMax}</td>
    <td>${sMin}</td>
    <td>${sCapacity}</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>${tCapacity}</td>
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





