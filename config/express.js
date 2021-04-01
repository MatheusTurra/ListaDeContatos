const express = require("express");
const bodyParser = require("body-parser");
const contato = require("../app/routes/contato");
const helmet = require("helmet");

module.exports = () => {
    const app = express();

    app.set("port", 3000);
    app.use(express.static("./public"));
    app.set("view engine", "ejs");
    app.set("views", "./app/views");
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require("method-override")());
    
    app.use(helmet());
    app.use(helmet.xframe());
    app.use(helmet.xssFilter());
    app.use(helmet.nosniff());
    app.disable("x-powered-by");

    contato(app);

    app.get('*', function(req, res) {
        res.status(404).render('404');
     });

    return app;
}