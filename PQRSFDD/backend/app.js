// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', require('./routes/sucesos'));


// Aquí puedes agregar tus rutas
// app.use('/api', require('./routes/tu_ruta'));

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
