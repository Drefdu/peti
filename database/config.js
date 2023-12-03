const mongoose = require ('mongoose');
const mongoUri = process.env.MONGO_URI;
const dbConnection = async () => {
    try {
        await mongoose.connect(mongoUri)
        console.log('Base de datos online :)')
    } catch (error) {
        console.log(error)  
        mongoose.disconnect();
        throw new Error('Error al iniciar la base de datos')
    }
};

module.exports = { dbConnection };