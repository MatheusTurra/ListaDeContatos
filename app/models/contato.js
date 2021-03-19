const Mongoose = require("mongoose");

module.exports = () => {
    const schema = Mongoose.Schema({
        nome: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
            index: {
                unique: true
            }
        }
    });

    return Mongoose.model("Contato", schema);
}