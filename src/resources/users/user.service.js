const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const createNew = (name, login, password) =>
  usersRepo.createNew({ name, login, password });

const findUser = id => usersRepo.findUser(id);

const editUser = userInfo => usersRepo.editUser(userInfo);

const deleteUser = id => usersRepo.deleteUser(id);

module.exports = { getAll, createNew, findUser, editUser, deleteUser };
