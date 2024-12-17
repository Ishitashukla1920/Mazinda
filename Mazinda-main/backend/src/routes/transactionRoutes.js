const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction } = require('../controllers/transactionController');

// Get all transactions for a wallet
router.get('/:walletId', getTransactions);

// Add a new transaction
router.post('/', addTransaction);

module.exports = router;
