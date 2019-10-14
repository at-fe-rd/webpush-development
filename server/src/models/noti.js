//Require Mongoose
var mongoose = require('mongoose');

//schema definitions
var Schema = mongoose.Schema;

var NotiSchema = new Schema({
    device_token: Object,
    name: String
});

module.exports = mongoose.model('Noti', NotiSchema );