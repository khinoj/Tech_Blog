const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const signUpRoute = require('./signup');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/signup', signUpRoute);

module.exports = router;
