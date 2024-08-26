const db = require('../../data/dbConfig');
// build your `Task` model here

async function findTasks() {
  const tasks = await db('tasks as tk')
    .leftJoin('projects as pj', 'tk.project_id', 'pj.project_id')
    .select('tk.*', 'pj.project_name', 'pj.project_description');

  return tasks.map((task) => {
    const { project_id, ...taskWithoutProjectId } = task; // eslint-disable-line
    return {
      ...taskWithoutProjectId,
      task_completed: Boolean(task.task_completed),
    };
  });
}

async function findTaskById(task_id) {
  const specificTask = await db('tasks').where('task_id', task_id).first();

  return {
    ...specificTask,
    task_completed: Boolean(specificTask.task_completed),
  };
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
