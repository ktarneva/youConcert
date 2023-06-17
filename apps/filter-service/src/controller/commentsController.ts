import { Request, Response, request, response } from 'express';
import { Document} from 'mongoose';
import { commentsCollection } from '../schema/commentsSchema';

export const createComment = async (comment:any): Promise<void> => {
  try {
    const comment = new commentsCollection(request.body);
    comment.videoId = request.body.videoID; 

    const savedComment: Document = await comment.save();

    response.json({ message: 'Comment created successfully', comment: savedComment });
  } catch (err) {
    console.error(err);
    response.status(500).json({ error: 'Server Error' });
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


  