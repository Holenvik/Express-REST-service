const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/:boardId/tasks').get(async (req, res) => {
  const tasks = await tasksService.getAllByBoardId(req.params.boardId);

  res.status(200).json(tasks.map(Task.toResponse));
});

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  const task = await tasksService.getByIds(
    req.params.boardId,
    req.params.taskId
  );
  let status = 200;

  if (!task) {
    status = 404;
  }

  res.status(status).json(Task.toResponse(task));
});

router.route('/:boardId/tasks/').post(async (req, res) => {
  const task = await tasksService.create(req.params.boardId, req.body);

  res.status(200).json(Task.toResponse(task));
});

router.route('/:boardId/tasks/:id').put(async (req, res) => {
  const task = await tasksService.update(
    req.params.boardId,
    req.params.id,
    req.body
  );

  res.status(200).json(Task.toResponse(task));
});

router.route('/:boardId/tasks/:id').delete(async (req, res) => {
  const tasks = await tasksService.deleteByIds(
    req.params.boardId,
    req.params.id
  );

  res.status(200).json(tasks.map(Task.toResponse));
});

module.exports = router;
