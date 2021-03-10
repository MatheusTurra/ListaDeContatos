const controller = require("../controllers/contato")();

module.exports = (app) => {
    console.log()
    app.get("/contatos", controller.listaContatos);
    app.get("/contatos=:id", controller.obtemContato);
}