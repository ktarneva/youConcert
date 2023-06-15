import { Router } from 'express';
import * as service from "../controllers/commentsController"
import bodyParser from "body-parser";

export const CommentsRouter = () => {
  const router = Router();
  router.use(bodyParser.json());

router.get('/', service.getComments);
router.post('/create', service.createComment);
router.get('/:id', service.getCommentDetails);
router.get('/byVideoID/:id',service.getCommentsByVideoId)
router.delete('/delete/:id', service.deleteComment);
router.put('/update',service.updateComment)

return router;
};
