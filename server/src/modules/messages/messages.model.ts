import { model, Schema } from 'mongoose';
import { TMessage } from './messages.interface';

const messageSchema = new Schema<TMessage>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    conversationId: {
      type: String,
      required: true,
    },
    senderId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    messageType: {
      type: String,
      enum: ['text', 'image', 'file'],
      default: 'text',
    },
  },
  {
    timestamps: true,
  },
);

const MessageModel = model('Message', messageSchema);

export default MessageModel;
