import { Inter } from 'next/font/google';

import Default from '../templates/Default';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Anunx',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Default>
          {children}
        </Default>
      </body>
    </html>
  );
}
