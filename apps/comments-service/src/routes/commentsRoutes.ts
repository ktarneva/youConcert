import { Router } from 'express';
import * as service from "../controllers/commentsController";
import bodyParser from "body-parser";
import RabbitMQProducer from "../services/RabbitMQ"

export const CommentsRouter = () => {
  const router = Router();
  const rabbitMQProducer = new RabbitMQProducer();
  router.use(bodyParser.json());

router.get('/', service.getComments);
router.post("/create", async (req, res) => {
  const comment = await rabbitMQProducer.publishMessage(
    req.body.routingKey,
    req.body.title,
    req.body.createdAt,
    req.body.body,
    req.body.videoID
  );

  return res.json({ comment });
});

router.get('/:id', service.getCommentDetails);
router.get('/byVideoID/:id',service.getCommentsByVideoId)
router.delete('/delete/:id', service.deleteComment);
router.put('/update',service.updateComment)

return router;
};
