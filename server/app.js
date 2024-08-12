import express from "express"; 
import Router from "./Routes/route.js"; // aqui se esta recuperando 
import Cors from "cors"

const App = express(); 

App.use(Cors()); 
App.use(express.json()); 
App.use(Router); // para usarla la ruta


// se tiene el proyecto inicializado con esto 
const port = 8000; 

App.listen(port,()=>{
    console.log( `http://localhost:${port}`); 
})