// build your `/api/resources` router here
const resourcesModel = require('../resource/model');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    console.log(`The ${req.method} to ${req.originalUrl} is working!`);
    const allResources = await resourcesModel.findResources();
    res.json(allResources);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    console.log(`The ${req.method} to ${req.originalUrl} is working!`);
    const newResource = await resourcesModel.addResource(req.body);
    res.status(201).json(newResource);
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
