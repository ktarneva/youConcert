import * as amqp from "amqplib";
import rabbitMQConfig from "./RabbitMQConfig";

class Producer {
  channel: any;

  async createChannel() {
    const connection = await amqp.connect(rabbitMQConfig.rabbitMQ.url);
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

    const exchangeName = rabbitMQConfig.rabbitMQ.exchangeName;
    await this.channel.assertExchange(exchangeName, "direct");

    const reviewDetails = {
      routingKey: routingKey,
      title: title,
      createdAt: createdAt,
      body: body,
      videoID: videoID,
    };

    await this.channel.publish(
      exchangeName,
      routingKey,
      Buffer.from(JSON.stringify(reviewDetails))
    );

    console.log(
      `The new ${routingKey} log is sent to exchange ${exchangeName}`
    );

    // console.log(`Message is sent to exchange ${exchangeName}`);
  }
}

export default Producer;

