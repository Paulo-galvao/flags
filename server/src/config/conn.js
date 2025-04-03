import mysql from "mysql2";
import "dotenv/config";

const conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: "flagsOfTheWorld"
}).promise();

export default conn;