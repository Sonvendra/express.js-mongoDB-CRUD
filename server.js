const express = require('express');
const mongoose = require('mongoose');

const { MONGO_URI } = require('./config');
const postRoutes = require('./router/api/posts')

const app = express();

// bodyParser middleware
app.use(express.json());

// connect to MongoDB
mongoose.connect(MONGO_URI,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify:false
 })
.then(() => console.log('DB connected'))
.catch(err => console.log('Error', err));

// user Routes
app.use('/api/posts', postRoutes);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server is running...'))