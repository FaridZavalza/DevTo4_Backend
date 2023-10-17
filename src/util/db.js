const mongoose = require("mongoose")
const {DB_URI} = require("../../config")
module.exports = {
    connect : () => {
        return mongoose.connect (DB_URI, {retryWrites:true})
    }
}