import { Request, Response } from 'express';
import { Document} from 'mongoose';
import { commentsCollection } from '../schema/commentsSchema';

export const createComment = async (comment: any): Promise<Document> => {
  try {
    const newComment = new commentsCollection({
      title: comment.title,
      body: comment.body,
      createdAt: comment.createdAt,
      videoId: comment.videoID,
    });

    const savedComment: Document = await newComment.save();

    return savedComment;
  } catch (err) {
    console.error(err);
    throw new Error('Server Error');
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


  