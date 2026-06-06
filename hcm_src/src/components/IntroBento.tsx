import React, { useState } from 'react';
import { BookOpen, Award, Globe, Sparkles, GraduationCap, History, Check } from 'lucide-react';

export default function IntroBento() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const highlights = {
    history: [
      'Bảo tồn nguyên vẹn hơn 5,000+ bút tích và tài liệu gốc.',
      'Sơ đồ số hóa đa chiều độ chính xác địa lý cao.',
      'Hội đồng cố vấn lịch sử uy tín bảo thực nội dung.'
    ],
    education: [
      'Liên kết nghiên cứu học thuật với các trường đại học lớn.',
      'Bộ câu hỏi trắc nghiệm tương tác & thẻ thông tin (Flashcard).',
      'Giáo trình bài viết tóm tắt lịch sử mốc vàng trực quan.'
    ],
    thought: [
      'Hỗ trợ 5 ngôn ngữ truyền tải thông điệp hòa bình.',
      'Thư viện trích dẫn tư duy triết học Hồ Chí Minh dạng âm thanh.',
      'Kênh chia sẻ và giao lưu bạn bè năm châu.'
    ],
    interface: [
      'Bản đồ ảo chuyển động 3D tương tác mốc thời gian.',
      'Phòng triển lãm số tái hiện bằng kính thực tế ảo.',
      'Thuyết minh viên số ảo tích hợp công nghệ giọng đọc.'
    ]
  };

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
            onMouseEnter={() => setActiveTab(1)}
            onMouseLeave={() => setActiveTab(null)}
            className="col-span-12 lg:col-span-8 bg-gray-50 border border-gray-100 p-8 md:p-10 rounded-2xl museum-shadow transition-all duration-300 hover:translate-y-[-4px] flex flex-col justify-between"
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

            {/* Quick expanded feature list */}
            <div className={`transition-all duration-500 overflow-hidden ${activeTab === 1 ? 'max-h-52 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
              <div className="pt-4 border-t border-gray-200/60 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {highlights.history.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                    <Check className="w-4 h-4 text-primary-red flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 text-xs font-semibold text-primary-red tracking-wider uppercase flex items-center gap-1">
              <span>Đưa chuột vào để xem chi tiết</span>
              <span className="material-symbols-outlined text-sm animate-pulse">arrow_right_alt</span>
            </div>
          </div>

          {/* Card 2: Y nghia giao duc */}
          <div 
            id="bento-card-education"
            onMouseEnter={() => setActiveTab(2)}
            onMouseLeave={() => setActiveTab(null)}
            className="col-span-12 lg:col-span-4 bg-primary-red text-white p-8 md:p-10 rounded-2xl museum-shadow transition-all duration-300 hover:translate-y-[-4px] flex flex-col justify-between"
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

            {/* Quick expanded list */}
            <div className={`transition-all duration-500 overflow-hidden ${activeTab === 2 ? 'max-h-52 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
              <div className="pt-4 border-t border-white/20 flex flex-col gap-2">
                {highlights.education.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-white/90">
                    <Check className="w-3.5 h-3.5 text-yellow-300 mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 text-xs font-semibold text-yellow-300/80 tracking-wider uppercase">
              Hệ thống hóa học thuật Việt Nam
            </div>
          </div>

          {/* Card 3: Lan toa tu tuong */}
          <div 
            id="bento-card-thought"
            onMouseEnter={() => setActiveTab(3)}
            onMouseLeave={() => setActiveTab(null)}
            className="col-span-12 lg:col-span-4 bg-[#FFEFEA] border border-orange-100 p-8 md:p-10 rounded-2xl museum-shadow transition-all duration-300 hover:translate-y-[-4px] flex flex-col justify-between"
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

            {/* Quick expanded list */}
            <div className={`transition-all duration-500 overflow-hidden ${activeTab === 3 ? 'max-h-52 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
              <div className="pt-4 border-t border-orange-200 flex flex-col gap-2">
                {highlights.thought.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-orange-950">
                    <Check className="w-3.5 h-3.5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 text-xs font-semibold text-orange-850/80 tracking-wider uppercase">
              Tầm vóc nhân loại thời đại mới
            </div>
          </div>

          {/* Card 4: Trai nghiem tuong tac (Virtual Spaces) */}
          <div 
            id="bento-card-interactive"
            onMouseEnter={() => setActiveTab(4)}
            onMouseLeave={() => setActiveTab(null)}
            className="col-span-12 lg:col-span-8 bg-[#E3F2FD] border border-blue-100 p-8 md:p-10 rounded-2xl museum-shadow transition-all duration-300 hover:translate-y-[-4px] flex flex-col justify-between"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="w-20 h-20 flex-shrink-0 bg-white rounded-full flex items-center justify-center shadow-inner text-primary-red mx-auto md:mx-0">
                <span className="material-symbols-outlined text-4xl animate-spin [animation-duration:12s]">auto_awesome</span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-display text-xl md:text-2xl font-bold text-blue-950 mb-2">
                  Trải nghiệm tương tác di sản
                </h3>
                <p className="font-sans text-sm md:text-base text-blue-900/80 leading-relaxed">
                  Ứng dụng công nghệ thực tế ảo VR/AR và sơ đồ 3D để tái hiện chân thực, xúc cảm các địa điểm và mốc lịch sử quan trọng, cho phép người dùng trực tiếp tham chiếu, "nhập vai" vào dấu ấn thời gian đầy ý nghĩa của Bác.
                </p>
              </div>
            </div>

            {/* Quick expanded list */}
            <div className={`transition-all duration-500 overflow-hidden ${activeTab === 4 ? 'max-h-52 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
              <div className="pt-4 border-t border-blue-200/65 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {highlights.interface.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-blue-950">
                    <Check className="w-4 h-4 text-blue-700 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 text-center md:text-left text-xs font-semibold text-blue-900 uppercase tracking-widest flex items-center justify-center md:justify-start gap-1">
              <span>Chuẩn kết nối triển lãm số quốc gia</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
