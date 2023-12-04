// app.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Configura tu cadena de conexión a MongoDB Atlas
const mongoUri = process.env.MONGO_URI;

// Conecta a la base de datos
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error de conexión a MongoDB Atlas:', error);
  });

// Define un modelo de ejemplo para propósitos demostrativos
const Schema = mongoose.Schema;
const ExampleSchema = new Schema({
  name: String,
});

const ExampleModel = mongoose.model('Example', ExampleSchema);

// Ruta de ejemplo para insertar datos
app.get('/insert', async (req, res) => {
  try {
    // Inserta un documento de ejemplo en la base de datos
    const exampleData = new ExampleModel({ name: 'Ejemplo' });
    await exampleData.save();

    res.send('Datos insertados correctamente en la base de datos.');
  } catch (error) {
    console.error('Error al insertar datos:', error);
    res.status(500).send('Error al insertar datos en la base de datos.');
  }
});

// Ruta de ejemplo para consultar datos
app.get('/read', async (req, res) => {
  try {
    // Consulta todos los documentos en la colección de ejemplo
    const examples = await ExampleModel.find();

    res.json(examples);
  } catch (error) {
    console.error('Error al consultar datos:', error);
    res.status(500).send('Error al consultar datos en la base de datos.');
  }
});

// Inicia la aplicación
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
