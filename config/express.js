const express = require("express");
const bodyParser = require("body-parser");
const home = require("../app/routes/home");
const contato = require("../app/routes/contato");

module.exports = () => {
    const app = express();

    app.set("port", 3000);
    app.use(express.static("./public"));
    app.set("view engine", "ejs");
    app.set("views", "./app/views");
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json);
    app.use(require("method-override")());

    home(app);
    contato(app);

    return app;
}