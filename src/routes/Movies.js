const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET all movies
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM pelicula', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET a movie
router.get('/:id_pelicula', (req, res) => {
  const { id_pelicula } = req.params; 
  mysqlConnection.query('SELECT * FROM pelicula WHERE id_pelicula = ?', [id_pelicula], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE a movie
router.delete('/:id_pelicula', (req, res) => {
  const { id_pelicula } = req.params;
  mysqlConnection.query('DELETE FROM pelicula WHERE id_pelicula = ?', [id_pelicula], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'movie deleted'});
    } else {
      console.log(err);
    }
  });
});

// INSERT a movie
router.post('/', (req, res) => {
  const {nombre, director, fecha, idioma, duracion} = req.body;
  console.log(nombre, director, fecha, idioma, duracion);
  const query = `
    CALL addMovie(?, ?, ?, ?, ?);
  `;
  mysqlConnection.query(query, [nombre, director, fecha, idioma, duracion], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'movie Saved'});
    } else {
      console.log(err);
    }
  });
});

// UPDATE a movie
router.put('/:id_pelicula', (req, res) => {
  const { nombre, director, fecha, idioma, duracion } = req.body;
  const { id_pelicula } = req.params;
  const query = `
    CALL updateMovie(?, ?, ?, ?, ?, ?);
  `;
  mysqlConnection.query(query, [id_pelicula, nombre, director, fecha, idioma, duracion], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'movie Updated'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
