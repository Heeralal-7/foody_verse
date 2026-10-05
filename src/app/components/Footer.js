"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faFacebookF,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import {
  faApple,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 group"
            >
              <span className="text-3xl group-hover:rotate-12 transition-transform duration-300">
                🔥
              </span>

              <span className="text-2xl font-black tracking-tight">
                Foodi<span className="text-orange-500">Verse</span>
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-6 mt-5 max-w-xs">
              Discover delicious food from your favorite restaurants and
              get it delivered straight to your doorstep.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-4 h-4"
                />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="w-4 h-4"
                />
              </a>

              <a
                href="#"
                aria-label="X"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="w-4 h-4"
                />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="w-4 h-4"
                />
              </a>

            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-orange-500 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/careers"
                  className="text-sm text-gray-400 hover:text-orange-500 transition"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-400 hover:text-orange-500 transition"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-orange-500 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5">
              Explore
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/restaurants"
                  className="text-sm text-gray-400 hover:text-orange-500 transition"
                >
                  Restaurants
                </Link>
              </li>

              <li>
                <Link
                  href="/menu"
                  className="text-sm text-gray-400 hover:text-orange-500 transition"
                >
                  Food Menu
                </Link>
              </li>

              <li>
                <Link
                  href="/offers"
                  className="text-sm text-gray-400 hover:text-orange-500 transition"
                >
                  Offers & Deals
                </Link>
              </li>

              <li>
                <Link
                  href="/popular"
                  className="text-sm text-gray-400 hover:text-orange-500 transition"
                >
                  Popular Food
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5">
              Support
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/help"
                  className="text-sm text-gray-400 hover:text-orange-500 transition"
                >
                  Help & Support
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-400 hover:text-orange-500 transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-400 hover:text-orange-500 transition"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/refund"
                  className="text-sm text-gray-400 hover:text-orange-500 transition"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* App Download */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-orange-600 to-orange-500 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <p className="text-orange-100 text-xs font-bold uppercase tracking-wider">
              Coming Soon
            </p>

            <h3 className="text-2xl font-black mt-1">
              Get the FoodiVerse App
            </h3>

            <p className="text-orange-100 text-sm mt-2">
              Faster ordering, exclusive deals and delicious food.
            </p>
          </div>

          <div className="flex gap-3">

            <button
              type="button"
              className="bg-black text-white px-5 py-3 rounded-xl text-sm font-bold hover:bg-neutral-900 transition flex items-center gap-2"
            >
              <FontAwesomeIcon
                icon={faApple}
                className="w-5 h-5"
              />
              App Store
            </button>

            <button
              type="button"
              className="bg-black text-white px-5 py-3 rounded-xl text-sm font-bold hover:bg-neutral-900 transition flex items-center gap-2"
            >
              <FontAwesomeIcon
                icon={faGooglePlay}
                className="w-4 h-4"
              />
              Google Play
            </button>

          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} FoodiVerse. All rights reserved.
          </p>

          <p className="text-xs text-gray-500">
            Made with love for food lovers
          </p>

        </div>
      </div>
    </footer>
  );
}