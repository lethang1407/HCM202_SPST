import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Heart, Star, HelpCircle, Search, Info, Award, PenTool } from 'lucide-react';
import { ideologyData } from '../data/ideologyData';

// Custom QuoteBox Component
const QuoteBox: React.FC<{ quote: string; citation?: string }> = ({ quote, citation }) => (
  <div className="bg-amber-50/60 border-l-4 border-primary-red p-6 my-6 rounded-r-xl shadow-sm italic relative font-display">
    <span className="absolute top-2 left-2 text-primary-red/10 text-5xl select-none pointer-events-none">“</span>
    <p className="text-gray-800 leading-relaxed text-lg pl-4 z-10 relative">
      {quote}
    </p>
    {citation && (
      <p className="text-right text-xs text-gray-500 mt-2 font-sans not-italic font-medium">
        — {citation}
      </p>
    )}
  </div>
);

// Footnote Tooltip Component
const Footnote: React.FC<{ id: string; number: number; text: string }> = ({ id, number, text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <span className="relative inline-block ml-0.5 group">
      <button
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="text-primary-red font-bold text-xs hover:underline cursor-pointer focus:outline-none -top-1 relative px-0.5"
        id={`fnref-${id}`}
      >
        [{number}]
      </button>
      {showTooltip && (
        <span
          className="absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl leading-normal border border-gray-800 transition-opacity duration-200 animate-fadeIn"
          role="tooltip"
        >
          <span className="font-semibold text-amber-400 block mb-1">Chú thích [{number}]:</span>
          {text}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></span>
        </span>
      )}
    </span>
  );
};

export default function IdeologyPage() {
  const [activeSection, setActiveSection] = useState('phan1');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<{ id: string; text: string; sectionName: string; targetId: string }[]>([]);
  const [highlights, setHighlights] = useState<string[]>([]);

  // Flashcard state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Load highlights from LocalStorage
  useEffect(() => {
    const savedHighlights = localStorage.getItem('hcm_ideology_highlights');
    if (savedHighlights) {
      setHighlights(JSON.parse(savedHighlights));
    }
  }, []);

  // Custom Scrollspy to highlight active sidebar item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['phan1', 'phan2', 'phan3', 'phan4', 'daoduc', 'ontap', 'tailieu'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle local text search over all paragraphs
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchTerm.toLowerCase();
    const results: { id: string; text: string; sectionName: string; targetId: string }[] = [];

    // Search in Chapter 5 - phan 1
    ideologyData.chuong_5.muc_I.phan_1.muc_a.noi_dung_nguyen_van.forEach((p, idx) => {
      if (p.toLowerCase().includes(query)) {
        results.push({ id: `ch5-p1-${idx}`, text: p, sectionName: 'I.1. Vai trò của đại đoàn kết', targetId: 'phan1' });
      }
    });

    // Search in Chapter 5 - phan 2
    ideologyData.chuong_5.muc_I.phan_2.muc_a.noi_dung_nguyen_van.forEach((p, idx) => {
      if (p.toLowerCase().includes(query)) {
        results.push({ id: `ch5-p2a-${idx}`, text: p, sectionName: 'I.2. Lực lượng (Chủ thể)', targetId: 'phan2' });
      }
    });
    ideologyData.chuong_5.muc_I.phan_2.muc_b.noi_dung_nguyen_van.forEach((p, idx) => {
      if (p.toLowerCase().includes(query)) {
        results.push({ id: `ch5-p2b-${idx}`, text: p, sectionName: 'I.2. Lực lượng (Nền tảng)', targetId: 'phan2' });
      }
    });

    // Search in Chapter 5 - phan 3
    ideologyData.chuong_5.muc_I.phan_3.noi_dung_nguyen_van.forEach((p, idx) => {
      if (p.toLowerCase().includes(query)) {
        results.push({ id: `ch5-p3-${idx}`, text: p, sectionName: 'I.3. Điều kiện xây dựng', targetId: 'phan3' });
      }
    });

    // Search in Chapter 5 - phan 4
    ideologyData.chuong_5.muc_I.phan_4.muc_a.noi_dung_nguyen_van.forEach((p, idx) => {
      if (p.toLowerCase().includes(query)) {
        results.push({ id: `ch5-p4a-${idx}`, text: p, sectionName: 'I.4. Mặt trận dân tộc thống nhất', targetId: 'phan4' });
      }
    });
    ideologyData.chuong_5.muc_I.phan_4.muc_b.noi_dung_nguyen_van.forEach((p, idx) => {
      if (p.toLowerCase().includes(query)) {
        results.push({ id: `ch5-p4b-${idx}`, text: p, sectionName: 'I.4. Nguyên tắc hoạt động', targetId: 'phan4' });
      }
    });

    // Search in Chapter 6 - phan 2 - muc b
    ideologyData.chuong_6.muc_II.phan_2.muc_b.noi_dung_nguyen_van.forEach((p, idx) => {
      if (p.toLowerCase().includes(query)) {
        results.push({ id: `ch6-p-${idx}`, text: p, sectionName: 'II. Chuẩn mực đạo đức cách mạng', targetId: 'daoduc' });
      }
    });

    // Search in 4 Virtues detail
    const details = ideologyData.chuong_6.muc_II.phan_2.muc_b.chi_tiet_4_pham_chat;
    if (details) {
      Object.entries(details).forEach(([key, value]) => {
        if (value.nguyen_van.toLowerCase().includes(query)) {
          results.push({
            id: `virtue-${key}`,
            text: value.nguyen_van,
            sectionName: `II. Đạo đức (Phẩm chất ${key.toUpperCase()})`,
            targetId: 'daoduc'
          });
        }
      });
    }

    setSearchResults(results);
  }, [searchTerm]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const toggleHighlight = (textId: string) => {
    let updated = [...highlights];
    if (updated.includes(textId)) {
      updated = updated.filter(id => id !== textId);
    } else {
      updated.push(textId);
    }
    setHighlights(updated);
    localStorage.setItem('hcm_ideology_highlights', JSON.stringify(updated));
  };

  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === query.toLowerCase()
            ? <mark key={i} className="bg-yellow-200 text-gray-900 rounded-sm px-0.5">{part}</mark>
            : part
        )}
      </>
    );
  };

  const virtuesData = ideologyData.chuong_6.muc_II.phan_2.muc_b.chi_tiet_4_pham_chat;

  // Flashcards Data based on the textbook text
  const flashcards = [
    {
      question: "Chủ thể của khối đại đoàn kết toàn dân tộc theo Hồ Chí Minh bao gồm những ai?",
      answer: "Bao gồm toàn thể nhân dân, tất cả những người Việt Nam yêu nước ở các giai cấp, các tầng lớp trong xã hội, các ngành, các lứa tuổi, các dân tộc, đồng bào các tôn giáo, các đảng phái, v.v. “ai có tài, có đức, có sức, có lòng phụng sự Tổ quốc và phục vụ nhân dân thì ta đoàn kết với họ”."
    },
    {
      question: "Lực lượng nào làm nền tảng cho khối đại đoàn kết toàn dân tộc theo quan điểm của Người?",
      answer: "Là liên minh công nhân - nông dân - trí thức. Hồ Chí Minh chỉ rõ: “Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân, mà đại đa số nhân dân là công nhân, nông dân và các tầng lớp nhân dân lao động khác. Đó là nền, gốc của đại đoàn kết”."
    },
    {
      question: "Để quy tụ được khối đại đoàn kết, Hồ Chí Minh yêu cầu phải bảo đảm những điều kiện cốt lõi nào?",
      answer: "Một là, phải kế thừa truyền thống yêu nước, nhân nghĩa, đoàn kết của dân tộc. Hai là, phải có lòng khoan dung, độ lượng với con người (khoan hồng đại độ, nhận rằng đã là con Lạc cháu Hồng thì ai cũng có ít hay nhiều lòng ái quốc). Ba là, phải có niềm tin vào nhân dân."
    },
    {
      question: "Nêu các tên gọi khác nhau của Mặt trận dân tộc thống nhất qua các thời kỳ lịch sử?",
      answer: "Hội Phản đế đồng minh (1930); Mặt trận dân chủ (1936); Mặt trận nhân dân phản đế (1939); Mặt trận Việt Minh (1941); Mặt trận Liên Việt (1951); Mặt trận dân tộc giải phóng miền Nam Việt Nam (1960); Mặt trận Tổ quốc Việt Nam (1955, 1976)."
    },
    {
      question: "Mặt trận dân tộc thống nhất hoạt động dựa trên các nguyên tắc cơ bản nào?",
      answer: "1. Xây dựng trên nền tảng liên minh công - nông - trí thức, dưới sự lãnh đạo của Đảng. 2. Xuất phát từ mục tiêu vì nước, vì dân (lấy lợi ích tối cao của dân tộc, lợi ích căn bản của nhân dân làm mục tiêu). 3. Hoạt động theo nguyên tắc hiệp thương dân chủ. 4. Đoàn kết lâu dài, chặt chẽ, chân thành, thân ái giúp đỡ nhau cùng tiến bộ."
    },
    {
      question: "Trong chuẩn mực đạo đức cách mạng, Hồ Chí Minh định nghĩa về \"Cần\" và \"Kiệm\" như thế nào?",
      answer: "“Cần tức là siêng năng, chăm chỉ, cố gắng dẻo dai”, lao động có kế hoạch, sáng tạo, năng suất cao. “Kiệm là tiết kiệm, không xa xỉ, không hoang phí, không bừa bãi”, không bủn xỉn. “Cần với kiệm, phải đi đôi với nhau, như hai chân của con người”."
    },
    {
      question: "Trong chuẩn mực đạo đức cách mạng, Hồ Chí Minh định nghĩa về \"Liêm\" và \"Chính\" như thế nào?",
      answer: "“Liêm là trong sạch, không tham lam”, không tham địa vị, tiền tài, sung sướng, sự tâng bốc. “Chính nghĩa là không tà, nghĩa là thẳng thắn, đứng đắn”, đối với mình chớ tự kiêu tự đại, đối với người thái độ chân thành khiêm tốn, đối với việc để việc nước lên trên việc tư."
    }
  ];

  return (
    <div className="bg-[#fcfbf7] min-h-screen text-gray-800 font-sans antialiased selection:bg-rose-100 selection:text-primary-red">

      {/* Hero Section */}
      <header className="relative h-[45vh] flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="/images/hcm_homepage.jpg"
          alt="Tư tưởng Hồ Chí Minh"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-20 p-8 max-w-4xl mx-auto">
          <span className="text-amber-400 font-display font-bold uppercase tracking-widest text-sm bg-primary-red/80 px-4 py-1.5 rounded-full inline-block mb-4">
          </span>
          <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐẠI ĐOÀN KẾT DÂN TỘC & ĐẠO ĐỨC CÁCH MẠNG
          </h1>
          <p className="mt-4 text-xs md:text-sm text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Trích Tư tưởng Hồ Chí Minh của Bộ Giáo dục & Đào tạo.
          </p>
        </div>
      </header>

      {/* Main Content & Sidebar Grid */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT SIDEBAR: Sticky Table of Contents */}
          <aside className="w-full lg:w-1/4 lg:shrink-0">
            <div className="lg:sticky lg:top-24 bg-white border border-amber-100 rounded-2xl p-6 shadow-sm museum-shadow max-h-[calc(100vh-140px)] overflow-y-auto no-scrollbar">
              <h3 className="font-display font-extrabold text-gray-900 text-sm mb-4 flex items-center gap-2 border-b border-amber-50 pb-2">
                <BookOpen className="w-4 h-4 text-primary-red" />
                Mục lục
              </h3>

              <div className="space-y-4">
                {/* Section I */}
                <div>
                  <h4 className="text-[10px] font-bold text-amber-700 uppercase tracking-wider mb-2">I. Đại đoàn kết dân tộc</h4>
                  <nav className="space-y-1">
                    <button
                      onClick={() => scrollToSection('phan1')}
                      className={`w-full text-left px-3 py-1.5 rounded-lg font-medium transition-all text-xs cursor-pointer ${activeSection === 'phan1' ? 'bg-primary-red text-white shadow-sm' : 'text-gray-600 hover:bg-amber-50/50 hover:text-primary-red'
                        }`}
                    >
                      1. Vai trò của đại đoàn kết
                    </button>
                    <button
                      onClick={() => scrollToSection('phan2')}
                      className={`w-full text-left px-3 py-1.5 rounded-lg font-medium transition-all text-xs cursor-pointer ${activeSection === 'phan2' ? 'bg-primary-red text-white shadow-sm' : 'text-gray-600 hover:bg-amber-50/50 hover:text-primary-red'
                        }`}
                    >
                      2. Lực lượng & Nền tảng
                    </button>
                    <button
                      onClick={() => scrollToSection('phan3')}
                      className={`w-full text-left px-3 py-1.5 rounded-lg font-medium transition-all text-xs cursor-pointer ${activeSection === 'phan3' ? 'bg-primary-red text-white shadow-sm' : 'text-gray-600 hover:bg-amber-50/50 hover:text-primary-red'
                        }`}
                    >
                      3. Điều kiện để xây dựng
                    </button>
                    <button
                      onClick={() => scrollToSection('phan4')}
                      className={`w-full text-left px-3 py-1.5 rounded-lg font-medium transition-all text-xs cursor-pointer ${activeSection === 'phan4' ? 'bg-primary-red text-white shadow-sm' : 'text-gray-600 hover:bg-amber-50/50 hover:text-primary-red'
                        }`}
                    >
                      4. Mặt trận & Nguyên tắc
                    </button>
                  </nav>
                </div>

                {/* Section II */}
                <div>
                  <h4 className="text-[10px] font-bold text-amber-700 uppercase tracking-wider mb-2">II. Đạo đức cách mạng</h4>
                  <nav className="space-y-1">
                    <button
                      onClick={() => scrollToSection('daoduc')}
                      className={`w-full text-left px-3 py-1.5 rounded-lg font-medium transition-all text-xs cursor-pointer ${activeSection === 'daoduc' ? 'bg-primary-red text-white shadow-sm' : 'text-gray-600 hover:bg-amber-50/50 hover:text-primary-red'
                        }`}
                    >
                      Chuẩn mực Cần Kiệm Liêm Chính
                    </button>
                  </nav>
                </div>

                {/* Interactive modules */}
                <div>
                  <h4 className="text-[10px] font-bold text-amber-700 uppercase tracking-wider mb-2">Tiện ích</h4>
                  <nav className="space-y-1">
                    <button
                      onClick={() => scrollToSection('ontap')}
                      className={`w-full text-left px-3 py-1.5 rounded-lg font-medium transition-all text-xs cursor-pointer ${activeSection === 'ontap' ? 'bg-primary-red text-white shadow-sm' : 'text-gray-600 hover:bg-amber-50/50 hover:text-primary-red'
                        }`}
                    >
                      III. Flashcards
                    </button>
                    <button
                      onClick={() => scrollToSection('tailieu')}
                      className={`w-full text-left px-3 py-1.5 rounded-lg font-medium transition-all text-xs cursor-pointer ${activeSection === 'tailieu' ? 'bg-primary-red text-white shadow-sm' : 'text-gray-600 hover:bg-amber-50/50 hover:text-primary-red'
                        }`}
                    >
                      IV. Tài liệu tham khảo
                    </button>
                  </nav>
                </div>
              </div>

              {/* Student features helper */}
              {/* <div className="mt-6 pt-4 border-t border-amber-100/60 bg-amber-50/40 p-3 rounded-xl text-[11px] text-amber-900/80 leading-normal">
                <div className="flex gap-2 mb-1.5 font-semibold text-gray-900">
                  <PenTool className="w-3.5 h-3.5 text-primary-red shrink-0" />
                  <span>Chế độ đọc chủ động:</span>
                </div>
                <p className="mb-1">1. Nhấp đúp chuột vào bất kỳ đoạn văn nào để **đánh dấu màu vàng** (lưu cục bộ).</p>
                <p>2. Rê chuột lên các số chú thích để xem nguồn dẫn.</p>
              </div> */}
            </div>
          </aside>

          {/* RIGHT CONTENT AREA: Dynamic Textbook Sections */}
          <div className="w-full lg:w-3/4 space-y-12">

            {/* SEARCH CONTAINER */}
            <div className="bg-white border border-amber-100 rounded-2xl p-5 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-100/50 text-primary-red">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-900 text-sm">Tìm kiếm</h4>
                    <p className="text-xs text-gray-500">Tra cứu nhanh trích dẫn hoặc khái niệm cụ thể</p>
                  </div>
                </div>
                <div className="relative w-full md:w-80">
                  <input
                    type="text"
                    placeholder="Nhập từ khóa cần tra cứu... "
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full text-xs pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-red bg-gray-50/50"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                </div>
              </div>

              {/* SEARCH RESULTS DROPDOWN */}
              {searchResults.length > 0 && (
                <div className="mt-4 border-t border-gray-100 pt-4 max-h-60 overflow-y-auto space-y-3">
                  <p className="text-xs font-semibold text-gray-500">Tìm thấy {searchResults.length} kết quả khớp:</p>
                  {searchResults.map((result, idx) => (
                    <div
                      key={idx}
                      onClick={() => scrollToSection(result.targetId)}
                      className="p-3 bg-amber-50/30 hover:bg-amber-50 rounded-xl cursor-pointer transition-all border border-amber-100/40"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-primary-red uppercase bg-red-50 px-2 py-0.5 rounded">
                          {result.sectionName}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {highlightText(result.text, searchTerm)}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* MAIN BOOK CHAPTER V HEADER */}
            <div className="bg-primary-red text-white p-8 rounded-3xl shadow-sm text-center">
              <span className="text-amber-400 font-display font-bold uppercase tracking-widest text-[10px] bg-black/30 px-3 py-1 rounded-full">
              </span>
              <h2 className="font-display font-black text-lg md:text-xl lg:text-2xl mt-4 leading-tight">
                {ideologyData.chuong_5.tieu_de_chuong}
              </h2>
              <p className="text-xs text-white/70 mt-2 font-display uppercase font-bold tracking-wide">
                {ideologyData.chuong_5.muc_I.tieu_de}
              </p>
            </div>

            {/* SUB-SECTION 1: Vai trò */}
            <section id="phan1" className="bg-white border border-amber-100/60 rounded-3xl p-8 shadow-sm space-y-6">
              <div className="border-b border-amber-50 pb-4">
                <h3 className="font-display text-base md:text-lg font-black text-gray-900">
                  {ideologyData.chuong_5.muc_I.phan_1.tieu_de}
                </h3>
                <h4 className="font-display text-xs md:text-sm font-semibold text-primary-red mt-1">
                  {ideologyData.chuong_5.muc_I.phan_1.muc_a.tieu_de}
                </h4>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed text-xs md:text-sm">
                {ideologyData.chuong_5.muc_I.phan_1.muc_a.noi_dung_nguyen_van.map((paragraph, idx) => {
                  const textId = `ch5-p1-${idx}`;
                  const isHighlighted = highlights.includes(textId);

                  return (
                    <div
                      key={idx}
                      onDoubleClick={() => toggleHighlight(textId)}
                      className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${isHighlighted ? 'bg-yellow-100 border-l-2 border-yellow-400 shadow-sm' : 'hover:bg-amber-50/20'
                        }`}
                      title="Nhấp đúp chuột để đánh dấu đoạn văn"
                    >
                      <p>
                        {highlightText(paragraph, searchTerm)}
                        {idx === 0 && <Footnote id="fn1" number={1} text="Hồ Chí Minh: Toàn tập, Nxb. Chính trị quốc gia, Hà Nội, 2011, t.3, tr. 12" />}
                        {idx === 1 && <Footnote id="fn2" number={2} text="Hồ Chí Minh: Toàn tập, Nxb. Chính trị quốc gia, Hà Nội, 2011, t.10, tr. 56" />}
                      </p>
                    </div>
                  );
                })}

                <QuoteBox
                  quote="Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công."
                  citation="Hồ Chí Minh: Phát biểu tại Đại hội thống nhất Mặt trận Liên Việt, năm 1951."
                />
              </div>
            </section>

            {/* SUB-SECTION 2: Lực lượng & Nền tảng */}
            <section id="phan2" className="bg-white border border-amber-100/60 rounded-3xl p-8 shadow-sm space-y-6">
              <div className="border-b border-amber-50 pb-4">
                <h3 className="font-display text-base md:text-lg font-black text-gray-900">
                  {ideologyData.chuong_5.muc_I.phan_2.tieu_de}
                </h3>
              </div>

              {/* a. Chủ thể */}
              <div className="space-y-4">
                <h4 className="font-display text-xs md:text-sm font-bold text-primary-red border-l-2 border-primary-red pl-3">
                  {ideologyData.chuong_5.muc_I.phan_2.muc_a.tieu_de}
                </h4>
                <div className="space-y-3 text-gray-700 leading-relaxed text-xs md:text-sm">
                  {ideologyData.chuong_5.muc_I.phan_2.muc_a.noi_dung_nguyen_van.map((paragraph, idx) => {
                    const textId = `ch5-p2a-${idx}`;
                    const isHighlighted = highlights.includes(textId);

                    return (
                      <div
                        key={idx}
                        onDoubleClick={() => toggleHighlight(textId)}
                        className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${isHighlighted ? 'bg-yellow-100 border-l-2 border-yellow-400 shadow-sm' : 'hover:bg-amber-50/20'
                          }`}
                      >
                        <p>
                          {highlightText(paragraph, searchTerm)}
                          <Footnote id={`fn-p2a-${idx}`} number={1} text="Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục & Đào tạo, Nxb. Chính trị quốc gia Sự thật, Hà Nội." />
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* b. Nền tảng */}
              <div className="space-y-4 pt-4 border-t border-amber-50/60">
                <h4 className="font-display text-xs md:text-sm font-bold text-primary-red border-l-2 border-primary-red pl-3">
                  {ideologyData.chuong_5.muc_I.phan_2.muc_b.tieu_de}
                </h4>
                <div className="space-y-3 text-gray-700 leading-relaxed text-xs md:text-sm">
                  {ideologyData.chuong_5.muc_I.phan_2.muc_b.noi_dung_nguyen_van.map((paragraph, idx) => {
                    const textId = `ch5-p2b-${idx}`;
                    const isHighlighted = highlights.includes(textId);

                    return (
                      <div
                        key={idx}
                        onDoubleClick={() => toggleHighlight(textId)}
                        className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${isHighlighted ? 'bg-yellow-100 border-l-2 border-yellow-400 shadow-sm' : 'hover:bg-amber-50/20'
                          }`}
                      >
                        <p>
                          {highlightText(paragraph, searchTerm)}
                          {idx <= 3 ? (
                            <Footnote id={`fn-p2b-${idx}`} number={1} text="Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục & Đào tạo, Nxb. Chính trị quốc gia Sự thật, Hà Nội." />
                          ) : (
                            <Footnote id={`fn-p2b-${idx}`} number={2} text="Hồ Chí Minh: Toàn tập, Nxb. Chính trị quốc gia, Hà Nội, 2011." />
                          )}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* SUB-SECTION 3: Điều kiện để xây dựng */}
            <section id="phan3" className="bg-white border border-amber-100/60 rounded-3xl p-8 shadow-sm space-y-6">
              <div className="border-b border-amber-50 pb-4">
                <h3 className="font-display text-base md:text-lg font-black text-gray-900">
                  {ideologyData.chuong_5.muc_I.phan_3.tieu_de}
                </h3>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed text-xs md:text-sm">
                {ideologyData.chuong_5.muc_I.phan_3.noi_dung_nguyen_van.map((paragraph, idx) => {
                  const textId = `ch5-p3-${idx}`;
                  const isHighlighted = highlights.includes(textId);

                  return (
                    <div
                      key={idx}
                      onDoubleClick={() => toggleHighlight(textId)}
                      className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${isHighlighted ? 'bg-yellow-100 border-l-2 border-yellow-400 shadow-sm' : 'hover:bg-amber-50/20'
                        }`}
                    >
                      <p>
                        {highlightText(paragraph, searchTerm)}
                        {idx === 0 || idx === 1 || idx === 2 || idx === 3 || idx === 4 || idx === 5 || idx === 6 || idx === 7 || idx === 8 || idx === 9 || idx === 10 ? (
                          <Footnote id={`fn-p3-${idx}`} number={2} text="Hồ Chí Minh: Toàn tập, Nxb. Chính trị quốc gia, Hà Nội, 2011." />
                        ) : (
                          <Footnote id={`fn-p3-${idx}`} number={3} text="Văn kiện Mặt trận Tổ quốc Việt Nam." />
                        )}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SUB-SECTION 4: Hình thức tổ chức (Mặt trận dân tộc thống nhất) */}
            <section id="phan4" className="bg-white border border-amber-100/60 rounded-3xl p-8 shadow-sm space-y-6">
              <div className="border-b border-amber-50 pb-4">
                <h3 className="font-display text-base md:text-lg font-black text-gray-900">
                  {ideologyData.chuong_5.muc_I.phan_4.tieu_de}
                </h3>
              </div>

              {/* a. Mặt trận dân tộc thống nhất */}
              <div className="space-y-4">
                <h4 className="font-display text-xs md:text-sm font-bold text-primary-red border-l-2 border-primary-red pl-3">
                  {ideologyData.chuong_5.muc_I.phan_4.muc_a.tieu_de}
                </h4>
                <div className="space-y-3 text-gray-700 leading-relaxed text-xs md:text-sm">
                  {ideologyData.chuong_5.muc_I.phan_4.muc_a.noi_dung_nguyen_van.map((paragraph, idx) => {
                    const textId = `ch5-p4a-${idx}`;
                    const isHighlighted = highlights.includes(textId);

                    return (
                      <div
                        key={idx}
                        onDoubleClick={() => toggleHighlight(textId)}
                        className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${isHighlighted ? 'bg-yellow-100 border-l-2 border-yellow-400 shadow-sm' : 'hover:bg-amber-50/20'
                          }`}
                      >
                        <p>
                          {highlightText(paragraph, searchTerm)}
                          <Footnote id={`fn-p4a-${idx}`} number={3} text="Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục & Đào tạo, Nxb. Chính trị quốc gia Sự thật, Hà Nội." />
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* b. Nguyên tắc xây dựng và hoạt động */}
              <div className="space-y-4 pt-4 border-t border-amber-50/60">
                <h4 className="font-display text-xs md:text-sm font-bold text-primary-red border-l-2 border-primary-red pl-3">
                  {ideologyData.chuong_5.muc_I.phan_4.muc_b.tieu_de}
                </h4>
                <div className="space-y-3 text-gray-700 leading-relaxed text-xs md:text-sm">
                  {ideologyData.chuong_5.muc_I.phan_4.muc_b.noi_dung_nguyen_van.map((paragraph, idx) => {
                    const textId = `ch5-p4b-${idx}`;
                    const isHighlighted = highlights.includes(textId);

                    return (
                      <div
                        key={idx}
                        onDoubleClick={() => toggleHighlight(textId)}
                        className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${isHighlighted ? 'bg-yellow-100 border-l-2 border-yellow-400 shadow-sm' : 'hover:bg-amber-50/20'
                          }`}
                      >
                        <p>
                          {highlightText(paragraph, searchTerm)}
                          {idx <= 4 ? (
                            <Footnote id={`fn-p4b-${idx}`} number={3} text="Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục & Đào tạo, Nxb. Chính trị quốc gia Sự thật, Hà Nội." />
                          ) : idx <= 10 ? (
                            <Footnote id={`fn-p4b-${idx}`} number={4} text="Hồ Chí Minh: Toàn tập, Nxb. Chính trị quốc gia, Hà Nội, 2011." />
                          ) : (
                            <Footnote id={`fn-p4b-${idx}`} number={5} text="Tài liệu chuyên khảo Tư tưởng Hồ Chí Minh." />
                          )}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* MAIN BOOK CHAPTER VI HEADER */}
            <div className="bg-[#5d3e33] text-white p-8 rounded-3xl shadow-sm text-center">
              <span className="text-amber-400 font-display font-bold uppercase tracking-widest text-[10px] bg-black/30 px-3 py-1 rounded-full">
              </span>
              <h2 className="font-display font-black text-lg md:text-xl lg:text-2xl mt-4 leading-tight">
                {ideologyData.chuong_6.tieu_de_chuong}
              </h2>
              <p className="text-xs text-white/70 mt-2 font-display uppercase font-bold tracking-wide">
                {ideologyData.chuong_6.muc_II.tieu_de}
              </p>
            </div>

            {/* SECTION 2: Đạo đức (Chương VI) */}
            <section id="daoduc" className="bg-white border border-amber-100/60 rounded-3xl p-8 shadow-sm space-y-6">
              <div className="border-b border-amber-50 pb-4">
                <h3 className="font-display text-base md:text-lg font-black text-gray-900">
                  {ideologyData.chuong_6.muc_II.phan_2.tieu_de}
                </h3>
                <h4 className="font-display text-xs md:text-sm font-semibold text-primary-red mt-1">
                  {ideologyData.chuong_6.muc_II.phan_2.muc_b.tieu_de}
                </h4>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed text-xs md:text-sm">
                {ideologyData.chuong_6.muc_II.phan_2.muc_b.noi_dung_nguyen_van.map((paragraph, idx) => {
                  const textId = `ch6-p-${idx}`;
                  const isHighlighted = highlights.includes(textId);

                  return (
                    <div
                      key={idx}
                      onDoubleClick={() => toggleHighlight(textId)}
                      className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${isHighlighted ? 'bg-yellow-100 border-l-2 border-yellow-400 shadow-sm' : 'hover:bg-amber-50/20'
                        }`}
                      title="Double click để đánh dấu"
                    >
                      <p>
                        {highlightText(paragraph, searchTerm)}
                        {idx === 0 && <Footnote id="fn-ch6-1" number={3} text="Hồ Chí Minh: Toàn tập, Nxb. Chính trị quốc gia, Hà Nội, t.5, tr. 291" />}
                        {idx === 1 && <Footnote id="fn-ch6-2" number={4} text="Đường Kách Mệnh, Bản in của Nxb Chính trị Quốc gia, 1927" />}
                      </p>
                    </div>
                  );
                })}

                {/* 2x2 Grid of 4 Virtues (Cần - Kiệm - Liêm - Chính) */}
                {virtuesData && (
                  <div className="mt-8 pt-6 border-t border-amber-50 space-y-6">
                    <h3 className="font-display text-base font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-amber-500 fill-amber-500 animate-spin-slow" />
                      Bốn chuẩn mực đạo đức cách mạng:
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* CẦN */}
                      <div className="bg-amber-50/20 border border-amber-100 rounded-2xl p-6 shadow-sm relative hover:shadow-md transition-all">
                        <div className="absolute top-4 right-4 text-primary-red/10">
                          <Award className="w-8 h-8" />
                        </div>
                        <h4 className="font-display font-extrabold text-primary-red text-sm mb-2 uppercase tracking-wide">
                          CẦN (Cần cù, siêng năng)
                        </h4>
                        <div className="text-gray-800 leading-relaxed text-xs bg-white p-4 rounded-xl border border-amber-100/50 font-display italic">
                          {highlightText(virtuesData.can.nguyen_van, searchTerm)}
                        </div>
                      </div>

                      {/* KIỆM */}
                      <div className="bg-amber-50/20 border border-amber-100 rounded-2xl p-6 shadow-sm relative hover:shadow-md transition-all">
                        <div className="absolute top-4 right-4 text-primary-red/10">
                          <Award className="w-8 h-8" />
                        </div>
                        <h4 className="font-display font-extrabold text-primary-red text-sm mb-2 uppercase tracking-wide">
                          KIỆM (Tiết kiệm)
                        </h4>
                        <div className="text-gray-800 leading-relaxed text-xs bg-white p-4 rounded-xl border border-amber-100/50 font-display italic">
                          {highlightText(virtuesData.kiem.nguyen_van, searchTerm)}
                        </div>
                      </div>

                      {/* LIÊM */}
                      <div className="bg-amber-50/20 border border-amber-100 rounded-2xl p-6 shadow-sm relative hover:shadow-md transition-all">
                        <div className="absolute top-4 right-4 text-primary-red/10">
                          <Award className="w-8 h-8" />
                        </div>
                        <h4 className="font-display font-extrabold text-primary-red text-sm mb-2 uppercase tracking-wide">
                          LIÊM (Liêm khiết, trong sạch)
                        </h4>
                        <div className="text-gray-800 leading-relaxed text-xs bg-white p-4 rounded-xl border border-amber-100/50 font-display italic">
                          {highlightText(virtuesData.liem.nguyen_van, searchTerm)}
                        </div>
                      </div>

                      {/* CHÍNH */}
                      <div className="bg-amber-50/20 border border-amber-100 rounded-2xl p-6 shadow-sm relative hover:shadow-md transition-all">
                        <div className="absolute top-4 right-4 text-primary-red/10">
                          <Award className="w-8 h-8" />
                        </div>
                        <h4 className="font-display font-extrabold text-primary-red text-sm mb-2 uppercase tracking-wide">
                          CHÍNH (Chính trực, đứng đắn)
                        </h4>
                        <div className="text-gray-800 leading-relaxed text-xs bg-white p-4 rounded-xl border border-amber-100/50 font-display italic">
                          {highlightText(virtuesData.chinh.nguyen_van, searchTerm)}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* SECTION 3: Active Recall Flashcards */}
            <section id="ontap" className="bg-white border border-amber-100/60 rounded-3xl p-8 shadow-sm">
              <div className="border-b border-amber-50 pb-4 mb-6">
                <h2 className="font-display text-xl md:text-2xl font-black text-gray-900 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-primary-red animate-pulse" />
                  Quiz
                </h2>
                <p className="text-xs text-gray-500 mt-1">Flashcards</p>
              </div>

              {/* Flashcard Component */}
              <div className="max-w-2xl mx-auto">
                <div
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="relative h-80 w-full cursor-pointer perspective"
                >
                  <div className={`absolute w-full h-full duration-500 transform-style transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}>

                    {/* Front Side */}
                    <div className="absolute w-full h-full bg-gradient-to-br from-amber-50/50 to-amber-100/30 border-2 border-amber-200/50 rounded-2xl p-8 flex flex-col justify-between shadow-md backface-hidden">
                      <div className="flex justify-between items-center text-xs text-amber-800 font-semibold">
                        <span>CÂU HỎI {currentCardIndex + 1}/{flashcards.length}</span>
                        <span className="bg-amber-200/50 px-2 py-0.5 rounded">Mặt trước</span>
                      </div>
                      <p className="text-center font-display font-bold text-gray-800 text-sm md:text-base leading-relaxed my-auto">
                        {flashcards[currentCardIndex].question}
                      </p>
                      <p className="text-center text-xs text-gray-400 italic">Nhấp chuột để xem câu trả lời</p>
                    </div>

                    {/* Back Side */}
                    <div className="absolute w-full h-full bg-primary-red text-white border-2 border-primary-red rounded-2xl p-8 flex flex-col justify-between shadow-md rotate-y-180 backface-hidden">
                      <div className="flex justify-between items-center text-xs text-white/70 font-semibold">
                        <span>ĐÁP ÁN {currentCardIndex + 1}/{flashcards.length}</span>
                        <span className="bg-white/20 px-2 py-0.5 rounded">Mặt sau</span>
                      </div>
                      <p className="text-center font-display text-white text-xs md:text-sm leading-relaxed my-auto overflow-y-auto max-h-[180px] pr-1 scrollbar-thin">
                        {flashcards[currentCardIndex].answer}
                      </p>
                      <p className="text-center text-xs text-white/50 italic">Nhấp chuột để lật lại câu hỏi</p>
                    </div>

                  </div>
                </div>

                {/* Flashcard Controls */}
                <div className="flex justify-between items-center mt-6">
                  <button
                    onClick={() => {
                      setIsFlipped(false);
                      setCurrentCardIndex(prev => (prev > 0 ? prev - 1 : flashcards.length - 1));
                    }}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    Câu trước
                  </button>
                  <span className="text-xs font-bold text-gray-500">
                    Thẻ {currentCardIndex + 1} / {flashcards.length}
                  </span>
                  <button
                    onClick={() => {
                      setIsFlipped(false);
                      setCurrentCardIndex(prev => (prev < flashcards.length - 1 ? prev + 1 : 0));
                    }}
                    className="px-4 py-2 bg-primary-red hover:bg-red-800 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    Câu tiếp theo
                  </button>
                </div>
              </div>
            </section>

            {/* SECTION 4: Tài liệu tham khảo */}
            <section id="tailieu" className="bg-white border border-amber-100/60 rounded-3xl p-8 shadow-sm">
              <div className="border-b border-amber-50 pb-4 mb-6">
                <h2 className="font-display text-base md:text-lg font-bold text-gray-900 flex items-center gap-2">
                  Tài liệu tham khảo & Trích dẫn
                </h2>
              </div>
              <div className="space-y-4 text-xs md:text-sm text-gray-600">
                <p className="flex items-start gap-2.5">
                  <span className="text-primary-red font-bold">[1]</span>
                  <span>Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục & Đào tạo, Nxb. Chính trị quốc gia Sự thật, Hà Nội.</span>
                </p>
                <p className="flex items-start gap-2.5">
                  <span className="text-primary-red font-bold">[2]</span>
                  <span>Hồ Chí Minh: Toàn tập, Nxb. Chính trị quốc gia, Hà Nội, 2011, t.3, tr. 12 & t.10, tr. 56.</span>
                </p>
                <p className="flex items-start gap-2.5">
                  <span className="text-primary-red font-bold">[3]</span>
                  <span>Hồ Chí Minh: Toàn tập, Nxb. Chính trị quốc gia, Hà Nội, 2011, t.5, tr. 291.</span>
                </p>
                <p className="flex items-start gap-2.5">
                  <span className="text-primary-red font-bold">[4]</span>
                  <span>Đường Kách Mệnh, Bản in của Nxb Chính trị Quốc gia, 1927.</span>
                </p>
                <p className="flex items-start gap-2.5">
                  <span className="text-primary-red font-bold">[5]</span>
                  <span>Tài liệu chuyên khoa và Văn kiện Đảng Cộng sản Việt Nam qua các kỳ Đại hội.</span>
                </p>
              </div>
            </section>

          </div>

        </div>
      </main>
    </div>
  );
}
