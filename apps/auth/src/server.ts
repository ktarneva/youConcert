import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";

export default function createServer() {
  const server = express();
  server
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get("/message/:name", (req, res) => {
      return res.json({ message: `hello ${req.params.name}` });
    })
    .get("/healthz", (req, res) => {
      return res.json({ ok: true });
    });

  return server;
}
