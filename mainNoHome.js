let dataUrl = "https://mindhub-xj03.onrender.com/api/amazing";
let data = []


async function traerDatos(callback){
    try {
     const response = await fetch(dataUrl);
     const jsData = await response.json();
     let data = jsData.events
     
     callback(data);
    } 
    catch(error) {
     console.log(error);
    }
 
 }