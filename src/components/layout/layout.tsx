import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${inter.className} min-h-screen bg-black text-white`}>
      {/* Navigation will go here later */}
      <main>{children}</main>
      {/* Footer will go here later */}
    </div>
  );
}
