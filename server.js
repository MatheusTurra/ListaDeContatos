const app = require("./config/express")();

app.listen(app.get("port"), () => {
    console.log("Express server escutando na porta" + " - " + app.get("port"));
});