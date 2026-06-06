import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Eye, Volume1, MapPin, Award, BookOpen, Compass } from 'lucide-react';

interface VirtualTourModalProps {
  onClose: () => void;
}

export default function VirtualTourModal({ onClose }: VirtualTourModalProps) {
  const [activeRoom, setActiveRoom] = useState(0);
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);

  const rooms = [
    {
      id: 'room-sen',
      name: 'Gian Phòng 1: Khởi nguồn & Quê hương Nghệ An',
      theme: 'Thời niên thiếu & Mái tranh nghèo Nam Đàn',
      image: 'https://images.unsplash.com/photo-1543872084-c7da3822851f?auto=format&fit=crop&w=1200&q=80',
      description: 'Nơi tái hiện nếp nhà tranh đơn sơ của ông Nguyễn Sinh Sắc và bà Hoàng Thị Loan, nơi lưu giữ chiếc võng tre ru hời và chiếc rương gỗ đơn sơ tủ sách chữ Hán.',
      hotspots: [
        { id: 'h-vong', label: 'Chiếc võng tre', description: 'Chiếc võng đan tre đơn sơ, nơi mẹ Hoàng Thị Loan đã hát ru bồng cậu bé Nguyễn Sinh Cung khôn lớn cùng những làn điệu dân ca ví giặm đằm thắm của xứ Nghệ phong sương.' },
        { id: 'h-ruong', label: 'Rương gỗ nhỏ', description: 'Vật dụng gia bảo lưu giữ sách vở, giấy bút nhà nho của cụ thân phụ Nguyễn Sinh Sắc dạy học viết chữ thời bấy giờ.' }
      ]
    },
    {
      id: 'room-tau',
      name: 'Gian Phòng 2: Ra đi tìm đường cứu nước 1911',
      theme: 'Bến cảng Nhà Rồng & Con tàu Amiral Latouche-Tréville',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
      description: 'Mô phỏng 3D boong tàu viễn dương nơi người thanh niên Văn Ba lao động vất vả, vượt qua sóng gió trùng khơi sang phương Tây mở lối cách mạng.',
      hotspots: [
        { id: 'h-bando', label: 'Bản đồ hàng hải', description: 'Chỉ dẫn chi tiết chiếc hải trình 30 năm vượt muôn ngàn trùng sóng dặm trường qua các cảng lớn ở Pháp, Anh, Mỹ, Liên Xô...' },
        { id: 'h-xoong', label: 'Góc bếp lò boong tàu', description: 'Góc trưng bày công việc làm bồi bếp khổ cực đêm đông của Người trên hành trình vượt biển tầm sư học đạo cách mạng.' }
      ]
    },
    {
      id: 'room-badinh',
      name: 'Gian Phòng 3: Ba Đình Độc Lập 1945',
      theme: 'Lễ đài khởi nguồn Cộng hòa & Bản Tuyên ngôn khai sinh',
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLuaAUERRXegD_BGTHCod--NWBXUE7HHJ4cSPMAIAnVj1djUzBCLPUkMetEz-jPgJ4cVTgYsBAh5RVPhuWrJhDgDGwgAM4Rt2gvWSRo9PM0alRpsmE9vOCODGZRWVC1OXng3GrYGwmxbbN7mc-De5qcOTO6bDpPSaFCC8lKAyY_6f1S-WB0hx3-S0YOeqdsSl5CWkzhlOCPRsAAMaS707FQFEuT9HjZ5EnthxwlicKW83jnmD6zpNoo0xR4',
      description: 'Sân khấu kỹ thuật số tái lập lại thời khắc lịch sử hào hùng ngày 2/9/1945. Có âm thanh mô phỏng tiếng hô vang độc lập của triệu đồng bào xung quanh.',
      hotspots: [
        { id: 'h-micro', label: 'Chiếc Micro lịch sử', description: 'Chiếc micro gắn liền với câu nói đầm ấm, thân thương vang động Ba Đình: "Tôi nói đồng bào nghe rõ không?".' },
        { id: 'h-ao', label: 'Bộ áo kaki giản dị', description: 'Bộ quần áo Kaki bạc màu đơn sơ Chủ tịch nước mặc trong buổi tuyên ngôn lập quốc khai sinh nước Việt Nam.' }
      ]
    }
  ];

  const handleNextRoom = () => {
    setSelectedHotspot(null);
    setActiveRoom((prev) => (prev + 1) % rooms.length);
  };

  const handlePrevRoom = () => {
    setSelectedHotspot(null);
    setActiveRoom((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  const currentRoom = rooms[activeRoom];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8 backdrop-blur-md animate-fadeIn">
      
      {/* Outer Close and watermark */}
      <div className="absolute top-4 left-6 text-white text-xs font-sans font-bold flex items-center gap-2 select-none tracking-widest uppercase">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
        Hệ thống giả lập triển lãm 3D
      </div>

      <button 
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center cursor-pointer transition-all border border-white/10 z-50"
        title="Đóng chế độ tham quan ảo"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Main Container Stage */}
      <div className="max-w-6xl w-full bg-zinc-950 rounded-2xl border border-white/5 overflow-hidden shadow-2xl flex flex-col md:flex-row h-[85vh] items-stretch">
        
        {/* Left Interactive 3D Room Screen Viewbox */}
        <div className="flex-1 bg-black relative flex items-center justify-center group/screen overflow-hidden">
          <img 
            src={currentRoom.image} 
            alt={currentRoom.name} 
            className="w-full h-full object-cover opacity-60 brightness-[0.7] blur-[1px] group-hover/screen:scale-101 group-hover/screen:blur-0 transition-all duration-700 select-none"
          />

          {/* Glowing interactible hotspots */}
          {currentRoom.hotspots.map((spot, idx) => (
            <div 
              key={spot.id} 
              style={{ 
                top: idx === 0 ? '45%' : '65%', 
                left: idx === 0 ? '30%' : '70%' 
              }}
              className="absolute pointer-events-auto"
            >
              {/* Ripple glowing button */}
              <button 
                onClick={() => setSelectedHotspot(selectedHotspot === spot.id ? null : spot.id)}
                className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer relative transition-all border-2 ${
                  selectedHotspot === spot.id 
                    ? 'bg-yellow-400 border-yellow-300 text-yellow-980 ring-4 ring-yellow-400/30' 
                    : 'bg-primary-red/80 border-white text-white shadow-lg animate-bounce'
                }`}
              >
                <span className="material-symbols-outlined text-sm">filter_center_focus</span>
              </button>
              
              {/* Hover tiny tag */}
              <span className="absolute top-12 left-1/2 -translate-x-1/2 bg-black/85 text-[10px] text-white px-2 py-0.5 rounded font-display whitespace-nowrap shadow border border-white/10 select-none">
                {spot.label}
              </span>
            </div>
          ))}

          {/* Quick instructions HUD banner overlay */}
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur border border-white/10 p-3 rounded-lg text-white pointer-events-none select-none text-xs flex flex-col gap-1 z-20">
            <span className="text-yellow-400 font-bold flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 animate-spin [animation-duration:8s]" />
              Hướng dẫn tham quan số:
            </span>
            <span className="text-gray-300">Nhấp vào các điểm nhấp nháy 🔴 để phóng đại tư liệu vật phẩm trưng bày.</span>
          </div>

          {/* Hotspot details readout overlay popup */}
          {selectedHotspot && (
            <div className="absolute bottom-6 left-6 right-6 bg-[#1A1A1A]/95 border border-yellow-300/30 backdrop-blur-md p-5 rounded-xl shadow-2xl text-white animate-slideUp z-30 flex gap-4 items-start max-w-lg">
              <div className="w-10 h-10 rounded-full bg-yellow-400/10 text-yellow-300 flex items-center justify-center flex-shrink-0 border border-yellow-300/20">
                <span className="material-symbols-outlined text-lg">fact_check</span>
              </div>
              <div>
                <h4 className="font-display font-bold text-yellow-300 text-sm md:text-base mb-1">
                  {currentRoom.hotspots.find(x => x.id === selectedHotspot)?.label}
                </h4>
                <p className="font-sans text-xs text-gray-200 leading-relaxed">
                  {currentRoom.hotspots.find(x => x.id === selectedHotspot)?.description}
                </p>
                <button 
                  onClick={() => setSelectedHotspot(null)}
                  className="mt-3 text-[11px] text-gray-400 hover:text-white underline cursor-pointer transition-colors"
                >
                  Đóng tài liệu
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Curation metadata controls panel */}
        <div className="w-full md:w-80 bg-zinc-900 text-white p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <span className="text-primary-red text-xs font-bold tracking-wider uppercase font-sans flex items-center gap-1 mb-2">
              <MapPin className="w-3.5 h-3.5" />
              Không gian số VR/AR
            </span>

            <h3 className="font-display text-xl font-black text-white leading-snug tracking-tight mb-2">
              {currentRoom.name}
            </h3>

            <p className="text-yellow-400 font-sans text-xs font-bold mb-4">
              ✨ Chủ đề: {currentRoom.theme}
            </p>

            <p className="text-gray-300 font-sans text-xs md:text-sm leading-relaxed mb-6">
              {currentRoom.description}
            </p>

            {/* Quick stats indicators inside exhibitions */}
            <div className="space-y-3 pt-4 border-t border-white/5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400 font-sans">Độ phân giải di sản:</span>
                <span className="text-green-400 font-sans font-bold">UltraHD 4K</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400 font-sans">Âm thanh phối khí:</span>
                <span className="text-gray-200 font-sans">Bật tự động</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400 font-sans">Trình kết nối:</span>
                <span className="text-yellow-400 bg-yellow-450/10 px-2 py-0.5 rounded font-display font-medium text-[10px]">Premium 3D</span>
              </div>
            </div>
          </div>

          {/* Navigation Room steps */}
          <div className="mt-8">
            {/* Step navigation dots bar */}
            <div className="flex gap-1.5 justify-center mb-4">
              {rooms.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all ${i === activeRoom ? 'w-6 bg-primary-red' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevRoom}
                className="flex-1 flex items-center justify-center gap-1 bg-white/5 border border-white/10 py-2.5 rounded-lg text-xs hover:bg-white/10 transition-colors uppercase font-bold cursor-pointer"
                title="Phòng trước"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Quay lại
              </button>
              <button
                onClick={handleNextRoom}
                className="flex-1 flex items-center justify-center gap-1 bg-primary-red py-2.5 rounded-lg text-xs text-white hover:bg-primary-red/90 transition-colors uppercase font-bold cursor-pointer"
                title="Phòng tiếp theo"
              >
                Tiếp tục
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
