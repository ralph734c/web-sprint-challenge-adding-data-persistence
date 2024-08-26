const db = require('../../data/dbConfig');
// build your `Resource` model here

function findResources() {
  return db('resources');
}

function findResourceById(resource_id) {
  return db('resources').where('resource_id', resource_id).first();
}

async function addResource(resource) {
  const [id] = await db('resources').insert(resource);
  return findResourceById(id);
}

module.exports = {
  findResources,
  findResourceById,
  addResource,
};