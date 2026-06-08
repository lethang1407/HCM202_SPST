import React from 'react';
import { Link } from 'react-router-dom';

export default function IntroBento() {
  return (
    <section id="project-intro" className="py-24 px-6 md:px-12 bg-[#fdfdfd]">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Group */}
        <div className="text-center mb-16">
          <span className="font-display text-xs md:text-sm font-extrabold text-primary-red tracking-widest uppercase block mb-3">
            Giới thiệu dự án
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Tầm Nhìn & Sứ Mệnh
          </h2>
          <div className="w-16 h-1.5 bg-primary-red mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          
          {/* Card 1: Gia tri lich su */}
          <div 
            id="bento-card-history"
            className="col-span-12 bg-gray-50 border border-gray-100 p-8 md:p-10 rounded-2xl museum-shadow transition-all duration-300 hover:translate-y-[-4px] flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-primary-red/10 flex items-center justify-center mb-6 text-primary-red">
                <span className="material-symbols-outlined text-3xl">history_edu</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-gray-950 mb-4 flex items-center gap-2">
                Giá trị lịch sử
              </h3>
              <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mb-6">
                Dự án lưu trữ và tái hiện hàng ngàn tư liệu, hình ảnh và hiện vật quý giá về Chủ tịch Hồ Chí Minh, giúp thế hệ trẻ tiếp cận lịch sử một cách sinh động và trực quan nhất. Chúng tôi cam kết bảo tồn tính xác thực tuyệt đối của mọi nguồn tin kỷ vật quốc gia.
              </p>
            </div>
          </div>

          {/* Card 2: Y nghia giao duc */}
          <div 
            id="bento-card-education"
            className="col-span-12 lg:col-span-6 bg-primary-red text-white p-8 md:p-10 rounded-2xl museum-shadow transition-all duration-300 hover:translate-y-[-4px] flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-yellow-300">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-4">
                Ý nghĩa giáo dục
              </h3>
              <p className="font-sans text-sm md:text-base text-white/95 leading-relaxed mb-6">
                Trở thành nền tảng học tập số hóa tương tác toàn diện cho học sinh, sinh viên, các nghiên cứu sinh lịch sử tinh hoa và công chúng đam mê nghiên cứu trên toàn thế giới.
              </p>
            </div>
            <div className="mt-4 text-xs font-semibold text-yellow-300/80 tracking-wider uppercase">
              Hệ thống hóa học thuật Việt Nam
            </div>
          </div>

          {/* Card 3: Lan toa tu tuong */}
          <div 
            id="bento-card-thought"
            className="col-span-12 lg:col-span-6 bg-[#FFEFEA] border border-orange-100 p-8 md:p-10 rounded-2xl museum-shadow transition-all duration-300 hover:translate-y-[-4px] flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-orange-200/50 flex items-center justify-center mb-6 text-orange-950">
                <span className="material-symbols-outlined text-3xl">public</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-orange-950 mb-4">
                Lan tỏa tư tưởng
              </h3>
              <p className="font-sans text-sm md:text-base text-orange-900/90 leading-relaxed mb-6">
                Giới thiệu hệ giá trị tư tưởng nhân văn cao đẹp, khát vọng hòa bình và ý chí tự cường vĩ đại của Người đến với bạn bè hữu nghị quốc tế qua mạng lưới đa ngôn ngữ.
              </p>
            </div>
            <div className="mt-4 text-xs font-semibold text-orange-850/80 tracking-wider uppercase">
              Tầm vóc nhân loại thời đại mới
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
