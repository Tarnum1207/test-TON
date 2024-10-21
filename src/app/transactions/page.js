"use client";
import { useRef, useState } from "react";
import styles from "./Transactions.module.scss";
import { useWalletContext } from "@/app/hooks/WalletContext";
import sendTon from "@/app/images/send.svg";
import { Toast } from "primereact/toast";
import { showToastWarn, showToastSuccess } from "./utils/showToast";
import 'primereact/resources/themes/saga-blue/theme.css';  // или другая тема
import 'primereact/resources/primereact.min.css';

export default function Transactions() {
  const { walletAddress, balance } = useWalletContext();
  const toast = useRef(null);
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState('');

  const sendTransaction = () => {
    if (recipientAddress && amount && walletAddress) {
      if (amount <= 0) {
        toast.current.show(showToastWarn('Ошибка!', 'Сумма должна быть больше 0', 5000));
      } else if (amount > balance) {
        toast.current.show(showToastWarn('Ошибка!', 'Недостаточно средств на кошельке', 5000));
      } else {
        toast.current.show(showToastSuccess(`Успешно!`, `Отправлено ${amount} TON на кошелек ${recipientAddress}`, 5000));
      }
    } else {
      toast.current.show(showToastWarn('Ошибка!', 'Пожалуйста, заполните все поля', 5000));
    }
  };

  return (
    <>
      <Toast ref={toast} className="p-toast p-toast-topright" />
      <div className={[styles.page, styles.transactions].join(" ")}>
        <div className={styles.transactionsItem}>
          <span className="walletAddressLabel">Перевод с кошелька</span>
          <p className="walletAddressValue">{walletAddress}</p>
        </div>
        <div className={styles.transactionsTonValue}>
          <input min={0.000001} placeholder={balance} type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <p>TON</p>
        </div>
        <div className={styles.transactionsItem}>
          <span className="walletAddressLabel">На кошелек</span>
          <input
            placeholder="Введите адрес кошелька..."
            className="walletAddressValue"
            type="text"
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value)}
          />
        </div>
        <div className={styles.transactionsButtonWrapper}>
          <button onClick={sendTransaction}>
            <img src={sendTon.src} alt="send" />
            Отправить
          </button>
        </div>
      </div>
    </>
  );
}