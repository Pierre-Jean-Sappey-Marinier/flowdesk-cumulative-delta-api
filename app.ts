import express from "express";
import swaggerUi from "swagger-ui-express";
import specs from "./src/swaggerOptions";
import Logger from "./src/services/logger";
import config from "./src/config";

const logger = new Logger();

const app = express();

app.use("/", (req, res) => res.json("hello World!"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(config.PORT, () => {
  logger.log(`L'application écoute sur le port ${config.PORT}`);
});
