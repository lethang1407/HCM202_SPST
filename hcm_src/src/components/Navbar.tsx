import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenVirtualTour: () => void;
}

export default function Navbar({ onOpenVirtualTour }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Tuổi trẻ & Hành trình', path: '/tuoi-tre-va-hanh-trinh' },
    { label: 'Hoạt động cách mạng', path: '/hoat-dong-cach-mang' },
    { label: 'Các giai đoạn lịch sử', path: '/cac-giai-doan-lich-su' },
    { label: 'Kho Tư Liệu', path: '/kho-tu-lieu' },
    { label: 'Tư Tưởng Hồ Chí Minh', path: '/tu-tuong-ho-chi-minh' },
    { label: 'Giá Trị Hiện Nay', path: '/gia-tri-hien-nay' },
    { label: 'Quiz', path: '/quiz' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        id="top-nav"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 py-3 shadow-md glass-nav border-b border-gray-100'
            : 'bg-white/90 py-4 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 cursor-pointer group"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-full bg-primary-red/10 flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-primary-red font-semibold">
                star
              </span>
            </div>

            <span className="font-display font-bold text-lg md:text-xl text-primary-red tracking-tight">
              Hành Trình Hồ Chí Minh
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-sans text-xs md:text-sm font-semibold transition-all cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary-red after:transition-all ${
                    isActive
                      ? 'text-primary-red after:w-full'
                      : 'text-gray-700 hover:text-primary-red after:w-0 hover:after:w-full'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white z-[70] shadow-2xl transform transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-red/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary-red">
                star
              </span>
            </div>

            <span className="font-bold text-primary-red">
              Hành Trình Hồ Chí Minh
            </span>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer Menu */}
        <div className="py-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-6 py-4 text-sm font-medium transition-all border-l-4 ${
                  isActive
                    ? 'border-primary-red bg-red-50 text-primary-red'
                    : 'border-transparent text-gray-700 hover:bg-gray-50 hover:text-primary-red'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
