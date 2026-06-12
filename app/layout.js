import { Courier_Prime } from 'next/font/google';
import './globals.css';

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Bunker Editions',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={courierPrime.variable}>
      <body>{children}</body>
    </html>
  );
}
