const express = require('express');
const router  = express.Router();

router.use('/google', require('./controllers/api/google'));
router.use('/openData', require('./controllers/api/openData'));
router.use('/zillow', require('./controllers/api/zillow'));

router.use('/lboarders', require('./controllers/lboarders/'));
module.exports = router;
