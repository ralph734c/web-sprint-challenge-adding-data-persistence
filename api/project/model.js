const db = require('../../data/dbConfig');
// build your `Project` model here

function findProjects() {
  return db('projects');
}

function findProjectById(project_id) {
  return db('projects').where('project_id', project_id).first();
}

async function addProject(project) {
  const [id] = await db('projects').insert(project);
  return findProjectById(id);
}

module.exports = {
  findProjects,
  findProjectById,
  addProject,
};
