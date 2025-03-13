import jwt from 'jsonwebtoken';

export const generateToken = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "7d"});
    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, //in milliseconds
        httpOnly: true, //prevent XSS attack by not allowing JS to access the cookie
        sameSite: "Strict", //prevent CRSF attack by only allowing cookie to be sent over HTTPS
        secure: process.env.NODE_ENV !== 'development', //cookie will only be sent over HTTPS
    });
    return token;
};
