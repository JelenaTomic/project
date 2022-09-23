const router = require('express').Router();
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');
const exerciseRoutes = require('./exerciseRouts');

router.use('/users', userRoutes);
router.use('/workout', workoutRoutes);
router.use('/exercise', exerciseRoutes);

module.exports = router;