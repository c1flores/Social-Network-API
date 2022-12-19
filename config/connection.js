const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialmedia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection 
module.exports = mongoose.connection;