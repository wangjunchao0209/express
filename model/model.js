const mongoose = require('mongoose')

const DataModel = {
    albums: {
        name: String,
        price: Number
    },
    user: {
        name: String,
        passWord: String
    }
}
mongoose.model('albums', DataModel.albums)
mongoose.model('User', DataModel.user)
