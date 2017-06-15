var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;


var articleSchema = new Schema({
    user_username: String,
    title: String,
    content: String,
    updated_at: String, 
});

module.exports = mongoose.model('articles', articleSchema);