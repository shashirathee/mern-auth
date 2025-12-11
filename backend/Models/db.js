const mongose = require('mongoose');  
// passsword: BRupO3fc1Mhq4yL0

const mongo_url = process.env.MONGO_CONN;

mongose.connect(mongo_url)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });