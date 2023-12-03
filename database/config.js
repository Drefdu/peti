const mongoose = require ('mongoose');
MONGODB_CNN = 'mongodb+srv://dany:m8fd3UF2kntH1ANR@cluster0.mzxxqmm.mongodb.net/';
const dbConnection = async () => {
    try {
        await mongoose.connect(MONGODB_CNN)
        console.log('Base de datos online :)')
    } catch (error) {
        console.log(error)  
        mongoose.disconnect();
        throw new Error('Error al iniciar la base de datos')
    }
};

module.exports = { dbConnection };