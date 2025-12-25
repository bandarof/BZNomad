import './globals.css';
import { builder } from '@builder.io/sdk';
builder.init('2fcfe1b955134aacad7b3c67770584fe');
export const metadata = { title: 'Builder.io App' };
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
