const { BlogPost } = require('../models/');

module.exports = {
    view_posts : (req,res) => {
        console.log('GET —')
        res.send('> ✓')
    },
    create_post : (req,res) => {
        console.log('POST —')
        res.send('+ ✓')
    },
};