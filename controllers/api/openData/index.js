const express       = require('express');
const router        = express.Router();

const controller    = require('./controller');

//router.stuff to follow

router.get('/', controller.getFelonies);



//here endeth the 'router.stuff'


module.exports      = router;
