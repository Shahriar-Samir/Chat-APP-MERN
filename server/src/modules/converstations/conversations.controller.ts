import { createConversationIntoDB } from './conversations.service';

export const createConversation = async (req, res) => {
  try {
    const result = await createConversationIntoDB(req.body);
    return res.status(200).json({
      success: true,
      message: 'Conversation created successfully',
      statusCode: 200,
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: 'Failed to create the conversation',
      err,
    });
  }
};
