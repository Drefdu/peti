const mongoose = require ('mongoose');
MONGODB_CNN = 'mongodb+srv://daniela:danielaruiz@cluster1.8zhrttp.mongodb.net/?retryWrites=true&w=majority';
const dbConnection = async () => {
    try {
        await mongoose.connect(MONGODB_CNN)
        console.log('Base de datos online :)')
    } catch (error) {
        console.log(error)  
        throw new Error('Error al iniciar la base de datos')
    }
};

module.exports = { dbConnection };