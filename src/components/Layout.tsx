import React from 'react';
import { Header } from '@/components/Header';
import { MadeWithApplaa } from '@/components/made-with-applaa';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <MadeWithApplaa />
    </div>
  );
}