import { useState } from "react";
import styles from "./ImportWallet.module.scss";
import { useWalletContext } from "@/app/hooks/WalletContext";
import closeImg from "@/app/images/close.svg";

const ImportWallet = (props) => {
  const [value, setValue] = useState("");
  const { onChange, isOpened, setImportWalletOpened } = props;

  console.log(props);

  const { walletAddress, balance, handleInputChange, handleConnectWallet } =
    useWalletContext();

  return isOpened === true ? (
    <div className={styles.importWallet}>
        <button className={styles.importWalletClose} onClick={() => setImportWalletOpened(false)}>
            <img src={closeImg.src} alt="close" />
        </button>
      <textarea value={walletAddress} onInput={handleInputChange}></textarea>
      <button
        onClick={() => {
          handleConnectWallet();
          setImportWalletOpened(false)
        }}
        className={styles.importWalletButton}
      >
        Подключить
      </button>
    </div>
  ) : null;
};

export default ImportWallet;
