import React, { useState, useEffect } from 'react';
import { Menu, X, Landmark, Compass, Award } from 'lucide-react';

interface NavbarProps {
  onOpenVirtualTour: () => void;
  onSelectCategory: (category: 'nienthieu' | 'conduong' | 'doclap' | 'disan' | 'khotulieu') => void;
}

export default function Navbar({ onOpenVirtualTour, onSelectCategory }: NavbarProps) {
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
    { label: 'Thời Niên Thiếu', category: 'nienthieu' as const },
    { label: 'Con Đường Cách Mạng', category: 'conduong' as const },
    { label: 'Độc Lập Dân Tộc', category: 'doclap' as const },
    { label: 'Di Sản', category: 'disan' as const },
    { label: 'Kho Tư Liệu', category: 'khotulieu' as const }
  ];

  const handleMenuClick = (category: 'nienthieu' | 'conduong' | 'doclap' | 'disan' | 'khotulieu') => {
    onSelectCategory(category);
    setIsOpen(false);
    
    // Smooth scroll to gallery
    const element = document.getElementById('digital-archive');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
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
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer group"
          id="nav-logo"
        >
          <div className="w-10 h-10 rounded-full bg-primary-red/10 flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-primary-red font-semibold">star</span>
          </div>
          <span className="font-display font-bold text-lg md:text-xl text-primary-red tracking-tight">
            Hành Trình Hồ Chí Minh
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item.category}
              id={`nav-item-${item.category}`}
              onClick={() => handleMenuClick(item.category)}
              className="font-sans text-xs md:text-sm font-semibold text-gray-700 hover:text-primary-red transition-all cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary-red after:transition-all hover:after:w-full"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            id="nav-btn-virtual-tour"
            onClick={onOpenVirtualTour}
            className="flex items-center gap-2 bg-primary-red text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-lg hover:bg-primary-red/90 transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">vr_180_goggles</span>
            Tham Quan Thực Tế
          </button>
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
            <button
              key={item.category}
              onClick={() => handleMenuClick(item.category)}
              className="text-left py-2 font-display font-medium text-gray-700 hover:text-primary-red hover:pl-2 transition-all border-b border-gray-50 text-sm"
            >
              {item.label}
            </button>
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
