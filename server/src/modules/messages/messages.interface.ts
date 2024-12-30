export type TMessage = {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  messageType: 'text' | 'image' | 'file';
  isDeleted: true;
};
