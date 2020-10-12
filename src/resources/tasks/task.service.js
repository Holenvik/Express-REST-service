const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getAllByUserId = userId => tasksRepo.getAllByUserId(userId);

const getAllByBoardId = boardId => tasksRepo.getAllByBoardId(boardId);

const getByIds = (boardId, taskId) => tasksRepo.getByIds(boardId, taskId);

const create = (boardId, fields) => {
  const task = new Task({ ...fields, boardId });

  return tasksRepo.create(task);
};

const update = (boardId, id, boardFields) => {
  const task = new Task({ ...boardFields, id, boardId });

  return tasksRepo.update(task);
};

const deleteByIds = (boardId, id) => {
  return tasksRepo.deleteByIds({ boardId, id });
};

const clearUserId = async userId => {
  const tasks = await getAllByUserId(userId);

  return tasks.forEach(task => {
    task.userId = null;
  });
};

const deleteTasksByBoardId = boardId => {
  return tasksRepo.deleteTasksByBoardId(boardId);
};

const deleteTasksByUserId = userId => {
  return tasksRepo.deleteTasksByUserId(userId);
};

module.exports = {
  create,
  update,
  getAllByBoardId,
  getByIds,
  deleteByIds,
  getAllByUserId,
  clearUserId,
  deleteTasksByBoardId,
  deleteTasksByUserId
};
