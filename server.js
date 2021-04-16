const app = require("./config/express")();
require("./config/database")("mongodb://localhost/contactlist");

app.listen(app.get("port"), () => {
    console.log("Servidor rodando em --> http://localhost:" + app.get("port"));
});