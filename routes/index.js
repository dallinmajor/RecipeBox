const router = require('express').Router();
const APIroutes = require('./API');

router.use('/api', APIroutes);

module.exports = router;