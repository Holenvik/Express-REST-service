const uuid = require('uuid');
const tasksService = require('../tasks/task.service');

let users = [];

const getAll = async () => {
  return users;
};
const createNew = async newUser => {
  const newUserWithId = { ...newUser, id: uuid() };
  users.push(newUserWithId);
  return newUserWithId;
};

const findUser = async id => users.find(user => user.id === id);

const editUser = async userInfo => {
  const foundUserIndex = users.findIndex(user => user.id === userInfo.id);
  users[foundUserIndex] = userInfo;
};

const deleteUser = async id => {
  const filteredUsers = users.filter(user => user.id !== id);
  await tasksService.deleteTasksByUserId(id);
  users = filteredUsers;
};

module.exports = { getAll, createNew, findUser, editUser, deleteUser };
