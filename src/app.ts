import express from "express";
import config from "config";
import connect from "./utils/connect";
import routes from "./routes";

const loggerNam = require("./utils/loggerNam");
const port = config.get<string>("port");
const app = express();

app.listen(port, async () => {
  loggerNam.info(`App is running at http://localhost:${port}`);
  await connect();
  routes(app);
});
