const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const BlogPostSchema = new Schema({
    title: {
        type: String,
        required: "Must input a Title"
    },
        
    date: {
        type: Date,
        default: Date.now()
    }
});



const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
console.log(BlogPost)
module.exports = BlogPost;