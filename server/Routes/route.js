import { Router } from "express"; 

const Routes =  Router(); 

// Routes.get("/", (req, res)=>{
//     res.send("hello"); 
// });

Routes.get("/", (req, res)=>{
    res.json({"content":  "Hello" }); 
});

// parametros de la route  
Routes.get("/home/:name", (req, res)=>{
    const nombre = req.params.name
    res.send(`Home: ${nombre}`); 
});

// query de la ruote
Routes.get("/products/nombre", (req, res)=>{
    const id = req.query.product
    res.send(`Product: ${id}`); 
})

// body de la route
Routes.post("/products", (req, res)=>{
    const {nombre, precio } = req.body
    res.send(`Product: ${nombre} creado con precio ${precio}`); 
})


export default Routes;