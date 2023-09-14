const cardContainer = document.getElementById("cardss")
const btnsContainer = document.getElementById("btns")
const searchInput = document.querySelector('input[name=search]')

let dataUrl = "https://mindhub-xj03.onrender.com/api/amazing";

let data = []
let categories = []
let checkbox = document.querySelectorAll('.form-check-input')
let pastEvents = []
let filterEvents = []
let eventCategories = []

async function traerDatos(){
    try {
     const response = await fetch(dataUrl);
     console.log(response)
     const jsData = await response.json();
     let date = jsData.currentDate;
     let data = jsData.events;
     createPastEvents(data, date)
     determinateCategories(pastEvents, categories)
     renderBtns(categories)
     
     filtrar(pastEvents)
     
    } 
    catch(error) {
     console.log(error);
    }
 
 }

 traerDatos()

 document.addEventListener('change', e=>{
    if (e.target.classList.contains('form-check-label')) {
        filtrar(pastEvents);
        
    }
});



searchInput.addEventListener('input', () => {
    filtrar(pastEvents);
});

function displayCards(cardArray, printSpaceHtml) {
	let stringCardsHtml = ""
	for (element of cardArray) {
        // if (date > element.date) { 
		stringCardsHtml += createCard(element)
        }
	
	printSpaceHtml.innerHTML = stringCardsHtml
}


function createCard(element) {
return `<div class="card col-12 p-3 m-3 " style="width: 18rem;">
            <img src="${element.image}" class="card-img-top" alt="${element.category}">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.description}</p>
                <div class="row justify-content-evenly">
                    <a href="#" class="btn w btn-primary col-5">Details</a>
                    <a href="#" class="btn w btn-secondary col-5">${element.price}</a>
                </div>
            </div>
        </div> `
}


function determinateCategories(arrayEventos, arrayNueva) {
    for (let index = 0; index < arrayEventos.length; index++) {
        if(arrayNueva.includes(arrayEventos[index].category) != true) {
            arrayNueva.push(arrayEventos[index].category)
        }
        
    }
}

function renderBtns(categories) {
    let htmlbtns = ''
    categories.forEach(element => {
        htmlbtns += `<div class="form-check form-switch col-6 col-lg-2">
        <input class="form-check-input" value="${element}" type="checkbox" role="switch" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">${element}</label>
    </div>`
    btnsContainer.innerHTML = htmlbtns
    });
}


function filtrar(pastEvents) {
    let search = searchInput.value;
    let checked = Array.from(checkbox).filter(item => item.checked).map(item => item.value)
    console.log(search, checked)
    let filterEvents = pastEvents.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    if (checked.length > 0) {
        filterEvents = filterEvents.filter(i => {
            let eventCategories = i.category.map(item => item.category.name);
            return checked.some(item => eventCategories.includes(item));
        });
    }
        displayCards(filterEvents, cardContainer)
        console.log(filterEvents)

    }


function createPastEvents(arrayOfEvents, date) {
    for (element of arrayOfEvents) {
        if (date > element.date) {
            pastEvents.push(element)
        }
    }
    
}


// Filtro idea
// function filtrar(pastEvents) {
//     let search = searchInput.value;
//     let checked = Array.from(checkbox).filter(item => item.checked).map(item => item.value)
//     console.log(search, checked)
//     let filterEvents = pastEvents.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
//     if (checked.length > 0) {
//         for (let index = 0; index < checked.length; index++) {
//             let filterEevents =- filterEvents.filter(item => item.category == checked)
            
//         }
//         displayCards(filterEvents, cardContainer)
//         console.log(filterEvents)

//     }