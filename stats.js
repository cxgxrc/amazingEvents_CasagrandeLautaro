const contenedor = document.querySelector('#tabla')
let arrayCapacidad = []
let arrayAsistencia = []
let arrayAsistenciaMenor = []

traerDatos(tablaGnrl)


// function CrearTablas(data) {
//     tablaGnrl(data)
//     // tablaPast(data)
//     // tablaComing(data)
// }

function tablaGnrl(data) {
    let arrayCapacidad = data;
    arrayCapacidad.sort((a, b) => (a.capacity < b.capacity ? 1 : -1));
    console.table(arrayCapacidad)
    let arrayAsistencia = data.filter((item) => item.estimate == null);
    arrayAsistencia.sort((a, b) => ((a.assistance/(a.capacity/100)) < (b.assistance/(b.capacity/100)) ? 1 : -1));
    console.table(arrayAsistencia)
    printTablaGral(arrayCapacidad, arrayAsistencia)
}

function printTablaGral(capacidad, assist){
    let html = ""
    html += `<tr>
    <th colspan="3" class="bg-black text-white fs-3 ">Events Statistics</th>
  </tr>
  <tr class="m-3">
    <td>Highest % of assistance</td>
    <td>Lowest % of assistance</td>
    <td>Larger capacity</td>
  </tr>
  <tr>
    <td>${assist[0].name}</td>
    <td>${assist[(assist.length) - 1].name}</td>
    <td>${capacidad[0].name}</td>
  </tr>
  <tr>
    <td>${assist[1].name}</td>
    <td>${assist[(assist.length) - 2].name}</td>
    <td>${capacidad[1].name}</td>
  </tr>
  <tr>
    <td>${assist[2].name}</td>
    <td>${assist[(assist.length) - 3].name}</td>
    <td>${capacidad[2].name}</td>
  </tr>`

    tabla.innerHTML = html

}