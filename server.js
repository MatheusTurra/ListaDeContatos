const app = require("./config/express")();

app.listen(app.get("port"), () => {
    console.log("Express server escutando a porta" + " - " + app.get("port"));
});