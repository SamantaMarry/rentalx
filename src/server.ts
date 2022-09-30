import "reflect-metadata";

import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import { router } from "./routes";
import "./database";
import "./shared/container";
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError)
      return res.status(err.statusCode).json({
        message: err.message        

      });
     return res.status(500).json({
      message: `Internal server error -> ${err.message}`,
    });

  });

app.listen(3333, () => console.log("Server started on port 3333"));
