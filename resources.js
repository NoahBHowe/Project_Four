const express = require('express');
const router  = express.Router();

router.use('/lboarders', require('./controllers'));

module.exports = router;
