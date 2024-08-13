// forma de hacer el crud con funcion async 
class queryAsync {
    constructor(database){
        this.database = database
    }

    // Método para obtener todos los usuarios

    async getAllUsers() {
        const sql = "SELECT * FROM personas";
        try {
            const rows = await this.database.query(sql);
            return rows;
        } catch (error) {
            console.error("Error in getAllUsers:", error);
            throw error;
        }
    }

    // Método para obtener un usuario por ID
    async getUserById(id) {
        const sql = "SELECT * FROM personas WHERE id = ?";
        try {
            const rows = await this.database.query(sql, [id]);
            return rows;
        } catch (error) {
            console.error("Error in getUserById:", error);
            throw error;
        }
    }  

    // Método para crear un usuario
    async createUser(user) {
        const sql = "INSERT INTO personas SET ?";
        try {
            const result = await this.database.query(sql, user);
            return result;
        } catch (error) {
            console.error("Error in createUser:", error);
            throw error;
        }
    }   

    // Método para actualizar un usuario por ID
    async updateUser(user, id) {
        const sql = "UPDATE personas SET ? WHERE id = ?";
        try {
            const result = await this.database.query(sql, [user, id]);
            return result;
        } catch (error) {
            console.error("Error in updateUser:", error);
            throw error;
        }
    }

    // Método para eliminar un usuario por ID
    async deleteUser(id) {
        const sql = "DELETE FROM personas WHERE id = ?";
        try {
            const result = await this.database.query(sql, [id]);
            return result;
        } catch (error) {
            console.error("Error in deleteUser:", error);
            throw error;
        }
    }
}

// Exportar la clase para su uso en otros módulos
export default queryAsync; 