"use client";
import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState(0);

  const fetchTransactions = async () => {
    try {
      const { data } = await axios.get('/transactions');
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error.response?.data || error.message);
    }
  };

  const addTransaction = async () => {
    try {
      const { data } = await axios.post('/transactions', { amount });
      setTransactions((prev) => [...prev, data]);
      setAmount(0);
    } catch (error) {
      console.error('Error adding transaction:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
      <button onClick={addTransaction}>Add Transaction</button>
      <ul>
        {transactions.map((txn, index) => (
          <li key={index}>Amount: ${txn.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
