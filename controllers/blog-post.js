const { BlogPost } = require('../models/');

module.exports = {
    view_posts : (req,res) => {
        console.log('GET —')

        BlogPost.find()
        .then(data => res.send(data))
        .catch(err => res.json(err))
    },
    create_posts : (req,res) => {
        console.log('POST —')
        
        BlogPost.create({ title: req.body.title })
        .then(data => res.send(data))
        .catch(err => res.json(err))
    },
};