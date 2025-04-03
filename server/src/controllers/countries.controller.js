import conn from "../config/conn.js";

async function getAll(req, res) {
    try {
        const countries = await conn.query(`
            select * from countries
            order by name    
        `);
        res.status(200).send(countries[0]);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getOne(req, res) {
    try {
        const {id} = req.params;
        const country = await conn.query(`
            select * from countries where id = ?    
        `, [id]);

        res.status(200).send(country[0]);

    } catch (error) {
        res.status(500).send(error);
    }
}

async function addNew(req, res) {
    try {
        const { name, continent, population, capital, flag_url} = req.body;
        const country = await conn.query(`
            insert into countries (name, continent, population, capital, flag_url)
            values (?, ?, ?, ?, ?)
        `, [name, continent, population, capital, flag_url]);
        
        const id = country[0].insertId;
        const newData = await conn.query(`
            select * from countries where id = ?    
        `, [id]);
        console.log(newData);
        
        res.status(201).send({
            message: "New data created",
            newData: newData[0]
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

async function update(req, res) {
    try {
        const { name, continent, population, capital, flag_url} = req.body;
        const {id} = req.params;
        
        await conn.query(`
            update countries
            set name = ?, 
            continent = ?, 
            population = ?, 
            capital = ?, 
            flag_url = ?
            where id = ?
        `, [name, continent, population, capital, flag_url, id]);

        const newData = await conn.query(`
            select * from countries where id = ?`, [id]
        );

        res.status(200).send({
            message: "Data updated",
            newData: newData[0]
        });
    } catch (error) {
        res.status(500).send(error);
        
    }
}

async function deleteOne(req, res) {
    try {
        const {id} = req.params;
        
        await conn.query(`
            delete from countries where id = ?
        `, id);

        res.status(200).send({
            message: "Data deleted"
        });
    } catch (error) {
        res.status(500).send(error);
        
    }
}

async function getByName(req, res) {
    try {
        const { name } = req.query;
        
        const response = await conn.query(`
            select * from countries where name = ?
        `, [name]); 

        res.status(200).send(response[0]);
    } catch (error) {
        res.status(500).send(error);
        
    }
}

async function getByContinent(req, res) {
    try {
        const {continent} = req.query;

        const response = await conn.query(`
            select * from countries where continent = ?
        `, [continent]);

        res.status(200).send(response[0]);
    } catch (error) {
        
    }
}

export default {
    getAll,
    getOne,
    addNew,
    update, 
    deleteOne,
    getByName,
    getByContinent
}