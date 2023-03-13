const homeRouter = require("./home");
const adminRouter = require("./admin");
module.exports = function route(app) {
  app.use("/admin", adminRouter);
  app.use("/", homeRouter);
};
