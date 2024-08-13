import { Router } from "express"; 
import Database from "../db/connection/bdAsync.js";
import queryAsync from "../db/querys/queryAsync.js";

const Routes =  Router(); 

// Routes.get("/", (req, res)=>{
//     res.send("hello"); 
// });

// para la conexion de async y instanciamiento 
const config = {
    host : "localhost", 
    user: "root", 
    password: "", 
    database: "crudapi"
}; 

const dbAs = new Database(config); 
const queryAS = new queryAsync(dbAs); 

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

// ruta sencilla 

// Routes.get("/users", async (req, res) => {
//     try{
//         const users = await query.getAllUsers(); 
//         res.json(users); 
//     }catch (error) {
//         console.log(error); 
//         res.status(500).json({error: "Server error"}); 
//     }
// })

// ruta del async 

Routes.get("/personas", async (req, res) =>{
    try{
        const data = await queryAS.getAllUsers(); 
        res.json(data); 
    }catch (error){
        console.error(error); 
        res.status(500).json({error: "Server error"}); 
    }
}); 

// Obtener un usuario por ID
Routes.get("/personas/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await queryAS.getUserById(id);
        if (data.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(data[0]); // Asumiendo que `data` es un array
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

// Crear un nuevo usuario
Routes.post("/personas", async (req, res) => {
    const newUser = req.body; // { usuario, nombre, apellido }
    try {
        const result = await queryAS.createUser(newUser);
        res.status(201).json({ id: result.insertId }); // Suponiendo que `insertId` es el ID del nuevo usuario
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

// Actualizar un usuario por ID
Routes.put("/personas/:id", async (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body; // { usuario, nombre, apellido }
    try {
        const result = await queryAS.updateUser(updatedUser, id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

// Eliminar un usuario por ID
Routes.delete("/personas/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await queryAS.deleteUser(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});



export default Routes;