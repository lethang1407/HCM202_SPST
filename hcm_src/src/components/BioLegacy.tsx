import React, { useState } from 'react';
import { Eye, Award, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BioLegacy() {
  const [selectedStat, setSelectedStat] = useState<number | null>(null);

  const statsDetails = [
    {
      title: '30 Năm Bôn Ba Hải Ngoại',
      text: 'Từ năm 1911 đến 1941, Người đi qua 3 đại dương, 4 châu lục và gần 30 quốc gia khác nhau. Người làm rất nhiều nghề cực khổ để kiếm sống học hỏi như: phụ bếp, quét tuyết, bồi bàn, đốt lò, chụp ảnh... mục tiêu duy nhất là tiếp cận học thuyết tiến bộ xã hội và tìm ra chân lý giải phóng Tổ quốc Việt Nam khỏi ách xiềng xích nô lệ phương Tây.',
      fact: 'Bắt đầu từ Bến cảng Nhà Rồng trên tàu Amiral Latouche-Tréville và lần đầu trở về nước vào ngày 28/1/1941 qua mốc 108 Hà Quảng, Cao Bằng.'
    },
    {
      title: '1945 - Khai Sinh Nước Việt Nam Mới',
      text: 'Đứng trên lễ đài Quảng trường Ba Đình ngày 2 tháng 9 năm 1945, Người đọc bản Tuyên ngôn Độc lập bất hủ vang dội non sông, tuyên bố nước Việt Nam độc lập dân tộc dân chủ cộng hòa, chấm dứt hơn 80 năm dưới ách cai trị của thực dân Pháp và hàng ngàn năm phong kiến suy tàn.',
      fact: 'Bản Tuyên ngôn trích dẫn nội dung triết lý nhân quyền từ Tuyên ngôn Độc lập Hoa Kỳ 1776 và Tuyên ngôn Nhân quyền Pháp 1789.'
    },
    {
      title: '∞ Tư Tưởng Hồ Chí Minh Trường Tồn',
      text: 'Hệ thống các quan điểm toàn diện và sâu sắc về các vấn đề cơ bản của Cách mạng Việt Nam, từ con đường giải phóng cho tới chiến lược đại đoàn kết, đạo đức cần kiệm liêm chính chí công vô tư, khẳng định vai trò tối thượng của nhân dân: "Nước lấy dân làm gốc".',
      fact: 'Tư tưởng của Người được UNESCO vinh danh là Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất vào khóa họp 24 năm 1987.'
    }
  ];

  return (
    <section className="bg-surface-taupe py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Image with borders decoration */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-primary-red/30 rounded-tl-lg pointer-events-none"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-primary-red/30 rounded-br-lg pointer-events-none"></div>
            
            <div className="relative overflow-hidden rounded-xl bg-white p-4 shadow-xl select-none group">
              <img 
                alt="Infographic thành tựu Hồ Chí Minh" 
                className="w-full max-w-sm md:max-w-md mx-auto transition-transform duration-700 group-hover:scale-102"
                src="public/images/hcm_1.png"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Achievements numbers */}
        <div className="w-full lg:w-1/2">
          <span className="font-display text-xs md:text-sm font-extrabold text-primary-red tracking-widest uppercase block mb-3">
            Thành tựu vĩ đại
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-8">
            Một Cuộc Đời, Ngàn Di Sản
          </h2>
          
          <div className="space-y-6">
            
            {/* Stat 1 */}
            <div 
              onClick={() => setSelectedStat(selectedStat === 0 ? null : 0)}
              className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer flex gap-5 items-start ${
                selectedStat === 0 
                  ? 'bg-white border-primary-red shadow-md translate-x-2' 
                  : 'bg-transparent border-gray-200/40 hover:bg-white/40 hover:border-gray-200'
              }`}
            >
              <div className="w-30 flex-shrink-0 text-center text-primary-red font-display text-4xl md:text-5xl font-extrabold leading-none select-none">
                30
              </div>
              <div className="flex-1">
                <h4 className="font-display font-extrabold text-gray-900 text-lg md:text-xl flex items-center justify-between">
                  Năm Bôn Ba Tìm Đường Cứu Nước
                  <span className="text-xs text-primary-red font-semibold font-sans uppercase underline bg-primary-red/5 px-2 py-1 rounded">
                    {selectedStat === 0 ? 'Thu gọn' : 'Chi tiết'}
                  </span>
                </h4>
                <p className="text-gray-600 font-sans text-sm mt-1">
                  Người đi qua 3 đại dương vĩ đại, chân rộng mở khắp 4 châu lục lớn và tìm thấy ngọn đuốc Cách mạng chân chính.
                </p>

                {selectedStat === 0 && (
                  <div className="mt-4 pt-3 border-t border-gray-100 text-xs md:text-sm text-gray-700 font-sans leading-relaxed transition-all">
                    <p className="mb-2">{statsDetails[0].text}</p>
                    <p className="font-semibold text-primary-red">📌 Sự thật lịch sử: {statsDetails[0].fact}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Stat 2 */}
            <div 
              onClick={() => setSelectedStat(selectedStat === 1 ? null : 1)}
              className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer flex gap-5 items-start ${
                selectedStat === 1 
                  ? 'bg-white border-primary-red shadow-md translate-x-2' 
                  : 'bg-transparent border-gray-200/40 hover:bg-white/40 hover:border-gray-200'
              }`}
            >
              <div className="w-30 flex-shrink-0 text-center text-primary-red font-display text-4xl md:text-5xl font-extrabold leading-none select-none">
                1945
              </div>
              <div className="flex-1">
                <h4 className="font-display font-extrabold text-gray-900 text-lg md:text-xl flex items-center justify-between">
                  Khai Sinh Đất Nước Việt Nam Mới
                  <span className="text-xs text-primary-red font-semibold font-sans uppercase underline bg-primary-red/5 px-2 py-1 rounded">
                    {selectedStat === 1 ? 'Thu gọn' : 'Chi tiết'}
                  </span>
                </h4>
                <p className="text-gray-600 font-sans text-sm mt-1">
                  Đọc bản Tuyên ngôn Độc lập tại Quảng trường Ba Đình lịch sử, chấm dứt xiềng xích thực dân phong kiến.
                </p>

                {selectedStat === 1 && (
                  <div className="mt-4 pt-3 border-t border-gray-100 text-xs md:text-sm text-gray-700 font-sans leading-relaxed transition-all">
                    <p className="mb-2">{statsDetails[1].text}</p>
                    <p className="font-semibold text-primary-red">📌 Sự thật lịch sử: {statsDetails[1].fact}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Stat 3 */}
            <div 
              onClick={() => setSelectedStat(selectedStat === 2 ? null : 2)}
              className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer flex gap-5 items-start ${
                selectedStat === 2 
                  ? 'bg-white border-primary-red shadow-md translate-x-2' 
                  : 'bg-transparent border-gray-200/40 hover:bg-white/40 hover:border-gray-200'
              }`}
            >
              <div className="w-30 flex-shrink-0 text-center text-primary-red font-display text-4xl md:text-5xl font-extrabold leading-none select-none">
                ∞
              </div>
              <div className="flex-1">
                <h4 className="font-display font-extrabold text-gray-900 text-lg md:text-xl flex items-center justify-between">
                  Tư Tưởng Hồ Chí Minh Sống Mãi
                  <span className="text-xs text-primary-red font-semibold font-sans uppercase underline bg-primary-red/5 px-2 py-1 rounded">
                    {selectedStat === 2 ? 'Thu gọn' : 'Chi tiết'}
                  </span>
                </h4>
                <p className="text-gray-600 font-sans text-sm mt-1">
                  Hệ thống tư tưởng cao cả về cách giải phóng, đạo đức đại đoàn kết toàn dân và lấy nhân dân làm trung tâm gốc rễ.
                </p>

                {selectedStat === 2 && (
                  <div className="mt-4 pt-3 border-t border-gray-100 text-xs md:text-sm text-gray-700 font-sans leading-relaxed transition-all">
                    <p className="mb-2">{statsDetails[2].text}</p>
                    <p className="font-semibold text-primary-red">📌 Sự thật lịch sử: {statsDetails[2].fact}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/quiz"
              className="inline-flex items-center gap-2 bg-white text-primary-red font-bold text-sm px-8 py-3 rounded-xl transition-all shadow-md border border-primary-red/20 hover:bg-primary-red hover:text-white hover:border-primary-red cursor-pointer active:scale-95"
            >
              <Award className="w-4 h-4" />
              Bắt đầu làm Quiz
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
