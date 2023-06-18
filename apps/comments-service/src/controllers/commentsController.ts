import { Request, Response } from 'express';
import { Document } from 'mongoose';
import { commentsCollection } from '../schemas/comments';
import RabbitMQProducer from '../services/RabbitMQ';

// Create an instance of the RabbitMQProducer
const rabbitMQProducer = new RabbitMQProducer();

export const getComments = async (req: Request, res: Response): Promise<void> => {
  try {
    const comments: Document[] = await commentsCollection.find().sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};


export const getCommentDetails = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  try {
    const comment: Document | null = await commentsCollection.findById(id);
    if (comment) {
      res.json(comment);
    } else {
      res.status(404).send('Comment Not Found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};


export const updateComment = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  try {
    const updatedComment: Document | null = await commentsCollection.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (updatedComment) {
      res.json(updatedComment);
    } else {
      res.status(404).json({ message: 'Comment Not Found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};


export const getCommentsByVideoId = async (req: Request, res: Response): Promise<void> => {
  const videoId = req.params.videoId;
  try {
    const comments: Document[] = await commentsCollection.find({ videoID: videoId });
    if (comments.length > 0) {
      res.json(comments);
    } else {
      res.status(404).json({ message: 'Comments Not Found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
export const createComment = async (req: Request, res: Response): Promise<void> => {
  try {
    await rabbitMQProducer.publishMessage(
      req.body.routingKey,
      req.body.title,
      req.body.createdAt,
      req.body.body,
      req.body.videoID
    );

    res.json({ message: 'Comment sent for moderation' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
}

export const deleteComment = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  try {
    const deletedComment: Document | null = await commentsCollection.findByIdAndDelete(id);
    if (deletedComment) {
      res.json({ message: 'Comment deleted successfully' });
    } else {
      res.status(404).json({ message: 'Comment Not Found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};


