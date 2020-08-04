module.exports = {
    MONGO_URI: (
        process.env.MONGODB_URI || 
        'mongodb://localhost/mern_db'
    ),
    
    options: { 
        useNewUrlParser    : true, 
        useUnifiedTopology : true,
        useFindAndModify   : false
    }
};