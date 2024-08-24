    import express from "express"; 
    import Router from "./Routes/route.js"; // aqui se esta recuperando 
    import dotenv from "dotenv"; 
    import Cors from "cors"; 
    import session from "express-session";
    import limiter from "./Routes/imit.js";

    dotenv.config(); 

    const App = express(); 

    App.use(Cors()); // 

    App.use(limiter) // para usarlo solo 
    
    // App.use("/home/", limiter)  // para usarlo en una ruta en especifico 

    App.use(session ({
        secret: process.env.SECRET_KEY, 
        resave: false, 
        saveUninitialized: true, 
        cookie: {secure: false, express: null}
    }));

    App.use(express.json());  //express crear rutas del servidor 
    App.use(Router);  // para usarla la ruta


    const port = process.env.port || 8000; 

    // const port = 3000; 

    App.listen(port,()=>{
        console.log( `http://localhost:${port}`); 
    })