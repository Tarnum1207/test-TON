"use client";

import styles from "./Footer.module.scss";
import { usePathname } from 'next/navigation';
import { useWalletContext } from '@/app/hooks/WalletContext';
import Link from 'next/link';  // Импорт Link из next/link

const Footer = () => {
  const pathname = usePathname();
  const { walletAddress } = useWalletContext();

  return (
    <footer className={styles.footer}>
      {pathname !== '/transactions' && (
        <Link href={pathname === '/transactions' ? '/' : '/transactions'} className="button">
          {pathname === '/transactions' ? 'На главную' : 'К транзакциям'}
        </Link>
      )}
      {pathname === '/transactions' && walletAddress && (
        <p className='walletAddressValue'>{walletAddress}</p>
      )}
    </footer>
  );
};

export default Footer;
