const router = require('express').Router();
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAllBoards();
  res.json(boards);
});

router.route('/').post(async (req, res) => {
  const { title, columns } = req.body;

  if (!title || !columns) {
    return res.sendStatus(400);
  }

  const board = await boardService.createBoard(req.body);

  res.status(200).send(board);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardService.findBoard(req.params.id);
  res.status(200).send(board || {});
});

router.route('/:id').put(async (req, res) => {
  const board = await boardService.findBoard(req.params.id);

  if (board) {
    const updatedBoard = { ...req.body, id: req.params.id };

    await boardService.editBoard(updatedBoard);
    res.status(200).send(updatedBoard);
  } else {
    res.sendStatus(400);
  }
});

router.route('/:id').delete(async (req, res) => {
  console.log(req.params.id);
  const board = await boardService.findBoard(req.params.id);
  console.log('______________FOUNDBOARD______________');
  console.log(board);
  if (board) {
    await boardService.deleteBoard(req.params.id);
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
