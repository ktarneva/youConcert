import * as amqp from "amqplib";
import config from "./RabbitMQConfig";

class RabbitMQProducer {
  channel: any;

  async createChannel() {
    const connection = await amqp.connect(config.rabbitMQ.url);
    this.channel = await connection.createChannel();
  }

  async publishMessage(
    routingKey: string,
    title: string,
    createdAt: any,
    body: string,
    videoID: string
  ) {
    if (!this.channel) {
      await this.createChannel();
    }

    const exchangeName = config.rabbitMQ.exchangeName;
    await this.channel.assertExchange(exchangeName, "direct");

    const commentDetails = {
      routingKey: routingKey,
      title: title,
      createdAt: createdAt,
      body: body,
      videoID: videoID,
    };

    await this.channel.publish(
      exchangeName,
      routingKey,
      Buffer.from(JSON.stringify(commentDetails))
    );

    console.log(
      `The new ${routingKey} log is sent to exchange ${exchangeName}`
    );
  }
}

export default RabbitMQProducer;
