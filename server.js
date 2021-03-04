const Http = require("http");
const app = require("./config/express")();

Http.createServer(app).listen(app.get("port"), () => {
    console.log("Express server escutando na porta" + app.get("port"));
});