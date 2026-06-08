import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Landmark, Compass, Award } from 'lucide-react';

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
    <nav
      id="top-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
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
            <span className="material-symbols-outlined text-primary-red font-semibold">star</span>
          </div>
          <span className="font-display font-bold text-lg md:text-xl text-primary-red tracking-tight">
            Hành Trình Hồ Chí Minh
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-sans text-xs md:text-sm font-semibold transition-all cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary-red after:transition-all ${isActive ? 'text-primary-red after:w-full' : 'text-gray-700 hover:text-primary-red after:w-0 hover:after:w-full'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenVirtualTour}
            className="md:hidden flex items-center justify-center p-2 rounded-full bg-primary-red/10 text-primary-red hover:bg-primary-red/20 transition-all cursor-pointer"
            title="Tham Quan Thực Tế"
          >
            <span className="material-symbols-outlined text-xl">vr_180_goggles</span>
          </button>
          <button
            id="nav-mobile-hamburger"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-700 hover:text-primary-red transition-all rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-4 animate-fadeIn">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-left py-2 font-display font-medium text-gray-700 hover:text-primary-red hover:pl-2 transition-all border-b border-gray-50 text-sm"
            >
              {item.label}
            </NavLink>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenVirtualTour();
            }}
            className="w-full flex items-center justify-center gap-2 bg-primary-red text-white py-3 rounded-lg font-semibold text-sm shadow-sm"
          >
            <span className="material-symbols-outlined text-lg">vr_180_goggles</span>
            Tram Quan Thực Tế
          </button>
        </div>
      )}
    </nav>
  );
}
