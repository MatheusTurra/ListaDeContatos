const Mongoose = require("mongoose");

module.exports = (uri) => { 
    
    Mongoose.connect(uri);
    
    Mongoose.connection.on("connected", () => {
        console.log("Mongoose! Conectado em " + uri);
    });

    Mongoose.connection.on("disconnected", () => {
        console.log("Mongoose! Disconectado " + uri);
    });

    Mongoose.connection.on("error", erro => {
        console.log("Mongoose! Erro na conexão " + erro);
    });

    process.on("SIGINT", () => {
        Mongoose.connection.close(() => {
            console.log("Mongoose! Desconectado pelo término da aplicação ");
            process.exit(0);
        });
    });
}