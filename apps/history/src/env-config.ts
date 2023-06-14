import dotenv from "dotenv";

dotenv.config();
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : "development";
const API_PORT = process.env.API_PORT ? Number(process.env.API_PORT) : 8001;

const MONGO_DB_USER = process.env.MONGO_DB_USER || "";
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD || "";
const MONGO_URL = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@youconcertvids.wfko9s6.mongodb.net/`;

const RabbitMQ_BASE_URL = process.env.RabbitMQ_BASE_URL || "";
const RabbitMQ_USER = process.env.RabbitMQ_USER || "";
const RabbitMQ_PASSWORD = process.env.RabbitMQ_PASSWORD || "";
const RabbitMQ_URL = process.env.RabbitMQ_BASE_URL 
  ? `amqps://${RabbitMQ_USER}:${RabbitMQ_PASSWORD}@${RabbitMQ_BASE_URL}/${RabbitMQ_USER}`
  : "";

  export interface Config {
    mongo:{
      url: string;
    }
    api_port:{
      environment: string;
      port: Number;
    }
    rabbitMq: {
      url: string;
    };
  }
  
  //CREATE CONFIG OBJECT
  const config: Config = {
    mongo: {
      url: MONGO_URL,
    },
    api_port:{
        environment: NODE_ENV,
        port: API_PORT,
      },
    rabbitMq: {
      url: RabbitMQ_URL,
    },
  }
  export default config;