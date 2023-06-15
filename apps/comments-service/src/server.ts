import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import cors from "cors";
import express from "express";
import mongoose, { ConnectOptions } from 'mongoose';


export const createServer = () => {
  const app = express();
const MONGO_URL = "mongodb+srv://kikitarneva:Bvm2Ze7Gocin3NEF@youconcertvids.wfko9s6.mongodb.net/youConcert";


const connectToMongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
  }
};

connectToMongoDB();

// middleware & static files
app
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

  return app;
};



