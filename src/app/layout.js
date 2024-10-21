// src/app/layout.js

import React from 'react';
import { WalletProvider } from './hooks/WalletContext'; // Импортируйте провайдер
import Header from "./components/Header";
import Footer from "./components/Footer";
import './globals.scss';

const RootLayout = ({ children }) => {
  return (
    <WalletProvider>
      <html lang="ru">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </WalletProvider>
  );
};

export default RootLayout;
