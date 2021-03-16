const controller = require("../controllers/contato")();

module.exports = (app) => {
    
    app.route("/contatos")
        .get(controller.listaContatos)
        .post(controller.salvaContato);

    app.route("/contatos/:id")
        .get(controller.obtemContato)
        .delete(controller.removeContato);
}