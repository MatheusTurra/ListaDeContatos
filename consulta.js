const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;

const _idProcurado = new ObjectID("60507389371b893ee42413b8");

MongoClient.connect("mongodb://127.0.0.1:27017/contactlist", (erro, db) => {
    if(erro) throw erro;
    db.collection("contatos").findOne({_id: _idProcurado}, (erro, contato) => {
        if (erro) throw erro;
        console.log(contato); 
    });
});