import { Request, Response,NextFunction  } from 'express';
import cors from "cors";
import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
const mongoose = require ('mongoose');
const recommendationsRoutes = require('../src/routes/recommendationRoutes');
import envConfig from "./env-config"

// express app
const app = express();

// middleware & static files
app.disable("x-powered-by")
app.use(morgan("dev"))
app.use(urlencoded({ extended: true }))
app.use(json())
app.use(cors())
app.get("/message/:name", (req, res) => {
  return res.json({ message: `hello ${req.params.name}` });
})
app.get("/healthz", (req, res) => {
  return res.json({ ok: true });
});


app.use((req: Request, res: Response, next: NextFunction) => {
  res.locals.path = req.path;
  next();
});

//mongo connection
app.listen(envConfig.api_port.port, async () => {
mongoose
.connect(envConfig.mongo.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result:any) =>{
    console.log(`Running on ENV = ${envConfig.api_port.environment}`);
    console.log('Connected to mongoDB.');
  })
  .catch((error: Error) => {
    console.log('Unable to connect.');
    console.log(error);
  });
console.log("Server is running at port:", envConfig.api_port.port);
});

// routes
app.get('/',(req: Request, res: Response): void => {
  res.redirect('/recommendations');
});

// recommendation routes
app.use('/recommendations', recommendationsRoutes);

// 404 page
app.use((req: Request, res: Response): void => {
  res.status(404).render('404', { title: '404' });
});