const app = require("./config/express")();
require("./config/database")("mongodb://localhost/contactlist");

app.listen(app.get("port"), () => {
    console.log("Express server escutando a porta" + " - " + app.get("port"));
});