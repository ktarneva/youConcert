import { commentsCollection } from "../schema/commentsSchema";
import { Document } from 'mongoose';

// Moderation Service function
export async function moderateComments() {
  try {

    const unmoderatedComments = await commentsCollection.find({ moderationStatus: 'pending' });
    unmoderatedComments.forEach(async (comment) => {
      const moderationStatus = await moderateComment(comment);

      await commentsCollection.updateOne({ _id: comment._id }, { $set: { moderationStatus } });
    });

    console.log('Moderation process completed.');
  } catch (error) {
    console.error('Error:', error);
  } 
}

// Moderation logic function
async function moderateComment(comment: Document) {
    const offensiveKeywords = ['offensive', 'inappropriate', 'spam'];
  
    // Check if the comment contains offensive keywords
    for (const keyword of offensiveKeywords) {
      if (comment.get('body').includes(keyword)) {
        return 'rejected';
      }
    }
  
    return 'approved';
  }
  
  

