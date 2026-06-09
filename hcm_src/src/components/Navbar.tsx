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
    </nav>
  );
}
