import React from 'react';

interface HeroProps {
  onScrollToTimeline: () => void;
  onScrollToBento: () => void;
}

export default function Hero({ onScrollToTimeline, onScrollToBento }: HeroProps) {
  return (
    <section className="relative h-[95vh] min-h-[550px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Cinematic Zoom-parallax Hero Frame */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/55 z-10"></div>
        <img 
          alt="Hành trình Hồ Chí Minh" 
          className="w-full h-full object-cover object-fit scale-102 animate-pulse [animation-duration:8s]"
          src="public/images/hcm_homepage.jpg"
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">

        <h1 className="font-display text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight mb-6 max-w-5xl tracking-tight [text-wrap:balance]">
          Hành Trình Cuộc Đời, Sự Nghiệp <br className="hidden md:block"/> Và Tư Tưởng Hồ Chí Minh
        </h1>

        <p className="font-sans text-base md:text-xl text-white/90 font-medium max-w-2xl mb-10 leading-relaxed [text-wrap:balance]">
          Khám phá cuộc đời vĩ đại của vị lãnh tụ kính yêu của dân tộc Việt Nam qua không gian số tương tác di sản độc bản.
        </p>

        {/* Buttons Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <button
            id="hero-btn-explore"
            onClick={onScrollToBento}
            className="w-full sm:w-auto bg-primary-red text-white font-bold text-sm md:text-base px-8 py-4 rounded-xl hover:bg-primary-red/90 transition-all shadow-lg active:scale-95 cursor-pointer flex items-center justify-center gap-2 hover:translate-y-[-2px]"
          >
            <span className="material-symbols-outlined text-lg">explore</span>
            Khám phá hành trình
          </button>
          <button
            id="hero-btn-timeline"
            onClick={onScrollToTimeline}
            className="w-full sm:w-auto min-w-[170px] border-2 border-white text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2 hover:translate-y-[-2px]"
          >
            <span className="material-symbols-outlined text-lg font-semibold">timeline</span>
            Xem timeline
          </button>
        </div>
      </div>

      {/* Floating Bounce Icon indicator */}
      <div 
        onClick={onScrollToBento}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white cursor-pointer hover:text-yellow-400 transition-colors animate-bounce flex flex-col items-center gap-1"
        title="Cuộn xuống"
      >
        <span className="text-xs uppercase font-semibold tracking-widest text-white/50 font-sans">Cuộn xuống</span>
        <span className="material-symbols-outlined text-3xl h-6">keyboard_double_arrow_down</span>
      </div>
    </section>
  );
}
