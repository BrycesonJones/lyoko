"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import UserAccountDropdown from "./user-account-dropdown";

interface HeaderProps {
  isLoggedIn: boolean;
}

const Header = ({ isLoggedIn }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="text-white text-2xl tracking-wider font-light lowercase">
              lyoko
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="nav-link text-gray-300 hover:text-white font-medium relative">
              About
            </Link>
            <Link href="/faq" className="nav-link text-gray-300 hover:text-white font-medium relative">
              FAQ
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/"
                  className="px-4 py-2 bg-black/40 border-[#333333] backdrop-blur-sm shadow-[0_4px_12px_rgba(0,255,0,0.1)] text-white font-medium rounded-lg hover:bg-black/60 transition"
                >
                  Home
                </Link>
                <UserAccountDropdown />
              </div>
            ) : (
              <button
                onClick={() => {
                  const event = new CustomEvent("openInquiryDrawer");
                  window.dispatchEvent(event);
                }}
                className="px-4 py-2 bg-[#00FF00] text-black font-bold rounded-lg hover:bg-opacity-90 transition"
              >
                Get Started
              </button>
            )}
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-4 py-3 space-y-2 bg-black/90 backdrop-blur-md border-t border-gray-800">
            <Link href="/about" className="block text-gray-300 hover:text-white py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/faq" className="block text-gray-300 hover:text-white py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>
            {isLoggedIn ? (
              <div className="pt-3 border-t border-gray-700 space-y-3">
                <Link href="/" className="block w-full px-4 py-2 text-center bg-black/40 border border-[#333333] backdrop-blur-sm shadow-[0_4px_12px_rgba(0,255,0,0.1)] text-white font-medium rounded-lg hover:bg-black/60 transition" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/alerts" className="block text-gray-300 hover:text-white py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Alerts
                </Link>
                <Link href="/account/manage" className="block text-gray-300 hover:text-white py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Manage Account
                </Link>
                <Link href="/account/settings" className="block text-gray-300 hover:text-white py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Settings
                </Link>
                <Link href="/account/add" className="block text-gray-300 hover:text-white py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Add Account
                </Link>
              </div>
            ) : (
              <div className="pt-3 border-t border-gray-700">
                <button
                  onClick={() => {
                    const event = new CustomEvent("openInquiryDrawer");
                    window.dispatchEvent(event);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-center bg-[#00FF00] text-black font-bold rounded-lg hover:bg-opacity-90 transition"
                >
                  Get Started
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <style dangerouslySetInnerHTML={{ __html: `
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #00FF00;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}} />
    </header>
  );
};

export default Header;
