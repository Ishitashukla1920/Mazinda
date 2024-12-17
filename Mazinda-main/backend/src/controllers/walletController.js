const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get Wallet by user ID
const getWallet = async (req, res) => {
  const { userId } = req.params;

  try {
    // Parse userId as an integer
    const parsedUserId = parseInt(userId);

    if (isNaN(parsedUserId)) {
      return res.status(400).json({ success: false, message: "Invalid userId" });
    }

    const wallet = await prisma.wallet.findFirst({
      where: {
        userId: parsedUserId,
      },
    });

    if (!wallet) {
      return res.status(404).json({ success: false, message: "Wallet not found" });
    }

    return res.status(200).json({ success: true, wallet });
  } catch (error) {
    console.error("Error fetching wallet:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// Create a new wallet for a user (if not existing)
const createWallet = async (req, res) => {
  const { userId, currency } = req.body; // Ensure userId is passed

  try {
    const existingWallet = await prisma.wallet.findFirst({
      where: { userId: userId }
    });

    if (existingWallet) {
      return res.status(400).json({ success: false, message: "Wallet already exists" });
    }

    const wallet = await prisma.wallet.create({
      data: {
        userId: userId,
        balance: 0.0, // Set initial balance to 0
        currency: currency,
      }
    });

    return res.status(201).json({ success: true, message: "Wallet created successfully", wallet });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { getWallet, createWallet };
