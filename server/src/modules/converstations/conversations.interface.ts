export type TParticipant = {
  uid: string;
  joinedAt: string;
  lastReadMessageId: string;
};

export type TConversation = {
  id: string;
  participants: TParticipant[];
  createdAt: string;
  updatedAt: string;
};
