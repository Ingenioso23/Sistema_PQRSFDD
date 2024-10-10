// backend/routes/sucesos.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Define tus rutas aquí
router.get('/sucesos', (req, res) => {
    db.query('SELECT * FROM sucesos', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

module.exports = router;
