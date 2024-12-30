import { model, Schema } from 'mongoose';
import { TConversation, TParticipant } from './conversations.interface';

const participantSchema = new Schema<TParticipant>({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  joinedAt: {
    type: String,
    required: true,
  },
  lastReadMessageId: {
    type: String,
    required: true,
  },
});

const conversationSchema = new Schema<TConversation>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    participants: {
      type: [participantSchema],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const ConversationModel = model('conversation', conversationSchema);

export default ConversationModel;
