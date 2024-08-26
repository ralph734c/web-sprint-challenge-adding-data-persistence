const db = require('../../data/dbConfig');
// build your `Task` model here

function findTasks() {
  return db('tasks');
}

function findTaskById(task_id) {
  return db('tasks').where('task_id', task_id).first();
}

async function addTask(task) {
  const [id] = await db('tasks').insert(task);
  return findTaskById(id);
}

module.exports = {
  findTasks,
  findTaskById,
  addTask,
};