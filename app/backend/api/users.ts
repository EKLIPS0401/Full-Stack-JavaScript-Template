import * as express from 'express';
import User from '../models/user';

// sample API for User model

let router = express.Router();

// get all Users
router.get('/', (req, res) => {
  User.find().then((users) => {
    res.json(users);
  }).catch ((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// get user by ID
router.get('/:id', (req, res) => {
  User.findById(req.params.id).then ((user) => {
    res.json(user);
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// create user
router.post('/', (req, res) => {
  let user = new User();
  user.name = req.body.name;
  user.save().then((user) => {
    res.json(user)
  }).catch((err) => {
    res.json(err);
  });
});

// delete user by ID
router.delete('/:id', (req, res) => {
  let userId = req.params['id'];
  User.remove({_id: userId}).then(() => {
    res.sendStatus(200);
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

export default router;
