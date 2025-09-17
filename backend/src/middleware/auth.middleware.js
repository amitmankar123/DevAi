import jwt from "jsonwebtoken"
import redisClient from "../services/redis.services.js";

export const authUser = async (req, res, next) => {
    try {
        const token =  req.headers?.authorization.split(" ")[ 1 ];
       if (!token) {
            return res.status(401).send({ error: 'Unauthorized User1' });
        }

        const isBlackListed = await redisClient.get(token);

        if (isBlackListed) {

            res.cookie('token', '');
            
            return res.status(401).send({ error: 'Unauthorized User2' });
        }

        console.log("Token received:", token);

        const decoded = jwt.verify(token, process.env.JWT_SECERET);
        req.user = decoded;
        next();
    } catch (error) {

        console.log(error);
  console.log(error.message)
        res.status(401).send({ error: 'Unauthorized User3' });
    }
}