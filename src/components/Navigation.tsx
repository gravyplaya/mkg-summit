'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/about', label: 'About the Summit' },
  { href: '/contact', label: 'Contact/Volunteer' },
];

interface NavigationProps {
  title?: string;
}

export default function Navigation({ title }: NavigationProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const eventName = title || 'Innovators Summit';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#001133]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <svg
              width="40"
              height="32"
              viewBox="0 0 235 192"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-auto"
            >
              <path d="M60 131.505V60.0005C78.1077 60.0005 92.7868 74.6797 92.7868 92.7873V131.505H60Z" fill="#0048E5" />
              <path d="M100.86 131.505V60.0005C119.059 60.0005 133.811 74.7534 133.811 92.9521V131.505H100.86Z" fill="#3DD1CC" />
              <path d="M141.885 131.505V60.0005C160.083 60.0005 174.836 74.7534 174.836 92.9521V131.505H141.885Z" fill="#FFB703" />
            </svg>
            <span className="text-white font-bold text-lg hidden sm:block">{eventName}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === link.href
                  ? 'bg-[#FFB703] text-[#001133]'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === link.href
                    ? 'bg-[#FFB703] text-[#001133]'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
