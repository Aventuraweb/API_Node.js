// forma sencilla de hacer los query de un srud 

// import connection from "../connection/db";

// const getAllUsers =()=>{
//     const query = "SELECT * FROM Personas"; 
//     return connection.query(query); 
// }

// const getUserById = (id) => {
//     const query = "SELECT * FROM Personas WHERE id = ?"; 
//     return connection.query(query, [id]); 
// }

// const createUser = (user) => {
//     const query = "INSERT INTO Personas SET ?"; 
//     return connection.query(query, user); 
// }

// const updateUser = (user, id) => {
//     const query = "UPDATE Personas SET ? WHERE id = ?"; 
//     return connection.query(query, [user, id]); 
// }

// const deleteUser = ( id) => {
//     const query = "DELETE FROM Personas WHERE id = ?"; 
//     return connection.query(query, [id]); 
// }

// export default {getAllUsers, getUserById, createUser, updateUser, deleteUser};