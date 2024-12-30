import authServices from './auth.service';

export const loginUser = async (req, res) => {
  try {
    const result = await authServices.loginUser(req.body);
    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User is logged in successfully',
      data: result,
    });
  } catch (err) {
    return res.status(401).json({
      success: false,
      statusCode: 401,
      message: 'Authentication failed',
      data: err,
    });
  }
};
