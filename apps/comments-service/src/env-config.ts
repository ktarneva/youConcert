import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, `../../../.env`),
});
const NODE_ENV = process.env.NODE_ENV || "development";
const PORT = (process.env.PORT) || "";
const COMMENTS_SERVICE_PORT = (process.env.COMMENTS_SERVICE_PORT) || "";

const MONGO_DB_USER = process.env.MONGO_DB_USER || "";
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD ||encodeURIComponent("");
const MONGO_URL =`mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@youconcertvids.wfko9s6.mongodb.net`;

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
    port:{
      environment: string;
      port: any;
    }
  comments_service_port:{
      environment: string;
      port: any;
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
    port:{
        environment: NODE_ENV,
        port: PORT,
      },
    comments_service_port:{
        environment: NODE_ENV,
        port: COMMENTS_SERVICE_PORT,
      },
    rabbitMq: {
      url: RabbitMQ_URL,
    },
  }
  export default config;