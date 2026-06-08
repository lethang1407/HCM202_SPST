import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, MapPin, Calendar, Compass } from 'lucide-react';
import { milestones } from '../data/museumData';
import { Milestone } from '../types';

export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(3); // Start with 1945 active!
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play timeline loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % milestones.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeMilestone: Milestone = milestones[activeIndex];

  const selectNode = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + milestones.length) % milestones.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % milestones.length);
  };

  return (
    <section id="timelines-section" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden border-b border-gray-100">
      
      {/* Background soft grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <span className="font-display text-xs md:text-sm font-extrabold text-primary-red tracking-widest uppercase block mb-3">
            Lịch sử tóm tắt
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Các Cột Mốc Vàng Kháng Chiến
          </h2>
          <p className="text-gray-500 font-sans text-sm md:text-base mt-2 max-w-xl mx-auto">
            Click vào mỗi cột mốc niên đại dưới đây để phóng đại tài liệu, hình ảnh gốc và tham chiếu tường tận di trình cứu quốc.
          </p>

          {/* Autoplay Controls */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-sm border cursor-pointer ${
                isPlaying 
                  ? 'bg-primary-red/10 border-primary-red/30 text-primary-red' 
                  : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 animate-pulse" /> : <Play className="w-3.5 h-3.5" />}
              {isPlaying ? 'Đang Tự Động Trình Chiếu' : 'Bật Tự Động Trình Chiếu'}
            </button>
          </div>
        </div>

        {/* Timeline Slider Nodes (Horizontal View) */}
        <div className="relative py-12 max-w-5xl mx-auto overflow-x-auto no-scrollbar scroll-smooth">
          {/* Main Connector Wire Line */}
          <div className="absolute top-[52px] left-0 w-full h-[4px] bg-gray-255 bg-gray-200 rounded-full"></div>
          
          {/* Red Glowing Connector Wire Progress */}
          <div 
            className="absolute top-[52px] left-0 h-[4.5px] bg-primary-red rounded-full transition-all duration-500"
            style={{ width: `${(activeIndex / (milestones.length - 1)) * 100}%` }}
          ></div>

          {/* Nodes list */}
          <div className="relative flex justify-between min-w-[750px] px-8">
            {milestones.map((milestone, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div 
                  key={milestone.id}
                  onClick={() => selectNode(idx)}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  {/* Bubble circle indicator */}
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all-custom duration-300 z-10 ${
                      isActive 
                        ? 'bg-primary-red text-white scale-115 shadow-xl ring-8 ring-primary-red/20 border-4 border-white' 
                        : 'bg-white border-4 border-primary-red text-primary-red shadow-md hover:scale-108 hover:border-primary-red/80'
                    }`}
                  >
                    <span className="font-display font-extrabold text-sm md:text-base">
                      {milestone.shortYear}
                    </span>
                  </div>

                  {/* Year marker */}
                  <span className={`font-display font-bold text-sm md:text-base transition-colors ${isActive ? 'text-primary-red' : 'text-gray-500'}`}>
                    {milestone.year}
                  </span>
                  
                  {/* Title badge */}
                  <span className={`text-[11px] font-sans font-medium text-center max-w-[110px] mt-1 line-clamp-1 truncate select-none ${isActive ? 'text-primary-red font-bold' : 'text-gray-500'}`}>
                    {milestone.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail Display Exhibition Board Card */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-100 museum-shadow p-6 md:p-10 max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-stretch relative group">
          
          {/* Slide Arrow Navigation Floating */}
          <button 
            onClick={handlePrev}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center hover:bg-gray-50 hover:text-primary-red transition-all cursor-pointer z-10 hidden md:flex active:scale-95"
            title="Sự kiện trước"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center hover:bg-gray-50 hover:text-primary-red transition-all cursor-pointer z-10 hidden md:flex active:scale-95"
            title="Sự kiện tiếp theo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Left: Beautiful Framed Photo of that Era */}
          <div className="w-full md:w-1/2 relative overflow-hidden rounded-xl border border-gray-100 bg-[#1A1A1A] h-64 md:h-96">
            <img 
              src={activeMilestone.image} 
              alt={activeMilestone.title} 
              className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />
            {/* Year Overlay Tag */}
            <div className="absolute top-4 left-4 bg-primary-red text-white font-display font-black text-lg md:text-xl py-1 px-4 rounded-lg shadow-md border border-white/20">
              {activeMilestone.year}
            </div>
            {/* Image gradient filter */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Right: Detailed text layout, including Audio Narration Speak Reader */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              {/* Top metadata tags */}
              <div className="flex flex-wrap gap-2 items-center mb-4">
                <span className="inline-flex items-center gap-1 text-[11px] font-sans font-bold uppercase tracking-wider bg-primary-red/10 text-primary-red px-2.5 py-1 rounded">
                  <Calendar className="w-3.5 h-3.5" />
                  Niên biểu {activeMilestone.year}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-sans font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded">
                  <MapPin className="w-3 h-3 text-red-500" />
                  {activeMilestone.location}
                </span>
              </div>

              {/* Title & Speech synthesiser */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                  {activeMilestone.title}
                </h3>

              </div>

              <p className="font-display font-bold text-gray-700 text-sm md:text-base leading-relaxed mb-4 border-l-3 border-primary-red/40 pl-3">
                {activeMilestone.description}
              </p>

              <p className="font-sans text-xs md:text-sm text-gray-600 leading-relaxed">
                {activeMilestone.richDetails}
              </p>
            </div>

            {/* Quick control tip */}
            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span></span>
              <span>Cột mốc {activeIndex + 1} của {milestones.length}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
