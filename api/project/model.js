const db = require('../../data/dbConfig');
// build your `Project` model here

async function findProjects() {
  const projects = await db('projects');
  return projects.map((project) => ({
    ...project,
    project_completed: Boolean(project.project_completed),
  }));
}

async function findProjectById(project_id) {
  const specificProject = await db('projects')
    .where('project_id', project_id)
    .first();

  return {
    ...specificProject,
    project_completed: Boolean(specificProject.project_completed),
  };
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
