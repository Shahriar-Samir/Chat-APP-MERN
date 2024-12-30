import { TConversation } from './conversations.interface';
import ConversationModel from './conversations.model';

export const createConversationIntoDB = async (payload: TConversation) => {
  const result = await ConversationModel.create(payload);
  return result;
};
