const amqp = require("amqplib");

const RABBIT = process.env.RABBIT;

//
// Connect to the RabbitMQ server.
//
export function connectRabbitMQ() {
  console.log(`Connecting to RabbitMQ server at ${RABBIT}.`);

  return amqp
    .connect(RABBIT) // Connect to the RabbitMQ server.
    .then((messagingConnection) => {
      console.log("Connected to RabbitMQ.");

      return messagingConnection.createChannel(); // Create a RabbitMQ messaging channel.
    });
}