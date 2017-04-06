const Lboarders  = require('../../models/lboarders')
const controller = {}
const marked     = ('marked');


controller.index = (req, res) => {

    res.render('lboarders/index')

}


module.exports = controller;
