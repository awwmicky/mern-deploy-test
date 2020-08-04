const { BlogPost } = require('../models/');

module.exports = {
    view_posts : (req,res) => {
        console.log('GET —')
        res.send('> ✓')
    },
    create_posts : (req,res) => {
        console.log('POST —')
        res.send('+ ✓')
    },
};