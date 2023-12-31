import mongoose from "mongoose";

const URLMONGO = process.env.MONGO_URI

export const connectDb = async() => {
    try {
        const db = await mongoose.connect(URLMONGO);

        const url = `${db.connection.host}: ${db.connection.port}`

        console.log(`CONECTADO A LA BASE DE DATOS ${url}`);
    } catch (error) {
        console.log(`No se pudo conectar a la base de datos ${error.message}`);
    }
}