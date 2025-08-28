interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <main className="w-full">{children}</main>
    </div>
  );
}
