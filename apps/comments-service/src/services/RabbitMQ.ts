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
    body: string,
    createdAt:string,
    videoID: string
  ) {
    if (!this.channel) {
      await this.createChannel();
    }
  
    const exchangeName = config.rabbitMQ.exchangeName;
    await this.channel.assertExchange(exchangeName, "direct");
  
    const commentDetails = {
      commentType: routingKey,
      title: title,
      body: body,
      createdAt: new Date(),
      videoID: videoID
    };
  
    await this.channel.publish(
      exchangeName,
      routingKey,
      Buffer.from(JSON.stringify(commentDetails))
    );
  
    console.log(
      `The new ${routingKey} log is sent to exchange ${exchangeName}`
    );
  
    // Return the commentDetails as the result
    return commentDetails;
    }
  }
  
export default RabbitMQProducer;
