// src/app/hooks/WalletContext.js

"use client"; // Добавьте эту строку, чтобы пометить файл как клиентский

import React, { createContext, useContext, useState, useEffect } from 'react';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const savedAddress = localStorage.getItem("walletAddress");
    if (savedAddress) {
      setWalletAddress(savedAddress);
      fetchBalance(savedAddress);
    }
  }, []);

  const handleInputChange = (e) => {
    const address = e.target.value.trim();
    setWalletAddress(address);
    localStorage.setItem("walletAddress", address);
  };

  const handleConnectWallet = async () => {
    if (walletAddress.length > 3) {
      await fetchBalance(walletAddress);
    } else {
      console.error("Пожалуйста, введите корректный адрес кошелька");
    }
  };

  const handleRemoveWallet = () => {
    localStorage.removeItem("walletAddress");
    setWalletAddress("");
    setBalance(null);
  };

  const fetchBalance = async (address) => {
    try {
      const response = await fetch(
        `https://toncenter.com/api/v2/getAddressInformation?address=${address}`
      );
      const data = await response.json();
      if (data && data.result) {
        setBalance(data.result.balance / 1e9);
      } else {
        console.error("Не удалось получить баланс:", data);
      }
    } catch (error) {
      console.error("Ошибка при получении баланса:", error);
    }
  };

  return (
    <WalletContext.Provider value={{
      walletAddress,
      balance,
      handleInputChange,
      handleConnectWallet,
      handleRemoveWallet
    }}>
      {children}
    </WalletContext.Provider>
  );
};

// Хук для использования контекста
export const useWalletContext = () => {
  return useContext(WalletContext);
};
