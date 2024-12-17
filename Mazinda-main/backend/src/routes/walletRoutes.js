const express = require('express');
const router = express.Router();
const { getWallet, createWallet } = require('../controllers/walletController');

// Route to get wallet by userId
router.get('/get/:userId', getWallet);


// Route to create a new wallet for a user
router.post('/create', createWallet);

module.exports = router;
