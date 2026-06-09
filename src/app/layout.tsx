import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils/utils';

const nunito = Nunito({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: 'Restaurant App',
    template: '%s | Restaurant App',
  },
  description: 'Food ordering application',
};
type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang='en'
      className={cn('h-full', 'antialiased', 'font-sans', nunito.variable)}
    >
      <body
        className={cn(
          'min-h-screen',
          'bg-background',
          'text-foreground',
          'flex flex-col'
        )}
      >
        {children}
      </body>
    </html>
  );
}
