import jwt from 'jsonwebtoken';

const authAdmin = (req, res, next) => {
  try {
    const atoken = req.headers.atoken;
    if (!atoken) {
      return res.status(401).json({ success: false, message: 'Unauthorized access - token missing' });
    }
    const decoded = jwt.verify(atoken, process.env.JWT_SECRET);

    if (decoded.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Forbidden - admin access required' });
    }

    req.user = decoded; // Attach decoded admin info to request
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ success: false, message: 'Unauthorized access - invalid token' });
  }
};

export default authAdmin;
