const { BlogPost } = require('../models/');

module.exports = {
    view_posts : (req,res) => {
        console.log('GET —')
        BlogPost
        .find()
        .then(data => {
            console.log(data)
            res.send(data)
        })
        .catch(err => console.log(err))
    },
    create_posts : (req,res) => {
        console.log('POST —')
        BlogPost.create({ title: req.body.title });
        res.send('+ ✓')
    },
};