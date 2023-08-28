const cardContainer = document.getElementById("cardss")




function displayCards(cardArray, printSpaceHtml, date) {
	let stringCardsHtml = ""
	for (element of cardArray) {
        if (date > element.date) { 
		stringCardsHtml += createCard(element)
        }
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


displayCards(data.events, cardContainer, data.currentDate)