const homeRouter = require("./home");

module.exports = function route(app) {
  app.use("/", homeRouter);
};
