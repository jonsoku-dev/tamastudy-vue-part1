const express = require('express');
const {
  getMeHandler,
  registerHandler,
  loginHandler,
  deleteUserHandler,
} = require('../controllers/user.controller');
const isAuthenticated = require('../middlewares/isAuthenticated.middleware');

const router = express.Router();

router.get('/me', isAuthenticated, getMeHandler);
router.post('/register', registerHandler);
router.post('/login', loginHandler);
router.post('/delete', isAuthenticated, deleteUserHandler);

module.exports = router;
