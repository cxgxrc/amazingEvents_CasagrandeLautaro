const cardContainer = document.getElementById("cardss")
let dataUrl = "https://mindhub-xj03.onrender.com/api/amazing";
let data = []
const buttonFood = document.getElementById('food')
// let foodActive = true;
// buttonFood.addEventListener("click", () => {
//     let foodActive = false

//     )
// }

const buttonRace = document.getElementById('race')
const buttonBooks = document.getElementById('books')
const buttonMuseum = document.getElementById('museum')
const buttonConcert = document.getElementById('concert')
const buttonCinema = document.getElementById('cinema')
const buttonParty = document.getElementById('party')

const active = {
    race: true,
    food: true,
    books: true,
    concert: true,
    cinema: true,
    party: true,
    museum: true,
}

async function traerDatos(){
   try {
    const response = await fetch(dataUrl);
    console.log(response)
    const jsData = await response.json();
    let data = jsData.events
    displayCards(data, cardContainer)
    
   } 
   catch(error) {
    console.log(error);
   }

}




traerDatos()



function displayCards(cardArray, printSpaceHtml, arrayCategory) {
	let stringCardsHtml = ""
	for (element of cardArray) {
        
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



function filterCategories(array, valorActive){
    if (active.valorActive == true) {
        
    }
    else {
        // display none
    }
}


