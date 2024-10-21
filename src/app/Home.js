// src/app/Home.js

"use client"; // Пометить как клиентский компонент

import React from "react";
import { useWalletContext } from "./hooks/WalletContext";
import styles from "./page.module.scss";

const Home = () => {
  const { walletAddress, balance, handleInputChange, handleConnectWallet } =
    useWalletContext();

  return (
    <div className={styles.page}>
      <main className={styles.walletAddress}>
        {walletAddress ? (
          <>
            <p className={styles.walletAddressLabel}>Ваш адрес кошелька:</p>
            <p className={styles.walletAddressValue}>{walletAddress}</p>
          </>
        ) : (
          <p className={styles.walletAddressNone}>
            <span>Нет привязанных кошельков</span>
            <span>
              Чтобы привязать кошелек, нажмите на кнопку "Привязать кошелек"
            </span>
          </p>
        )}
      </main>
    </div>
  );
};

export default Home;
