const uuid = require('uuid');
const tasksService = require('../tasks/task.service');

let boards = [];

const getAllBoards = async () => boards;

const createBoard = async board => {
  const createdBoard = {
    ...board,
    id: uuid(),
    columns: board.columns.map(column => ({ ...column, id: uuid() }))
  };

  boards.push(createdBoard);

  return createdBoard;
};

const findBoard = async id => boards.find(board => board.id === id);

const editBoard = async board => {
  const foundBoardIndex = boards.findIndex(
    currentBoard => board.id === currentBoard.id
  );
  boards[foundBoardIndex] = board;
};

const deleteBoard = async id => {
  const filteredBoards = boards.filter(board => board.id !== id);
  await tasksService.deleteTasksByBoardId(id);
  boards = filteredBoards;
};

module.exports = {
  getAllBoards,
  createBoard,
  findBoard,
  editBoard,
  deleteBoard
};
