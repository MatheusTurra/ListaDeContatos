const controller = require("../controllers/home")();

module.exports = (app) => {
    app.get("/", controller.index);
    app.get("/index", controller.index);
}