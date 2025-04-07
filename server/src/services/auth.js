import jwt from "jsonwebtoken";
import "dotenv/config";

function generateToken(id) {
    return jwt.sign(
        {id: id},
        process.env.SECRETKEY,
        {expiresIn: 86400}
    );
}

export default generateToken;