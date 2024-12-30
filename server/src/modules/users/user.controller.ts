import { createUserIntoDB } from './user.service';

export const createUser = async (req, res) => {
  try {
    const userData = req.body;
    console.log(userData);
    const result = await createUserIntoDB(userData);
    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User created successfully',
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: 'Something went wrong',
      data: err,
    });
  }
};
