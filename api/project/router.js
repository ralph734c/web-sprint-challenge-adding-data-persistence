// build your `/api/projects` router here
const projectsModel = require('../project/model');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    console.log(`The ${req.method} to ${req.originalUrl} is working!`);
    const allProjects = await projectsModel.findProjects();
    res.json(allProjects);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    console.log(`The ${req.method} to ${req.originalUrl} is working!`);
    const newProject = await projectsModel.addProject(req.body);
    res.status(201).json(newProject);
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
