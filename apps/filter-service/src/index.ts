import * as amqp from "amqplib";
import * as service from "./controller/commentsController";

async function consumeMessages(): Promise<void> {
  const connection = await amqp.connect("amqp://guest:guest@rabbit:5672");
  const channel = await connection.createChannel();

  await channel.assertExchange("commentExchange", "direct");

  const q = await channel.assertQueue("CommentQueue");

  await channel.bindQueue(q.queue, "commentExchange", "comment");

  channel.consume(q.queue, async (msg: amqp.ConsumeMessage | null) => {
    if (msg) {
      const data = JSON.parse(msg.content.toString());
      console.log(data);
      channel.ack(msg);

      const comment = {
        title: data.title,
        body: data.body,
        createdAt: data.createdAt,
        videoID: data.videoID,
      };

      const newComment = await service.createComment(comment);
    }
  });
}

consumeMessages().catch((error) => {
  console.error("Error occured while consuming messages:", error);
});



async function processModerationResponse(response: any): Promise<void> {
  const { commentId, moderationStatus } = response;

  // Update comment's moderation status in the database
  await service.updateComment(commentId, moderationStatus);
}

