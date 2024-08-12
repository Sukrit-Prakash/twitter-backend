const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// const cors = require('cors')
// const dotenv = require('dotenv')
// dotenv.config()

const app = express();
app.use(bodyParser.json());
app.use(cors());



const PORT = 5000

const authroutes = require('./routes/auth')
const tweetroutes = require('./routes/tweets')

app.use('/api/auth',authroutes)
app.use('/api/tweets',tweetroutes)

mongoose.connect('mongodb+srv://sukritprakash2020:2iB9icnhl3niLL8I@inventory.lohzopz.mongodb.net')
.then(()=>{
    console.log('MongoDB connected')
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });

})
.catch((error)=>{
    console.log(error)
})


// app.listen(PORT,()=>{
//     `server listening on port ${PORT}`
// })

// const authRoutes = require('./routes/auth');
// const tweetRoutes = require('./routes/tweets');

// app.use('/api/auth', authRoutes);
// app.use('/api/tweets', tweetRoutes);