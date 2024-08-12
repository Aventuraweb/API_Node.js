async function consulta() {
    const result = await fetch("http://localhost:8000");
    const data = await result.json();
   
    return data;
}

const body = document.body;
const dataSection =  document.createElement('section');

(async () =>{
    const data = await consulta(); 
    dataSection.innerHTML = `${Object.keys( data )} : ${Object.values( data )}`; 
})(); 

body.appendChild(dataSection);
