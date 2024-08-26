// build your `/api/tasks` router here
const tasksModel = require('../task/model');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    console.log(`The ${req.method} to ${req.originalUrl} is working!`);
    const tasks = await tasksModel.findTasks();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    console.log(`The ${req.method} to ${req.originalUrl} is working!`);
    const newTask = await tasksModel.addTask(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
