const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const { name, login, password } = req.body;
  if (!name || !login || !password) {
    return res.sendStatus(400);
  }
  const user = await usersService.createNew(name, login, password);
  res.status(200).send(User.toResponse(user));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.findUser(req.params.id);
  res.status(200).send(user ? User.toResponse(user) : {});
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.findUser(req.params.id);

  if (user) {
    const updatedUser = { ...req.body, id: req.params.id };
    await usersService.editUser(updatedUser);
    res.status(200).send(User.toResponse(updatedUser));
  } else {
    res.sendStatus(400);
  }
});

router.route('/:id').delete(async (req, res) => {
  const user = await usersService.findUser(req.params.id);

  if (user) {
    await usersService.deleteUser(req.params.id);
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
