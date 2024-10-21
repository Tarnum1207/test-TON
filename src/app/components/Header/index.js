// src/components/Header.js

"use client"; // Пометить как клиентский компонент

import { useState } from "react";
import styles from "./Header.module.scss";
import { useWalletContext } from "@/app/hooks/WalletContext";
import ImportWallet from "../ImportWallet";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import walletIcon from "@/app/images/wallet.svg";
import back from '@/app/images/back.svg';

const Header = () => {
  const pathname = usePathname();
  const { balance, walletAddress, handleRemoveWallet } = useWalletContext();
  const [importWalletOpened, setImportWalletOpened] = useState(false);
  return (
    <header className={styles.header}>
      {walletAddress ? (
        pathname === '/transactions' ? (
          <Link href="/" className="button">
            <img src={back.src} alt="back" />
            На главную
          </Link>
        ) : (
          <button onClick={handleRemoveWallet} className="button">
            <img src={walletIcon.src} alt="wallet" />
            Отключиться от кошелька
          </button>
        )
      ) : (
        <button onClick={() => setImportWalletOpened(true)} className="button">
          <img src={walletIcon.src} alt="wallet" />
          Подключить кошелек
        </button>
      )}
      {walletAddress && <p className={styles.headerBalance}>{balance} TON</p>}
      <ImportWallet
        isOpened={importWalletOpened}
        setImportWalletOpened={setImportWalletOpened}
      />
    </header>
  );
};

export default Header;
