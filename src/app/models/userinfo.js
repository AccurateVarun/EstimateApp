var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
var UserInfoSchema = new Schema({
    Name     : { type: String, required: true },
    Email    : { type: String, required: true },
    Company  : { type: String, required: true },
    Project  : { type: String, required: true }

});
//mongoose.model("UserInfo", UserInfoSchema);

var collectionName = 'UserInfo'

var UserInfo = mongoose.model('UserInfo', UserInfoSchema,collectionName);

module.exports = {
    UserInfo: UserInfo
}