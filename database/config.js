const mongoose = require ('mongoose');
MONGODB_CNN = 'mongodb+srv://vercel-admin-user:ZSYdFJd8lqC1JCzC@cluster0.otzdkns.mongodb.net/';
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