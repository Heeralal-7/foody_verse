'use client';

import { useState } from 'react';

import Navbar from '@/app/components/Navbar';
import AuthModal from '@/app/components/AuthModal';

export default function Home() {

  // ================================
  // AUTH MODAL STATE
  // ================================

  const [isAuthOpen, setIsAuthOpen] = useState(false);


  // ================================
  // CURRENT USER STATE
  // ================================

  const [currentUser, setCurrentUser] = useState(null);


  // ================================
  // CART STATE
  // ================================

  const [cartCount, setCartCount] = useState(0);


  // ================================
  // LOGIN SUCCESS
  // ================================

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
  };


  // ================================
  // LOGOUT
  // ================================

  const handleLogout = () => {
    setCurrentUser(null);
  };


  return (
    <main className="min-h-screen bg-[#FFF7ED]">

      {/* ================================
          NAVBAR
      ================================= */}

      <Navbar
        onOpenAuth={() => setIsAuthOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
        cartCount={cartCount}
      />


      {/* ================================
          TEMPORARY HOME CONTENT
      ================================= */}

      <section className="
        min-h-[calc(100vh-80px)]
        flex
        items-center
        justify-center
        px-6
      ">

        <div className="text-center max-w-3xl">

          {/* Food Icon */}

          <div className="
            inline-flex
            items-center
            justify-center
            w-20
            h-20
            rounded-3xl
            bg-white
            shadow-sm
            border
            border-orange-100
            mb-6
          ">
            <span className="text-5xl">
              🍴
            </span>
          </div>


          {/* Heading */}

          <h1 className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-black
            tracking-tight
            text-neutral-900
          ">
            Delicious food.
            <br />

            <span className="text-[#FF5A1F]">
              Delivered with love.
            </span>
          </h1>


          {/* Description */}

          <p className="
            mt-5
            text-gray-600
            text-base
            sm:text-lg
            max-w-xl
            mx-auto
          ">
            Discover your favourite meals, explore new flavours,
            and get delicious food delivered right to your doorstep.
          </p>


          {/* Buttons */}

          <div className="
            mt-8
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-3
          ">

            <button
              className="
                px-7
                py-3.5
                bg-[#FF5A1F]
                hover:bg-[#E94D17]
                text-white
                rounded-full
                font-bold
                shadow-lg
                shadow-orange-500/20
                transition
                active:scale-95
              "
            >
              Explore Food 🍕
            </button>

            <button
              className="
                px-7
                py-3.5
                bg-white
                hover:bg-orange-50
                text-neutral-900
                border
                border-orange-100
                rounded-full
                font-bold
                transition
                active:scale-95
              "
            >
              View Offers 🏷️
            </button>

          </div>

        </div>

      </section>


      {/* ================================
          AUTH MODAL
      ================================= */}

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

    </main>
  );
}