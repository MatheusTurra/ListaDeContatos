const contatos = [
    {_id: 1, nome: "teste132"},
    {_id: 2, nome: "teste2"},
    {_id: 3, nome: "teste3"},
    {_id: 4, nome: "teste4"},

]

module.exports = () => {
    const controller = {};

    controller.listaContatos = (req, res) => {
        res.json(contatos);
    }

    controller.obtemContato = (req, res) => {
        const idContato = req.params.id;

        const contato = contatos.filter(contato => {
            return contato._id == idContato;
        })[0];

        contato ? res.json(contato) : res.status(404).send("contato não encontrado")
    }

    return controller;
}