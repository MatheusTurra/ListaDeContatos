const controller = require("../controllers/contato")();

module.exports = (app) => {
    app.get("/contatos", controller.listaContatos);
    app.get("/contatos/:id", controller.obtemContato);
    app.delete("/contatos/:id", controller.removeContato);
}