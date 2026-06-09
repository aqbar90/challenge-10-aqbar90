import type { Metadata } from 'next';
import './globals.css';
import Providers from '../providers/Providers';
export const metadata: Metadata = {
  title: 'Restaurant App',
  description: 'Restaurant Ordering Application',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
