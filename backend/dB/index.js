const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://tiyajo2002:Pass123456789@cluster0.oft3egy.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDb Atlas connection established')
    })
    .catch(err => {
        console.log(err)
    })
