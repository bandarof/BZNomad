import './globals.css';
import { builder } from '../lib/builder-init';

// Builder is already initialized in builder-init.js
// This ensures the same instance is used everywhere

export const metadata = {
  title: 'Builder.io App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
