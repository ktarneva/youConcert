import * as amqp from "amqplib";
import * as service from "./controller/commentsController";
import { createServer } from "./server";
import util from "util";

const port = process.env.FILTER_SERVICE_PORT || 3010;
const server = createServer();

server.listen(port, () => {
  util.log(`api running on ${port}`);
});

async function consumeMessages(): Promise<void> {
  const connection = await amqp.connect("amqp://rabbitmq:5672/");
  const channel = await connection.createChannel();

  await channel.assertExchange("commentExchange", "direct");

  const q = await channel.assertQueue("CommentQueue");

  await channel.bindQueue(q.queue, "commentExchange", "Comment");

  channel.consume(q.queue, async (msg: amqp.ConsumeMessage | null) => {
    if (msg) {
      const data = JSON.parse(msg.content.toString());
      console.log("Received message:", data);
      channel.ack(msg);

      const comment = {
        title: data.title,
        body: data.body,
        createdAt: data.createdAt,
        videoID: data.videoID,
      };

      try {
        const newComment = await service.createComment(comment);
        console.log("New comment added:", newComment);
      } catch (error) {
        console.log("Error while creating comment:", error);
      }
    }
  });
}

consumeMessages().catch((error) => {
  console.error("Error occurred while consuming messages:", error);
});

  