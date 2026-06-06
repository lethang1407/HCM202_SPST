/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroBento from './components/IntroBento';
import BioLegacy from './components/BioLegacy';
import TimelineSection from './components/TimelineSection';
import DigitalArchive from './components/DigitalArchive';
import InteractiveQuiz from './components/InteractiveQuiz';
import VirtualTourModal from './components/VirtualTourModal';
import { Share2, Globe, Mail, Landmark } from 'lucide-react';

export default function App() {
  const [archiveCategory, setArchiveCategory] = useState<'all' | 'nienthieu' | 'conduong' | 'doclap' | 'disan' | 'khotulieu'>('all');
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);

  const handleSelectNavCategory = (category: 'nienthieu' | 'conduong' | 'doclap' | 'disan' | 'khotulieu') => {
    setArchiveCategory(category);
  };

  const scrollToTimeline = () => {
    const element = document.getElementById('timelines-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToBento = () => {
    const element = document.getElementById('project-intro');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] font-sans antialiased selection:bg-rose-100 selection:text-primary-red">
      
      {/* Sticky header glass navigation panel bar */}
      <Navbar 
        onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
        onSelectCategory={handleSelectNavCategory}
      />

      {/* Main Content Areas Layout flow */}
      <main className="pt-[72px]">
        {/* Cinematic Hero visual stage */}
        <Hero 
          onScrollToTimeline={scrollToTimeline}
          onScrollToBento={scrollToBento}
        />

        {/* Project Intro: Bento display grid */}
        <IntroBento />

        {/* History values Infographics layout details */}
        <BioLegacy />

        {/* Cột Mốc Vàng historic timeline horizontal layout */}
        <TimelineSection />

        {/* Custom filterable archive visual gallery of precious historic assets */}
        <DigitalArchive 
          selectedCategory={archiveCategory}
          onCategoryChange={(cat) => setArchiveCategory(cat)}
        />

        {/* Educational Vietnamese history interactive quiz board */}
        <InteractiveQuiz />
      </main>

      {/* Majestic Footer board (matching user HTML colors & links layout) */}
      <footer id="main-footer" className="bg-[#1A1A1A] text-white pt-20 pb-8 mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Upper content blocks column stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16 border-b border-white/10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-red/20 flex items-center justify-center border border-primary-red/10 animate-pulse">
                  <span className="material-symbols-outlined text-primary-red font-bold text-sm">star</span>
                </div>
                <h3 className="font-display text-2xl font-black text-white tracking-tight">
                  Hành Trình Hồ Chí Minh
                </h3>
              </div>
              <p className="font-sans text-xs md:text-sm text-gray-400 max-w-md leading-relaxed">
                © 2026 Bảo tàng Kỹ thuật số Quốc gia. Chuyên đề kỷ niệm đặc biệt về Cuộc đời và Sự nghiệp vĩ đại của Chủ tịch Hồ Chí Minh. Mọi bản quyền pháp lý được bảo hộ và thuộc trách nhiệm của Bảo tàng Kỹ thuật số Quốc gia Việt Nam.
              </p>
              
              {/* Media floating circular links */}
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-gray-600/50 flex items-center justify-center hover:bg-primary-red hover:border-primary-red hover:text-white transition-all cursor-pointer text-gray-400 hover:scale-105 active:scale-95"
                  title="Chia sẻ di sản"
                >
                  <Share2 className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-gray-600/50 flex items-center justify-center hover:bg-primary-red hover:border-primary-red hover:text-white transition-all cursor-pointer text-gray-400 hover:scale-105 active:scale-95"
                  title="Đa ngôn ngữ"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-gray-600/50 flex items-center justify-center hover:bg-primary-red hover:border-primary-red hover:text-white transition-all cursor-pointer text-gray-400 hover:scale-105 active:scale-95"
                  title="Gửi thư liên hệ"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick sections navigation catalogs */}
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <span className="font-sans text-[11px] font-extrabold uppercase tracking-widest text-primary-red">
                  Tài nguyên số
                </span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-sans text-xs md:text-sm">Tài liệu tham khảo</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-sans text-xs md:text-sm">Tài nguyên giáo dục</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-sans text-xs md:text-sm">Kho lưu trữ quốc gia</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-sans text-[11px] font-extrabold uppercase tracking-widest text-primary-red">
                  Pháp lý & Quản trị
                </span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-sans text-xs md:text-sm">Điều khoản sử dụng</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-sans text-xs md:text-sm">Liên hệ quản thủ</a>
                <a href="#" className="text-yellow-400 hover:text-yellow-300 font-bold transition-colors font-sans text-xs md:text-sm">Chính sách bảo mật</a>
              </div>
            </div>
          </div>

          {/* Lower digital team details bar */}
          <div className="pt-8 text-center text-xs text-gray-500 font-sans">
            Hợp tác cùng Viện Di sản Văn hóa - Thiết kế kiến trúc số bởi <span className="text-gray-300 font-semibold uppercase">National Digital Museum Team</span>.
          </div>
        </div>
      </footer>

      {/* Conditionally display the Virtual Exhibition Hall Tour */}
      {isVirtualTourOpen && (
        <VirtualTourModal onClose={() => setIsVirtualTourOpen(false)} />
      )}

    </div>
  );
}
