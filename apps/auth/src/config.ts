import dotenv from "dotenv";

dotenv.config();
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : "development";
const AUTH_PORT = process.env.AUTH_PORT ? Number(process.env.AUTH_PORT) : 8000;
const API_PORT = process.env.API_PORT ? Number(process.env.API_PORT) : 8001;

const RabbitMQ_BASE_URL = process.env.RabbitMQ_BASE_URL || "";
const RabbitMQ_USER = process.env.RabbitMQ_USER || "";
const RabbitMQ_PASSWORD = process.env.RabbitMQ_PASSWORD || "";
const RabbitMQ_URL = process.env.RabbitMQ_BASE_URL 
  ? `amqps://${RabbitMQ_USER}:${RabbitMQ_PASSWORD}@${RabbitMQ_BASE_URL}/${RabbitMQ_USER}`
  : "";

  export interface Config {
    auth_server: {
      environment: string;
      port: Number;
    };
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
    auth_server: {
      environment: NODE_ENV,
      port: AUTH_PORT ,
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