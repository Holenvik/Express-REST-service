const boardsRepo = require('./board.memory.repository');

const getAllBoards = () => boardsRepo.getAllBoards();

const createBoard = board => boardsRepo.createBoard(board);

const findBoard = id => boardsRepo.findBoard(id);

const editBoard = board => boardsRepo.editBoard(board);

const deleteBoard = id => boardsRepo.deleteBoard(id);

module.exports = {
  getAllBoards,
  createBoard,
  findBoard,
  editBoard,
  deleteBoard
};
