let tasks = [];

const getAllByBoardId = async boardId => {
  return tasks.filter(task => task.boardId === boardId);
};

const getAllByUserId = async userId => {
  return tasks.filter(task => task.userId === userId);
};

const getByIds = async (boardId, taskId) => {
  return tasks.find(task => task.id === taskId && task.boardId === boardId);
};

const create = async task => {
  tasks.push(task);

  return task;
};

const update = async task => {
  const updatedTask = await getByIds(task.boardId, task.id);

  if (!!updatedTask) {
    updatedTask.setTitle(task.title);
    updatedTask.setOrder(task.order);
    updatedTask.setDescription(task.description);
  }

  return updatedTask;
};

const deleteByIds = async ({ boardId, id = null }) => {
  const filteredTasks = tasks
    .filter(task => task.boardId !== boardId)
    .filter(task => task.id !== id);

  tasks = filteredTasks;

  return tasks;
};

const deleteTasksByBoardId = async boardId => {
  const filteredTasks = tasks.filter(task => task.boardId !== boardId);
  tasks = filteredTasks;
  return filteredTasks;
};

const deleteTasksByUserId = async userId => {
  const filteredTasks = tasks.map(task =>
    task.userId === userId ? { ...task, userId: null } : task
  );
  tasks = filteredTasks;
  return filteredTasks;
};

module.exports = {
  getAllByUserId,
  getAllByBoardId,
  getByIds,
  create,
  update,
  deleteByIds,
  deleteTasksByBoardId,
  deleteTasksByUserId
};
