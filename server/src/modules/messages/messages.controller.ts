import { addMessageIntoDB } from './messages.service';

export const sendMessage = async (req, res) => {
  try {
    console.log(req.user);
    const result = await addMessageIntoDB(req.body);
    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Message sent successfully',
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      success: true,
      statusCode: err,
      message: 'Failed to sent message',
      data: err,
    });
  }
};
