let dataUrl = "https://mindhub-xj03.onrender.com/api/amazing";



async function traerDatos(callback){
    try {
     const response = await fetch(dataUrl);
     const jsData = await response.json();
     let data = jsData.events
     let date = jsData.currentDate;
     
     callback(data, date);
    } 
    catch(error) {
     console.log(error);
    }
 
 }