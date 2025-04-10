import bcrypt from "bcrypt";
import generateToken from "../services/auth.js";
import conn from "../config/conn.js";

async function login(req, res) {
    try {
        const { username, password } = req.body;

        const user = await conn.query(`
            select * from users where username = ? 
        `, [username]);

        if(!user) {
            return res.status(401).json({message: "usuário nao encontrado"});
        }

        const id = user[0][0].id;
        const isPasswordValid = await bcrypt.compare(password, user[0][0].password);
        
        if(!isPasswordValid) {
            return res.status(401).json({message: "senha incorreta"});
        }

        const token = generateToken(id);

        res.status(200).send({token});
         
    } catch (error) {
        res.status(500).send(error);
    }
}

async function signup(req, res) {
    try {
        const { username, password } = req.body;

        const cryptPass = await bcrypt.hash(password, 10); 
        
        const user = await conn.query(`
            insert into users (username, password) values ( ?, ? );
        `, [username, cryptPass]);

        res.status(201).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

export default { login, signup };