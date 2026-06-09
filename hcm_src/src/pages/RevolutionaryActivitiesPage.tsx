import React from 'react';
import { Link } from 'react-router-dom';

// Định nghĩa kiểu dữ liệu cho các giai đoạn lịch sử
interface StepData {
  id: string;
  title: string;
  time: string;
  description: string;
  bullets: string[];
  significance: string;
  image: string;
  imageAlt: string;
}

const STEPS_DATA: StepData[] = [
  {
    id: "france",
    title: "Hoạt động tại Pháp",
    time: "1917 – 1923",
    description: "Hồ Chí Minh hoạt động dưới tên Nguyễn Ái Quốc tại Pháp, tham gia phong trào công nhân và quyết liệt tuyên truyền về quyền tự quyết cho các dân tộc thuộc địa.",
    bullets: [
      "Tham gia phong trào công nhân và phong trào giải phóng dân tộc.",
      "Năm 1919, gửi 'Bản yêu sách của nhân dân An Nam' tới Hội nghị Versailles.",
      "Năm 1920, tiếp cận 'Luận cương về vấn đề dân tộc và thuộc địa' của Lenin.",
      "Tham gia sáng lập Đảng Cộng sản Pháp (1920)."
    ],
    significance: "Tìm ra con đường cứu nước đúng đắn: Giải phóng dân tộc gắn liền với cách mạng vô sản.",
    image: "/images/hcm_timeline_1.jpg",
    imageAlt: "Nguyễn Ái Quốc tại Pháp"
  },
  {
    id: "soviet",
    title: "Hoạt động tại Liên Xô",
    time: "1923 – 1924",
    description: "Liên Xô là trung tâm của phong trào cộng sản quốc tế, nơi Người trực tiếp nghiên cứu sâu sắc về lý luận và tham gia hoạt động của Quốc tế Cộng sản.",
    bullets: [
      "Dự các hội nghị quốc tế lớn của Quốc tế Cộng sản.",
      "Nghiên cứu sâu sắc hệ thống lý luận Mác – Lênin.",
      "Học tập kinh nghiệm thực tiễn xây dựng nhà nước xã hội chủ nghĩa.",
      "Mạnh dạn trình bày quan điểm về cách mạng thuộc địa."
    ],
    significance: "Hoàn thiện tư tưởng cách mạng giải phóng dân tộc; chuẩn bị cả về lý luận và tổ chức.",
    image: "/images/hcm_homepage.jpg", // Thay bằng ảnh Liên Xô phù hợp
    imageAlt: "Nguyễn Ái Quốc tại Liên Xô"
  },
  {
    id: "china",
    title: "Hoạt động tại Trung Quốc",
    time: "1924 – 1927",
    description: "Trung Quốc là địa bàn chiến lược nơi Nguyễn Ái Quốc trực tiếp xây dựng những nền móng đầu tiên cho tổ chức cách mạng Việt Nam, đặc biệt là tại Quảng Châu.",
    bullets: [
      "Thành lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu.",
      "Trực tiếp mở các lớp huấn luyện và đào tạo cán bộ cốt cán.",
      "Xuất bản tờ báo Thanh Niên – cơ quan ngôn luận cách mạng đầu tiên.",
      "Biên soạn tác phẩm lý luận kinh điển 'Đường Kách Mệnh'."
    ],
    significance: "Đào tạo thế hệ cán bộ cách mạng tiền bối và truyền bá chủ nghĩa Mác – Lênin vào trong nước.",
    image: "/images/hcm_timeline_3.jpg",
    imageAlt: "Lớp huấn luyện cán bộ tại Quảng Châu"
  },
  {
    id: "party",
    title: "Thành lập Đảng Cộng sản Việt Nam",
    time: "1930",
    description: "Đầu năm 1930, Nguyễn Ái Quốc chủ trì hội nghị hợp nhất các tổ chức cộng sản đang hoạt động phân tán, chính thức thành lập một Đảng duy nhất vào ngày 3/2/1930.",
    bullets: [
      "Triệu tập hội nghị hợp nhất các tổ chức cộng sản tại Hồng Kông.",
      "Thành lập Đảng Cộng sản Việt Nam (03/02/1930).",
      "Trực tiếp soạn thảo Chánh cương vắn tắt, Sách lược vắn tắt của Đảng."
    ],
    significance: "Chấm dứt hoàn toàn cuộc khủng hoảng về đường lối cứu nước kéo dài hàng thập kỷ.",
    image: "/images/hcm_homepage.jpg", // Thay bằng ảnh tranh thành lập Đảng
    imageAlt: "Hội nghị thành lập Đảng năm 1930"
  }
];

export default function RevolutionaryActivitiesPage() {
  return (
    <div className="bg-slate-50 text-gray-900 font-sans antialiased selection:bg-red-600 selection:text-white">
      
      {/* 1. HERO SECTION (Chuẩn Landing Page) */}
      <header className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
        <img 
          src="/images/hcm_homepage.jpg" 
          alt="Hoạt động cách mạng Hồ Chí Minh" 
          className="absolute inset-0 w-full h-full object-cover transform scale-105 animate-fade-in"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
          <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-widest bg-red-600 px-3 py-1 rounded-full mb-4 shadow-lg">
            Hành trình lịch sử
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Hoạt Động Cách Mạng <br/>
            <span className="text-red-500">Chủ Tịch Hồ Chí Minh</span>
          </h1>
          <p className="mt-4 text-base md:text-xl text-gray-200 max-w-2xl mx-auto font-light">
            Cái nhìn toàn cảnh về tầm ảnh hưởng quốc tế và các bước ngoặt vĩ đại dẫn dắt phong trào giải phóng dân tộc.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#france" className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg">
              Khám phá ngay
            </a>
            <a href="#summary" className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-lg backdrop-blur-sm transition-all">
              Tóm tắt nhanh
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* 2. TIMELINE SECTIONS (Thiết kế Z-Pattern xen kẽ, căn chỉnh ảnh chuẩn) */}
        {STEPS_DATA.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <section 
              key={step.id} 
              id={step.id} 
              className={`py-16 md:py-24 px-6 md:px-12 border-b border-gray-100 ${isEven ? 'bg-white' : 'bg-slate-50'}`}
            >
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Khối văn bản */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display font-black text-4xl md:text-5xl text-red-100">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
                      {step.time}
                    </span>
                  </div>
                  
                  <h2 className="font-display text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    {step.title}
                  </h2>
                  
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Nội dung cốt lõi</h4>
                      <ul className="space-y-2">
                        {step.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <span className="text-red-500 mr-2 mt-1">✓</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-amber-50/60 border-l-4 border-amber-500 rounded-r-lg mt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">Ý nghĩa lịch sử</h4>
                      <p className="text-sm text-amber-900 font-medium">{step.significance}</p>
                    </div>
                  </div>
                </div>

                {/* Khối hình ảnh cố định tỷ lệ aspect-ratio */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl bg-gray-200 aspect-[4/3] w-full">
                    <img 
                      src={step.image} 
                      alt={step.imageAlt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-xs font-medium">{step.imageAlt}</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          );
        })}

        {/* 3. SECTION 5: PHONG TRÀO CÁCH MẠNG (Thiết kế dạng Thẻ Grid hiện đại) */}
        <section id="movements" className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full">Giai đoạn trong nước</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
                Lãnh Đạo Các Phong Trào Cách Mạng
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Thẻ 1 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-bold mb-4">1</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Giai đoạn 1941 – 1945</h3>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>Trở về Tổ quốc đầu năm 1941 sau 30 năm bôn ba.</li>
                  <li>Thành lập Mặt trận Việt Minh quy tụ sức mạnh đại đoàn kết.</li>
                  <li>Lãnh đạo cuộc Cách mạng Tháng Tám vĩ đại giành chính quyền.</li>
                </ul>
              </div>

              {/* Thẻ 2 (Điểm nhấn trọng tâm) */}
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-2xl text-white shadow-lg transform md:-translate-y-2">
                <div className="w-10 h-10 bg-white/20 text-white rounded-xl flex items-center justify-center font-bold mb-4">2</div>
                <h3 className="font-bold text-lg mb-2">Ngày Độc Lập 2/9/1945</h3>
                <p className="text-sm text-red-100 leading-relaxed mb-4">
                  Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập tại Quảng trường Ba Đình lịch sử, khai sinh nước Việt Nam Dân chủ Cộng hòa.
                </p>
                <div className="text-xs inline-block bg-black/20 px-3 py-1 rounded font-mono">Bước ngoặt thiên niên kỷ</div>
              </div>

              {/* Thẻ 3 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-bold mb-4">3</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Giai đoạn 1946 – 1969</h3>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>Lãnh đạo trường kỳ kháng chiến chống thực dân Pháp.</li>
                  <li>Chỉ đạo công cuộc xây dựng Miền Bắc tiến lên XHCN.</li>
                  <li>Vạch đường lối đấu tranh giải phóng Miền Nam thống nhất đất nước.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SECTION TÓM TẮT GHI NHỚ (Thiết kế dạng Box dễ nuốt thông tin) */}
        <section id="summary" className="py-16 px-6 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center font-display text-2xl md:text-3xl font-black mb-10 tracking-tight">
              Tóm Tắt Nhanh Để Ghi Nhớ
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { place: "Pháp (1917–1923)", desc: "Tìm ra con đường cứu nước." },
                { place: "Liên Xô (1923–1924)", desc: "Hoàn thiện lý luận cách mạng." },
                { place: "Trung Quốc (1924–1927)", desc: "Đào tạo cán bộ, truyền bá lý luận." },
                { place: "Năm 1930", desc: "Thành lập Đảng Cộng sản Việt Nam." },
                { place: "Năm 1941–1945", desc: "Thành lập Việt Minh, Cách mạng Tháng Tám." },
                { place: "Năm 1945–1969", desc: "Lãnh đạo xây dựng và bảo vệ Tổ quốc." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="text-red-400 font-bold text-sm mb-1">{item.place}</h4>
                  <p className="text-gray-300 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 5. FOOTER */}
      <footer className="bg-red-700 text-white text-center py-16 border-t-4 border-red-800">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-display text-2xl md:text-4xl font-black italic tracking-tight text-amber-300">
            "Không có gì quý hơn độc lập, tự do"
          </p>
          <p className="mt-3 text-sm md:text-base font-semibold tracking-widest text-red-100 uppercase">
            — Chủ tịch Hồ Chí Minh —
          </p>
        </div>
      </footer>
    </div>
  );
}