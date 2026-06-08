import React from 'react';
import { Link } from 'react-router-dom';

// Helper component for consistent section layout
const Section: React.FC<{ id: string; title: string; children: React.ReactNode; className?: string }> = ({ id, title, children, className = '' }) => (
  <section id={id} className={`py-20 px-6 md:px-12 ${className}`}>
    <div className="max-w-5xl mx-auto">
      <h2 className="text-center font-display text-3xl md:text-4xl font-extrabold text-primary-red mb-12 tracking-tight">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

export default function YouthJourneyPage() {
  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      {/* Hero Section */}
      <header className="relative h-[70vh] flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img src="/images/bac-ho-banner.jpg" alt="Chủ tịch Hồ Chí Minh" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 p-10 bg-black/40 rounded-xl backdrop-blur-sm">
          <h1 className="font-display text-4xl md:text-6xl font-black tracking-tight">CHỦ TỊCH HỒ CHÍ MINH</h1>
          <p className="mt-2 text-lg md:text-xl text-white/90">Vị lãnh tụ vĩ đại của dân tộc Việt Nam</p>
        </div>
      </header>

      <main>
        {/* Quê hương */}
        <Section id="quehuong" title="Quê hương" className="bg-gray-50">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <img src="/images/lang-sen.jpg" alt="Làng Sen" className="w-full md:w-1/2 max-w-md rounded-xl shadow-lg" />
            <div className="flex-1 text-gray-700">
              <h3 className="font-display text-2xl font-bold mb-3 text-gray-900">Làng Sen - Nghệ An</h3>
              <p className="leading-relaxed">
                Hồ Chí Minh sinh ra tại Kim Liên, Nam Đàn, Nghệ An. Đây là vùng đất giàu truyền thống yêu nước, hiếu học và cách mạng, nơi nuôi dưỡng những phẩm chất cao đẹp đầu tiên của Người.
              </p>
            </div>
          </div>
        </Section>

        {/* Gia đình */}
        <Section id="giadinh" title="Gia đình">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl text-center border border-gray-100 shadow-sm">
              <img src="/images/nguyen-sinh-sac.jpg" alt="Nguyễn Sinh Sắc" className="w-full h-64 object-contain mb-4 rounded-lg bg-white p-2" />
              <h3 className="font-display text-lg font-bold text-gray-900">Nguyễn Sinh Sắc</h3>
              <p className="text-sm text-gray-600">Thân phụ của Chủ tịch Hồ Chí Minh.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center border border-gray-100 shadow-sm">
              <img src="/images/hoang-thi-loan.jpg" alt="Hoàng Thị Loan" className="w-full h-64 object-contain mb-4 rounded-lg bg-white p-2" />
              <h3 className="font-display text-lg font-bold text-gray-900">Hoàng Thị Loan</h3>
              <p className="text-sm text-gray-600">Thân mẫu của Chủ tịch Hồ Chí Minh.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center border border-gray-100 shadow-sm">
              <img src="/images/gia-dinh.jpg" alt="Gia đình" className="w-full h-64 object-contain mb-4 rounded-lg bg-white p-2" />
              <h3 className="font-display text-lg font-bold text-gray-900">Gia đình</h3>
              <p className="text-sm text-gray-600">Gia đình giàu truyền thống yêu nước.</p>
            </div>
          </div>
        </Section>

        {/* Thời niên thiếu */}
        <Section id="thieunien" title="Thời niên thiếu" className="bg-gray-50">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
            <img src="/images/quoc-hoc-hue.jpg" alt="Trường Quốc Học Huế" className="w-full md:w-1/2 max-w-md rounded-xl shadow-lg" />
            <div className="flex-1 text-gray-700 space-y-3 leading-relaxed">
              <h3 className="font-display text-2xl font-bold mb-3 text-gray-900">Quá trình học tập và trưởng thành</h3>
              <p>Từ nhỏ, Nguyễn Sinh Cung được học chữ Hán, Nho học và sau đó theo học chương trình Pháp - Việt. Người từng học tại Huế và Trường Quốc học Huế, một trong những ngôi trường danh tiếng nhất Việt Nam thời bấy giờ.</p>
              <p>Trong thời gian này, Người chứng kiến sự áp bức của thực dân Pháp, cuộc sống cơ cực của nhân dân và sự bất lực của triều đình phong kiến. Những trải nghiệm đó đã hình thành lòng yêu nước, ý chí giải phóng dân tộc và khát vọng tìm ra con đường cứu nước mới.</p>
            </div>
          </div>
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="relative border-l-4 border-primary-red pl-8">
              <div className="mb-8">
                <h4 className="font-display font-bold text-lg text-primary-red">1890</h4>
                <p className="text-gray-600">Sinh tại làng Hoàng Trù, Nam Đàn, Nghệ An.</p>
              </div>
              <div className="mb-8">
                <h4 className="font-display font-bold text-lg text-primary-red">1901</h4>
                <p className="text-gray-600">Theo gia đình vào Huế sau khi thân phụ đỗ Phó bảng.</p>
              </div>
              <div className="mb-8">
                <h4 className="font-display font-bold text-lg text-primary-red">1907</h4>
                <p className="text-gray-600">Học tại Trường Quốc học Huế.</p>
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-primary-red">1910</h4>
                <p className="text-gray-600">Dạy học tại trường Dục Thanh (Phan Thiết).</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Bến Nhà Rồng Banner */}
        <section id="nharong" className="relative py-32 text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/ben-nha-rong.jpg')" }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight">BẾN NHÀ RỒNG</h2>
            <p className="mt-4 text-lg md:text-xl leading-relaxed">
              Ngày 05/06/1911, Nguyễn Tất Thành với tên gọi Văn Ba lên tàu Amiral Latouche-Tréville rời Sài Gòn tìm đường cứu nước. Đây là bước ngoặt lịch sử mở đầu cho hơn 30 năm hoạt động cách mạng ở nước ngoài.
            </p>
            <blockquote className="mt-8 text-lg md:text-xl italic border-l-4 border-yellow-400 pl-4 text-left max-w-2xl mx-auto">
              "Tôi muốn đi ra ngoài, xem nước Pháp và các nước khác. Sau khi xem xét họ làm như thế nào, tôi sẽ trở về giúp đồng bào chúng ta."
            </blockquote>
          </div>
        </section>

        {/* Hành trình tìm đường cứu nước */}
        <Section id="hanhtrinh" title="Hành trình tìm đường cứu nước">
          <p className="max-w-3xl mx-auto text-center text-gray-600 mb-12">
            Từ năm 1911 đến năm 1941, Hồ Chí Minh đã đi qua nhiều quốc gia, vừa lao động, học tập vừa nghiên cứu các con đường cứu nước, để cuối cùng tìm ra con đường giải phóng dân tộc Việt Nam.
          </p>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-10 top-0 h-full w-1 bg-primary-red/20 rounded-full"></div>
            <div className="absolute left-12 top-0 h-full w-1 bg-primary-red/20 rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-10">

              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-20 text-right font-display font-bold text-primary-red"></div>
                <div className="flex-shrink-0 w-24 text-right font-display font-bold text-primary-red">1911</div>
                <div className="absolute left-[42px] top-1 w-3 h-3 bg-primary-red rounded-full border-2 border-white"></div>
                <div className="flex-1 bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-display font-bold text-primary-red mb-1">Việt Nam</h3>
                  <p className="text-sm text-gray-600">Rời Bến Nhà Rồng (Sài Gòn) bắt đầu hành trình tìm đường cứu nước.</p>
                </div>
              </div>

              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-20 text-right font-display font-bold text-primary-red"></div>
                <div className="flex-shrink-0 w-24 text-right font-display font-bold text-primary-red">1911</div>
                <div className="absolute left-[42px] top-1 w-3 h-3 bg-primary-red rounded-full border-2 border-white"></div>
                <div className="flex-1 bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-display font-bold text-primary-red mb-1">Singapore</h3>
                  <p className="text-sm text-gray-600">Một trong những điểm dừng chân đầu tiên trên hành trình ra nước ngoài.</p>
                </div>
              </div>

              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-20 text-right font-display font-bold text-primary-red"></div>
                <div className="flex-shrink-0 w-24 text-right font-display font-bold text-primary-red">1912-1913</div>
                <div className="absolute left-[42px] top-1 w-3 h-3 bg-primary-red rounded-full border-2 border-white"></div>
                <div className="flex-1 bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-display font-bold text-primary-red mb-1">Hoa Kỳ</h3>
                  <p className="text-sm text-gray-600">Làm nhiều nghề và tìm hiểu đời sống của nhân dân lao động.</p>
                </div>
              </div>

              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-20 text-right font-display font-bold text-primary-red"></div>
                <div className="flex-shrink-0 w-24 text-right font-display font-bold text-primary-red">1913-1917</div>
                <div className="absolute left-[42px] top-1 w-3 h-3 bg-primary-red rounded-full border-2 border-white"></div>
                <div className="flex-1 bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-display font-bold text-primary-red mb-1">Anh</h3>
                  <p className="text-sm text-gray-600">Sinh sống và làm việc tại London, tiếp tục học hỏi văn hóa phương Tây.</p>
                </div>
              </div>

              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-20 text-right font-display font-bold text-primary-red"></div>
                <div className="flex-shrink-0 w-24 text-right font-display font-bold text-primary-red">1917</div>
                <div className="absolute left-[42px] top-1 w-3 h-3 bg-primary-red rounded-full border-2 border-white"></div>
                <div className="flex-1 bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-display font-bold text-primary-red mb-1">Pháp</h3>
                  <p className="text-sm text-gray-600">Tham gia phong trào công nhân và phong trào yêu nước Việt Nam.</p>
                </div>
              </div>

              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-20 text-right font-display font-bold text-primary-red"></div>
                <div className="flex-shrink-0 w-24 text-right font-display font-bold text-primary-red">1923</div>
                <div className="absolute left-[42px] top-1 w-3 h-3 bg-primary-red rounded-full border-2 border-white"></div>
                <div className="flex-1 bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-display font-bold text-primary-red mb-1">Liên Xô</h3>
                  <p className="text-sm text-gray-600">Nghiên cứu chủ nghĩa Mác - Lênin và hoạt động trong phong trào cộng sản quốc tế.</p>
                </div>
              </div>

              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-20 text-right font-display font-bold text-primary-red"></div>
                <div className="flex-shrink-0 w-24 text-right font-display font-bold text-primary-red">1924</div>
                <div className="absolute left-[42px] top-1 w-3 h-3 bg-primary-red rounded-full border-2 border-white"></div>
                <div className="flex-1 bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-display font-bold text-primary-red mb-1">Trung Quốc</h3>
                  <p className="text-sm text-gray-600">Thành lập Hội Việt Nam Cách mạng Thanh niên, chuẩn bị cho sự ra đời của Đảng.</p>
                </div>
              </div>

              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-20 text-right font-display font-bold text-primary-red"></div>
                <div className="flex-shrink-0 w-24 text-right font-display font-bold text-primary-red">1928</div>
                <div className="absolute left-[42px] top-1 w-3 h-3 bg-primary-red rounded-full border-2 border-white"></div>
                <div className="flex-1 bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-display font-bold text-primary-red mb-1">Thái Lan</h3>
                  <p className="text-sm text-gray-600">Hoạt động trong cộng đồng Việt kiều và tuyên truyền cách mạng.</p>
                </div>
              </div>

              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-20 text-right font-display font-bold text-primary-red"></div>
                <div className="flex-shrink-0 w-24 text-right font-display font-bold text-primary-red">1941</div>
                <div className="absolute left-[42px] top-1 w-3 h-3 bg-primary-red rounded-full border-2 border-white"></div>
                <div className="flex-1 bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-display font-bold text-primary-red mb-1">Trở về Việt Nam</h3>
                  <p className="text-sm text-gray-600">Sau hơn 30 năm bôn ba, Người trở về Pác Bó (Cao Bằng) để trực tiếp lãnh đạo cách mạng.</p>
                </div>
              </div>

            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-red text-white text-center py-12">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-display text-2xl md:text-3xl font-bold italic">
            "Không có gì quý hơn độc lập, tự do"
          </p>
          <p className="mt-2 text-lg font-semibold tracking-wide">
            — Chủ tịch Hồ Chí Minh —
          </p>
        </div>
      </footer>
    </div>
  );
}