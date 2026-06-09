import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { archiveData, archiveCategories, ArchiveImage } from '../data/archiveData';


const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0
  })
};

export default function ArchivePage() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [colsCount, setColsCount] = useState(4);
  const [direction, setDirection] = useState(0);

  // Responsive column count listener
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setColsCount(1);
      else if (width < 1024) setColsCount(2);
      else if (width < 1280) setColsCount(3);
      else setColsCount(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter images based on category
  const filteredImages = useMemo(() => {
    return activeCategory === "Tất cả"
      ? archiveData
      : archiveData.filter(img => img.category === activeCategory);
  }, [activeCategory]);

  // Distribute items into columns programmatically (round-robin style)
  const columns = useMemo(() => {
    const cols = Array.from({ length: colsCount }, () => [] as Array<{ item: ArchiveImage; globalIndex: number }>);
    filteredImages.forEach((item, index) => {
      cols[index % colsCount].push({ item, globalIndex: index });
    });
    return cols;
  }, [filteredImages, colsCount]);

  // Lightbox Navigation
  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && filteredImages.length > 0) {
      setDirection(1);
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && filteredImages.length > 0) {
      setDirection(-1);
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setDirection(0);
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-red-800 mb-4 font-serif"
          >
            Kho Tư Liệu Lịch Sử
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-600 max-w-2xl mx-auto"
          >
            Bộ sưu tập hình ảnh chân thực và quý giá về cuộc đời, sự nghiệp của Chủ tịch Hồ Chí Minh qua các thời kỳ lịch sử.
          </motion.p>
        </div>

        {/* Controls Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 mb-10 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Categories */}
          <div className="flex-1 w-full">
            <div className="flex items-center gap-2 mb-3 text-stone-700 font-semibold">
              <Filter className="w-5 h-5 text-red-600" />
              <span>Giai đoạn lịch sử</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {archiveCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-stone-100 text-stone-600 hover:bg-red-50 hover:text-red-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Multi-Column Horizontal-Sorted Flex Masonry Grid */}
        {filteredImages.length > 0 ? (
          <div className="flex flex-row gap-6 items-start">
            {columns.map((columnItems, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-6 flex-1 min-w-0">
                <AnimatePresence>
                  {columnItems.map(({ item, globalIndex }) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      <div 
                        className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-stone-100 flex flex-col"
                        onClick={() => {
                          setDirection(0);
                          setLightboxIndex(globalIndex);
                        }}
                      >
                        <div className="relative overflow-hidden">
                          <img 
                            src={item.url} 
                            alt={item.description}
                            loading="lazy"
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        <div className="p-4 flex-1 flex flex-col justify-between bg-white border-t border-stone-100">
                          <p className="text-stone-800 font-sans text-sm leading-relaxed group-hover:text-red-800 transition-colors">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-stone-500">
            Không tìm thấy tư liệu nào cho thư mục này.
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4 md:p-8"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-stone-800 hover:text-black p-2 bg-white/80 rounded-full shadow-md backdrop-blur-md transition-colors z-50 border border-stone-200"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>

            {filteredImages.length > 1 && (
              <>
                <button 
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-stone-800 hover:text-black p-3 bg-white/80 rounded-full shadow-md backdrop-blur-md transition-colors z-50 hidden md:block border border-stone-200"
                  onClick={goToPrev}
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button 
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-stone-800 hover:text-black p-3 bg-white/80 rounded-full shadow-md backdrop-blur-md transition-colors z-50 hidden md:block border border-stone-200"
                  onClick={goToNext}
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            <div 
              className="relative flex flex-col items-center gap-4 max-w-[95vw] md:max-w-4xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Space-reserving wrapper for Card 1 to slide absolute inside */}
              <div className="relative w-full h-[72vh] flex items-center justify-center overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div 
                    key={lightboxIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="absolute bg-white p-2 md:p-3 rounded-2xl shadow-2xl border border-stone-200 flex items-center justify-center overflow-hidden h-[72vh] w-fit max-w-[90vw] min-w-[320px]"
                  >
                    <div className="relative flex items-center justify-center bg-white overflow-hidden rounded-xl h-full w-auto">
                       <img 
                        src={filteredImages[lightboxIndex].url} 
                        alt={filteredImages[lightboxIndex].description}
                        className="h-full w-auto object-contain"
                      />
                       {/* Mobile Nav Overlay */}
                       <div className="absolute inset-0 flex items-center justify-between px-2 md:hidden pointer-events-none z-10">
                          <button className="p-2 bg-white/85 text-stone-800 rounded-full shadow-md pointer-events-auto hover:bg-white transition-colors" onClick={goToPrev}>
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button className="p-2 bg-white/85 text-stone-800 rounded-full shadow-md pointer-events-auto hover:bg-white transition-colors" onClick={goToNext}>
                            <ChevronRight className="w-5 h-5" />
                          </button>
                       </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Card 2: Separate Information Panel (Preserves fixed width) */}
              <div className="bg-white p-4 rounded-2xl shadow-2xl border border-stone-200 w-full max-w-2xl overflow-y-auto max-h-[20vh] h-[16vh] flex flex-col justify-start">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex items-center gap-2">
                    <span className="inline-block px-2.5 py-0.5 bg-red-50 text-red-800 text-xs font-semibold rounded-full border border-red-100">
                      {filteredImages[lightboxIndex].category}
                    </span>
                  </div>
                  
                  <p className="text-stone-700 text-sm leading-relaxed font-sans">
                    {filteredImages[lightboxIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
