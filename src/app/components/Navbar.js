"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar({
  onOpenAuth,
  currentUser,
  onLogout,
  cartCount = 0,
}) {
  const [userDropdown, setUserDropdown] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">

          {/* Brand + Location */}
          <div className="flex items-center gap-6">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-3xl group-hover:rotate-12 transition-transform duration-300">
                🔥
              </span>

              <span className="text-2xl font-black tracking-tight text-neutral-900">
                Foodi<span className="text-orange-600">Verse</span>
              </span>
            </Link>

            {/* Location */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full cursor-pointer hover:border-orange-500 transition">
              <span className="text-orange-600">📍</span>
              <span className="truncate max-w-[150px]">
                Sector 62, Noida
              </span>
              <span className="text-gray-400">⌄</span>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for biryani, pizza, burgers..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm transition"
              />

              <svg
                className="w-4 h-4 text-gray-400 absolute left-4 top-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4 sm:gap-6">

            {/* Offers */}
            <Link
              href="#offers"
              className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-gray-700 hover:text-orange-600 transition"
            >
              <span>🏷️</span>
              <span>Offers</span>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex items-center gap-2 bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 rounded-full font-bold text-sm transition active:scale-95"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>

              <span className="hidden sm:inline">Cart</span>

              {cartCount > 0 && (
                <span className="bg-orange-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-black">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Authentication */}
            {currentUser ? (
              <div className="relative">

                <button
                  onClick={() => setUserDropdown(!userDropdown)}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 p-1.5 pr-3 rounded-full transition"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center text-sm">
                    {currentUser.name?.charAt(0).toUpperCase()}
                  </div>

                  <span className="text-xs font-bold text-gray-800 hidden sm:inline">
                    {currentUser.name?.split(" ")[0]}
                  </span>

                  <span className="text-gray-400 text-xs">⌄</span>
                </button>

                {userDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">

                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-xs text-gray-400">
                        Signed in as
                      </p>

                      <p className="text-xs font-bold text-gray-800 truncate">
                        {currentUser.email}
                      </p>
                    </div>

                    <Link
                      href="/my-orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-medium"
                    >
                      📦 My Orders
                    </Link>

                    {currentUser.role === "ADMIN" && (
                      <Link
                        href="/admin"
                        className="block px-4 py-2 text-sm text-purple-600 hover:bg-purple-50 font-bold"
                      >
                        🛡️ Admin Panel
                      </Link>
                    )}

                    <button
                      onClick={() => {
                        onLogout();
                        setUserDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium"
                    >
                      🚪 Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="bg-neutral-900 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold text-sm transition active:scale-95"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}