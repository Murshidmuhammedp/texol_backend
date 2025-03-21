import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(403).json({ message: "No token provided.Please Login" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded.id; 
        next();  
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
};

export default verifyToken;