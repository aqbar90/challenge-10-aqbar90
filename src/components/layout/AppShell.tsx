import { Navbar } from './Navbar';

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar />

      <main>{children}</main>
    </div>
  );
}
