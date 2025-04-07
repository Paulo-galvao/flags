import express from "express";
import cors from "cors";
import conn from "./config/conn.js";
import countriesRouter from "./routes/countries.route.js";
import usersRouter from "./routes/users.route.js";

import "dotenv/config";

const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

conn.connect((error) => {
    if(error) throw error;
    console.log("Database connected");
});

app.use('/countries', countriesRouter);
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log("Server running at port", port);
});