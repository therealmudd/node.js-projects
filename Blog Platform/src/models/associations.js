const User = require('./userModel');
const Post = require('./postModel');
const Comment = require('./commentModel');

function establish_associations(){
    User.hasMany(Post);
    Post.belongsTo(User);
    
    Post.hasMany(Comment);
    Comment.belongsTo(Post);

    Comment.belongsTo(User);
}

module.exports = establish_associations;
