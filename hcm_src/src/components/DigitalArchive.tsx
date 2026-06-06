import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, Eye, Filter, ArrowUpRight, X, Volume2, Calendar, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { archiveItems } from '../data/museumData';
import { ArchiveItem } from '../types';

interface DigitalArchiveProps {
  selectedCategory: 'all' | 'nienthieu' | 'conduong' | 'doclap' | 'disan' | 'khotulieu';
  onCategoryChange: (category: 'all' | 'nienthieu' | 'conduong' | 'doclap' | 'disan' | 'khotulieu') => void;
}

export default function DigitalArchive({ selectedCategory, onCategoryChange }: DigitalArchiveProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLightbox, setActiveLightbox] = useState<ArchiveItem | null>(null);
  const [isQuoteSpeaking, setIsQuoteSpeaking] = useState(false);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  // Categories definition
  const categories = [
    { id: 'all' as const, label: 'Thư viện chung' },
    { id: 'nienthieu' as const, label: 'Thời Niên Thiếu' },
    { id: 'conduong' as const, label: 'Con Đường Cách Mạng' },
    { id: 'doclap' as const, label: 'Độc Lập Dân Tộc' },
    { id: 'disan' as const, label: 'Di Sản' },
    { id: 'khotulieu' as const, label: 'Kho Tư Liệu' }
  ];

  // Initialize Speech
  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  // Filter items based on selected category & search query
  const filteredItems = useMemo(() => {
    return archiveItems.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.year.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Speaking quote aloud
  const speakQuote = () => {
    if (!synthRef.current) return;
    if (isQuoteSpeaking) {
      synthRef.current.cancel();
      setIsQuoteSpeaking(false);
      return;
    }

    const passage = "Không có gì quý hơn độc lập, tự do. Một câu nói bất hủ chứa đựng tinh thần bất khuất của dân tộc Việt Nam, được đúc kết từ hàng ngàn năm đấu tranh dựng nước và giữ nước.";
    const utterance = new SpeechSynthesisUtterance(passage);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.92;
    utterance.onend = () => setIsQuoteSpeaking(false);
    utterance.onerror = () => setIsQuoteSpeaking(false);

    setIsQuoteSpeaking(true);
    synthRef.current.cancel();
    synthRef.current.speak(utterance);
  };

  const handleNextLightbox = () => {
    if (!activeLightbox) return;
    const currentIndex = filteredItems.findIndex(x => x.id === activeLightbox.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveLightbox(filteredItems[nextIndex]);
  };

  const handlePrevLightbox = () => {
    if (!activeLightbox) return;
    const currentIndex = filteredItems.findIndex(x => x.id === activeLightbox.id);
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveLightbox(filteredItems[prevIndex]);
  };

  return (
    <section id="digital-archive" className="py-24 px-6 md:px-12 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-display text-xs md:text-sm font-extrabold text-primary-red tracking-widest uppercase block mb-3">
              Thư viện lưu trữ số
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Những Hình Ảnh Vô Giá
            </h2>
          </div>

          {/* Elegant search box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Tìm kiếm tư liệu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-all shadow-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-all text-xs underline cursor-pointer"
              >
                Xóa
              </button>
            )}
          </div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-gray-100 pb-4 overflow-x-auto no-scrollbar scroll-smooth">
          <span className="text-xs uppercase font-bold text-gray-400 font-sans tracking-wide mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Chuyên đề:
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all border whitespace-nowrap ${
                  isActive 
                    ? 'bg-primary-red border-primary-red text-white shadow-md shadow-primary-red/10' 
                    : 'bg-white border-gray-200/60 text-gray-600 hover:bg-gray-50 hover:border-gray-300'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          
          {/* Loop over products in categories */}
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="break-inside-avoid relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden h-fit max-h-[350px]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-106"
                />
                
                {/* Year tag overlaid */}
                <span className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-sans font-bold tracking-widest px-3 py-1 rounded-full uppercase border border-white/10 shadow-sm z-10">
                  {item.year}
                </span>

                {/* Dark rich overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <span className="text-yellow-300 text-[10px] uppercase font-bold tracking-widest font-sans mb-1">
                    {categories.find(x => x.id === item.category)?.label}
                  </span>
                  <h4 className="text-white font-display font-extrabold text-lg leading-snug mb-1 drop-shadow flex items-center gap-1.5 justify-between">
                    {item.title}
                    <ArrowUpRight className="w-4 h-4 text-yellow-300 opacity-80" />
                  </h4>
                  <p className="text-white/80 font-sans text-xs line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Minimalist lower description panel for accessibility before zoom list */}
              <div className="p-4 border-t border-gray-50 flex items-center justify-between">
                <span className="font-display font-bold text-xs text-gray-800 line-clamp-1">{item.title}</span>
                <span className="text-[10px] font-sans text-primary-red font-bold uppercase tracking-wider">{item.year}</span>
              </div>
            </div>
          ))}

          {/* Standalone Quote Card: Static item in the gallery center (matching user image layout) */}
          <div className="break-inside-avoid bg-primary-red text-white p-8 rounded-2xl museum-shadow flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="material-symbols-outlined text-yellow-300 text-6xl opacity-90 select-none">
                  format_quote
                </span>
                
                {/* Speaking speech button */}
                <button
                  onClick={speakQuote}
                  className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center cursor-pointer transition-all hover:bg-white/10 active:scale-95 ${
                    isQuoteSpeaking ? 'bg-yellow-400 text-red-950 border-yellow-400 shadow-md animate-pulse' : ''
                  }`}
                  title={isQuoteSpeaking ? "Tắt đọc trích dẫn" : "Thuyết minh câu nói của Bác"}
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <p className="font-display text-lg md:text-xl font-bold italic leading-relaxed mb-8">
                "Không có gì quý hơn độc lập, tự do."
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-yellow-300"></div>
              <span className="font-display font-bold text-sm tracking-wide text-yellow-300">— Chủ tịch Hồ Chí Minh</span>
            </div>
          </div>

        </div>

        {/* Empty state finder */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm max-w-xl mx-auto mt-6">
            <span className="material-symbols-outlined text-5xl text-gray-300 animate-pulse">database_search</span>
            <h3 className="font-display font-bold text-gray-700 text-lg mt-3">Không tìm thấy tư liệu tương khớp</h3>
            <p className="text-gray-400 text-sm mt-1">Xin vui lòng thử với cụm từ khóa hoặc chuyên mục khác.</p>
            <button 
              onClick={() => { setSearchQuery(''); onCategoryChange('all'); }}
              className="mt-4 px-4 py-2 bg-primary-red text-white text-xs font-semibold rounded-lg hover:bg-primary-red/90 transition-all cursor-pointer"
            >
              Thiết lập lại bộ lọc
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Full Zoom Modal */}
      {activeLightbox && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn">
          {/* Close button top right */}
          <button 
            onClick={() => setActiveLightbox(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 text-white/90 hover:bg-white/20 transition-all flex items-center justify-center cursor-pointer z-50 border border-white/10"
            title="Đóng xem thu nhỏ"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Quick arrow controls when in lightbox */}
          <button 
            onClick={handlePrevLightbox}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white/90 hover:bg-white/20 transition-all flex items-center justify-center cursor-pointer z-40 border border-white/10 hidden md:flex"
            title="Tài liệu trước"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={handleNextLightbox}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white/90 hover:bg-white/20 transition-all flex items-center justify-center cursor-pointer z-40 border border-white/10 hidden md:flex"
            title="Tài liệu kế tiếp"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Centered Stage Content */}
          <div className="max-w-5xl w-full flex flex-col md:flex-row bg-[#111] rounded-2xl overflow-hidden border border-white/10 shadow-2xl items-stretch max-h-[90vh]">
            
            {/* Visual Screen on Left */}
            <div className="flex-1 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-0">
              <img 
                src={activeLightbox.image} 
                alt={activeLightbox.title} 
                className="max-h-[60vh] object-contain select-none shadow-lg max-w-full"
              />
              <span className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded text-[11px] text-white font-sans flex items-center gap-1 border border-white/10">
                <FileText className="w-3.5 h-3.5 text-primary-red" />
                Vật phẩm trưng bày lưu trữ số hiệu ID-{activeLightbox.id}
              </span>
            </div>

            {/* Curating textual commentary on the right */}
            <div className="w-full md:w-80 bg-zinc-900 p-6 md:p-8 text-white flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="text-yellow-400 font-sans text-xs uppercase tracking-widest font-extrabold flex items-center gap-1.5 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-primary-red" />
                  Năm {activeLightbox.year}
                </span>

                <h3 className="font-display text-xl md:text-2xl font-bold text-white tracking-tight lead mb-4">
                  {activeLightbox.title}
                </h3>

                <p className="font-sans text-xs md:text-sm text-gray-300 leading-relaxed mb-6">
                  {activeLightbox.description}
                </p>

                <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-xs text-gray-400 leading-relaxed font-sans">
                  💡 <span className="font-bold text-white">Ý nghĩa khoa học:</span> Tư liệu lịch sử chính thống được lưu lại trong tàng thư bảo tàng quốc gia của Việt Nam. Phiên bản số phục chế màu kỹ thuật số cao cấp.
                </div>
              </div>

              {/* Museum watermark info */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-500 font-sans">
                <span>National Digital Museum</span>
                <span>Bộ sưu tập Di sản Hồ Chí Minh</span>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
