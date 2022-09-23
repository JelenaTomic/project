const router = require('express').Router();
const { Workout } = require('../../models');
const withAuth = require('../../utils/auth');

// This allows you to addd workouts
router.post('/add', async (req, res) => {
  try {
    const newWorkout = await Workout.create({
      workout_name: req.body.workout_name,
    });
    res.status(200).json(newWorkout);

  } catch (err) {
    res.status(400).json(err);
  }
});

// This allows you to update workouts
router.put('/update/:id', async (req, res) => {
  try {
    const workoutUpdate = await Workout.update(
      {
        workout_name: req.body.workout_name,
      },
      {
        where: {
          workout_name: req.body.workout_name,
        },
      }
    );

    res.status(200).json(workoutUpdate);
  } catch (err) {
    res.status(500).json(err);
  }
});

//   This allows you to delete workouts
router.delete('/delete/:id', withAuth, async (req, res) => {
  try {

    const exerciseDelete = await Exercise.destroy({
      where: {
        workout_id: req.params.id,
      }
    });
    res.status(200).json(exerciseDelete);
    const workoutDelete = await Workout.destroy({
      where: {
        id: req.params.id,
       
      }
    });

    res.status(200).json(workoutDelete);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;