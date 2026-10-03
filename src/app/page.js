'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import AuthModal from '@/components/AuthModal';

export default function Home() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* 1. Navbar */}
      <Navbar
        onOpenAuth={() => setIsAuthOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
        cartCount={cartCount}
      />

      {/* 2. Hero Section Placeholder */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900">
          Professional Food Architecture 
        </h1>
        <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-xl mx-auto">
          Top-right corner me <b>Sign In</b> button par click karke Login/Signup Modal check karein!
        </p>
      </div>

      {/* 3. Auth Modal Popup */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </main>
  );
}