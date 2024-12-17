const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all transactions for a wallet
exports.getTransactions = async (req, res) => {
  const { walletId } = req.params;

  try {
    const transactions = await prisma.transaction.findMany({
      where: { walletId: parseInt(walletId) }, // Ensure walletId is a number
      orderBy: { createdAt: 'desc' }, // Optional: Order by most recent
    });

    res.status(200).json({ success: true, data: transactions });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch transactions' });
  }
};

// Add a new transaction
exports.addTransaction = async (req, res) => {
  const { walletId, amount, type } = req.body; // `type` could be 'credit' or 'debit'

  try {
    // Ensure the wallet exists
    const wallet = await prisma.wallet.findUnique({
      where: { id: parseInt(walletId) },
    });

    if (!wallet) {
      return res.status(404).json({ success: false, message: 'Wallet not found' });
    }

    // Add the transaction
    const transaction = await prisma.transaction.create({
      data: {
        walletId: parseInt(walletId),
        amount,
        type,
      },
    });

    // Update wallet balance
    const updatedBalance =
      type === 'credit'
        ? wallet.balance + amount
        : wallet.balance - amount;

    await prisma.wallet.update({
      where: { id: parseInt(walletId) },
      data: { balance: updatedBalance },
    });

    res.status(201).json({ success: true, data: transaction });
  } catch (error) {
    console.error('Error adding transaction:', error);
    res.status(500).json({ success: false, message: 'Failed to add transaction' });
  }
};
