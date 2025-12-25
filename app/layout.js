import './globals.css';
import './../lib/builder-init';  // This imports and runs builder.init()

export const metadata = {
  title: 'My Builder App',
  description: 'Builder.io integrated Next.js app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
