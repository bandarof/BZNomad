import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Builder.io App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Load debug script */}
        <Script src="/builder-debug.js" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  );
}
