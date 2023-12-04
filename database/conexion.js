// database.js

const { MongoClient } = require('mongodb');

async function connectToDatabase() {
  try {
    const client = await MongoClient.connect('mongodb+srv://vercel-admin-user:ZSYdFJd8lqC1JCzC@cluster0.otzdkns.mongodb.net/');
    console.log('Conexión exitosa a la base de datos');
    return client.db(); // Devuelve el objeto de base de datos
  } catch (error) {
    console.error('Error de conexión a la base de datos:', error);
    throw error; // Puedes manejar el error según tus necesidades
  }
}

module.exports = { connectToDatabase };
