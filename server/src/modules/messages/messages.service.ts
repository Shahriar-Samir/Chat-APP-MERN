import { TMessage } from './messages.interface';
import MessageModel from './messages.model';

export const addMessageIntoDB = async (payload: TMessage) => {
  const result = await MessageModel.create(payload);
  return result;
};
