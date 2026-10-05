'use client';

import { useState } from 'react';

export default function AuthModal({
  isOpen,
  onClose,
  onLoginSuccess,
}) {
  const [isLoginTab, setIsLoginTab] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Modal open nahi hai
  if (!isOpen) {
    return null;
  }

  // Input handle
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError('');
  };

  // Login / Signup
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');

    try {
      /*
        Future Backend API:

        const endpoint = isLoginTab
          ? `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`
          : `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`;

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Authentication failed');
        }

        onLoginSuccess(data.user);
        onClose();
      */

      // Temporary mock authentication
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockUser = {
        name: formData.name || 'Rahul Sharma',
        email: formData.emailOrPhone,
        role: 'USER',
      };

      onLoginSuccess(mockUser);
      onClose();

    } catch (err) {
      setError(
        err.message || 'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  // Login tab
  const handleLoginTab = () => {
    setIsLoginTab(true);
    setError('');
  };

  // Signup tab
  const handleSignupTab = () => {
    setIsLoginTab(false);
    setError('');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-orange-100">

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition"
          aria-label="Close"
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
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Brand */}
        <div className="text-center mb-6">

          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-50 mb-3">
            <span className="text-3xl">🍴</span>
          </div>

          <h2 className="text-2xl font-black text-neutral-900">
            Foodi
            <span className="text-[#FF5A1F]">
              Verse
            </span>
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            {isLoginTab
              ? 'Login to manage your orders & profile'
              : 'Create an account and get ₹100 off on your first order!'
            }
          </p>

        </div>

        {/* Login / Signup Tabs */}
        <div className="flex bg-orange-50 p-1 rounded-2xl mb-6">

          <button
            type="button"
            onClick={handleLoginTab}
            className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition ${
              isLoginTab
                ? 'bg-white text-[#FF5A1F] shadow-sm'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Login
          </button>

          <button
            type="button"
            onClick={handleSignupTab}
            className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition ${
              !isLoginTab
                ? 'bg-white text-[#FF5A1F] shadow-sm'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Sign Up
          </button>

        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          {!isLoginTab && (
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Rahul Sharma"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A1F] focus:border-transparent transition"
              />
            </div>
          )}

          {/* Email / Phone */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
              Email or Phone Number
            </label>

            <input
              type="text"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              placeholder="rahul@gmail.com / 9876543210"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A1F] focus:border-transparent transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A1F] focus:border-transparent transition"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-2xl bg-[#FF5A1F] hover:bg-[#E94D17] text-white font-bold transition shadow-md shadow-orange-500/20 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading
              ? 'Processing...'
              : isLoginTab
                ? 'Continue to Order'
                : 'Create Free Account'
            }
          </button>

        </form>

        {/* Divider */}
        <div className="relative my-6">

          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>

          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-xs text-gray-400 font-medium uppercase">
              Or continue with
            </span>
          </div>

        </div>

        {/* Google Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-2xl hover:bg-gray-50 transition text-sm font-semibold text-gray-700"
        >

          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />

            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />

            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />

            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>

          Continue with Google

        </button>

      </div>
    </div>
  );
}