const contenedor = document.getElementById('tabla')
const contenedorDos = document.getElementById('tablaDos')
const contenedorTres = document.getElementById('tablaTres')
let arrayCapacidad = []
let arrayAsistencia = []
let arrayAsistenciaMenor = []
let eventosPasados = []
let eventosFuturos = []
let categories = []
let eventoPorCategoria = []
let gananaciaCategoria = 0
let asistenciaCategoria = 0
let html = ""
let htmlDos = ""



traerDatos(tablaGnrl)


// function CrearTablas(data) {
//     tablaGnrl(data)
//     // tablaPast(data)
//     // tablaComing(data)
// }

function tablaGnrl(data, date) {
    
    let arrayCapacidad = data;
    console.log(date)
    determinateCategories(arrayCapacidad, categories)
    arrayCapacidad.sort((a, b) => (a.capacity < b.capacity ? 1 : -1));
    console.table(arrayCapacidad)
    let arrayAsistencia = data.filter((item) => item.estimate == null);
    arrayAsistencia.sort((a, b) => ((a.assistance/(a.capacity/100)) < (b.assistance/(b.capacity/100)) ? 1 : -1));
    console.table(arrayAsistencia)
    printTablaGral(arrayCapacidad, arrayAsistencia)
    printTablaComing(data, date, categories)
    printTablaPast(data, date, categories)
    // printTablaPast(arraycapacidad, date)
}

function printTablaGral(capacidad, assist){
    
    html += `
    <table class="col-11 col-lg-7 bg-white border-black p-2 m-3 fs-4 ">
    
    <th colspan="3" class="bg-black text-white fs-3 ">Events Statistics</th>
    
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
  </tr>
  </table>`

    contenedor.innerHTML = html
    

}

function printTablaPast(arrayEventos, date, categories) {
    // let htmlDos = ''
    htmlDos += ` <table class="col-11 col-lg-7 bg-white border-black p-2 m-3 fs-4 ">
    <th colspan="3" class="bg-black text-white fs-3 ">Past Events Statistics</th>
  <tr class="m-3">
    <td>Category</td>
    <td>% of assistance</td>
    <td>Revenue</td>
  </tr>`
  // contenedorDos.innerHTML = html
        
    arrayEventos.forEach(element => {
      if (element.date < date)  {
        eventosPasados.push(element)
      }
    })
    for (let i = 0; i < categories.length; i++) {
        let eventoPorCategoria = eventosPasados.filter((item) => item.category == categories[i]);
        for (let index = 0; index < eventoPorCategoria.length; index++) {
            let asistenciaCategoria =+ ((eventoPorCategoria[index].assistance/(eventoPorCategoria[index].capacity/100)))
            let gananaciaCategoria =+ (eventoPorCategoria[index].assistance) * (eventoPorCategoria[index].price)
            if (index = categories.length - 1) {
                // Che, y la division por la cantidad de eventos?
                htmlDos += `<tr>
                            <td>${categories[i]}</td>
                            <td>${Math.round(asistenciaCategoria)}</td>
                            <td>${gananaciaCategoria}</td>
                        </tr>`
            }
        }
    }
    htmlDos += `</table> `
    contenedorDos.innerHTML = htmlDos
}

function determinateCategories(arrayEventos, arrayNueva) {
    for (let index = 0; index < arrayEventos.length; index++) {
        if(arrayNueva.includes(arrayEventos[index].category) != true) {
            arrayNueva.push(arrayEventos[index].category)
        }
        
    }
}

function printTablaComing(arrayEventos, date, categories) {
  let htmlDos = ''
  htmlDos += ` <table class="col-11 col-lg-7 bg-white border-black p-2 m-3 fs-4 ">
  <th colspan="3" class="bg-black text-white fs-3 ">Coming Events Statistics</th>
<tr class="m-3">
  <td>Category</td>
  <td>estimate of assistance</td>
  <td>Revenue</td>
</tr>`
// contenedorDos.innerHTML = html
      
  arrayEventos.forEach(element => {
    if (element.date > date)  {
      eventosFuturos.push(element)
    }
  })
  for (let i = 0; i < categories.length; i++) {
      let eventoPorCategoria = eventosFuturos.filter((item) => item.category == categories[i]);
      for (let index = 0; index < eventoPorCategoria.length; index++) {
          let asistenciaCategoria =+ ((eventoPorCategoria[index].estimate/(eventoPorCategoria[index].capacity/100)))
          let gananaciaCategoria =+ (eventoPorCategoria[index].estimate) * (eventoPorCategoria[index].price)
          if (index = categories.length - 1) {
              // Che, y la division por la cantidad de eventos?
              htmlDos += `<tr>
                          <td>${categories[i]}</td>
                          <td>${Math.round(asistenciaCategoria)}</td>
                          <td>${gananaciaCategoria}</td>
                      </tr>`
          }
      }
  }
  htmlDos += `</table> `
  contenedorTres.innerHTML = htmlDos
}