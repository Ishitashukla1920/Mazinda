"use client";
import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import WalletTable from "../components/WalletTable";
import axios from '../services/api';
const express = require('express');
const cors = require('cors');

const app = express(); // Initialize the app

app.use(cors()); 

const Wallet = () => {
  const [wallet, setWallet] = useState(null);
  const userId = 2; // Replace with actual user ID from login session

  const fetchWallet = async () => {
    try {
      const { data } = await axios.get(`/wallet/get/${userId}`);
      setWallet(data);
    } catch (error) {
      console.error('Error fetching wallet:', error.response?.data || error.message);
    }
  };

  const toggleFreezeWallet = async () => {
    try {
      const action = wallet.isFrozen ? 'unfreeze' : 'freeze';
      const { data } = await axios.post(`/wallet/${action}`, { userId });
      setWallet((prev) => ({ ...prev, isFrozen: !prev.isFrozen }));
      alert(data.message);
    } catch (error) {
      console.error('Error toggling freeze:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchWallet();
  }, []);

  if (!wallet) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <h2>Wallet</h2>
      <p>Balance: ${wallet.balance}</p>
      <p>Status: {wallet.isFrozen ? 'Frozen' : 'Active'}</p>
      <button onClick={toggleFreezeWallet}>
        {wallet.isFrozen ? 'Unfreeze Wallet' : 'Freeze Wallet'}
      </button>
    </div>
  );
};

export default Wallet;
