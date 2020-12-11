require('dotenv').config();
const express = require('express');
const db = require('./db');
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
    
//CRUD operations
//GET all movies
app.get('/api/movies', async(req, res) => {

    try {
    const results = await db.query('SELECT * FROM movies');
    
        res.status(200).json({
        status: "success",
        results: results.rows.length,
        data: {
            movies: results.rows
            
        }
    })    
    } catch (err) {
    console.log(err)  
    }
});

//GET a movie
app.get('/api/movies/:id', async (req, res) => {
    console.log(req.params.id);
    try {
        const results = await db.query('SELECT * FROM movies WHERE id = $1', [req.params.id])

        res.status(200).json({
            status: "success",
            data: {
                movie: results.rows[0]
            }
        })

    } catch (err) {
        console.log(err)
    }
});

//Create a Movie
app.post('/api/movies', async (req, res) => {
    
    
    try {
        
        const results = await db.query ('INSERT INTO movies (name, date, rating, genre) values ($1, $2, $3, $4) returning *', [req.body.name, req.body.date, req.body.rating, req.body.genre])

        console.log(results);
        res.status(201).json({
            status: "success",
            data: {
                movies: results.rows[0]
            }
        })    
    } catch (err) {
        console.log(err)
    }
});

//Update a Movie
app.put('/api/movies/:id', async(req, res) => {
    
    try {
        const results = await db.query(
            "UPDATE restaurants SET name = $1, date = $2, rating = $3, genre = $4 where id = $5 returning *",
            [req.body.name, req.body.date, req.body.rating,req.body.genre, req.params.id]
        );
        
        res.status(200).json({
        status: "success",
        data: {
            movies: results.rows[0]
        }
    })

        } catch (err) {
        console.log(err)
    }
});

//Delete a Movie
app.delete('/api/movies/:id', async(req, res) => {

    try {
        const results = db.query("DELETE FROM movies where id = $1", [
            req.params.id,
        ]);
        res.status(204).json({
            status: "success!"
        })
    } catch (err) {
        console.log(err)
    }
});




const PORT = process.env.PORT || 3001 ;
app.listen(PORT, ()=> {
    console.log(`server up and running on port ${PORT}`)
});
