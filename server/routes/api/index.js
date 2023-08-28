const router = require('express').Router();
const LoginSignup = require('./loginSignup');

router.use('/loginSignup', LoginSignup);

module.exports = router;