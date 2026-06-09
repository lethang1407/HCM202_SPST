// P5 - BẢO TÀNG TRỰC TUYẾN: THƯ VIỆN ẢNH & VIDEO
// Nội dung rút gọn từ tài liệu HCM202.docx

export interface MuseumPhoto {
  id: string;
  title: string;
  period: string;
  shortDesc: string;
  time: string;
  location: string;
  context: string;
  image: string;
}

export interface MuseumVideo {
  id: string;
  tab: 'lich-su' | 'tai-lieu';
  title: string;
  desc: string;
  duration: string;
  thumbnail: string;
}

// 1. Album Ảnh (Giao diện dạng Grid/Card)
export const museumPhotos: MuseumPhoto[] = [
  {
    id: 'card-1',
    title: 'Thời Niên Thiếu & Ra Đi Tìm Đường Cứu Nước',
    period: '1890 – 1911',
    shortDesc: 'Quê hương Kim Liên, Trường Quốc học Huế và Bến cảng Nhà Rồng.',
    time: '1890 – 1911',
    location: 'Nghệ An – Huế – Sài Gòn',
    context:
      'Tuổi thơ tại làng Sen (Kim Liên) thấm đượm truyền thống yêu nước, hiếu học. Người học tại Trường Quốc học Huế và ngày 5/6/1911 từ Bến cảng Nhà Rồng ra đi tìm đường cứu nước.',
    image: '/images/lang-sen.jpg',
  },
  {
    id: 'card-2',
    title: 'Hoạt Động Cách Mạng Quốc Tế',
    period: '1911 – 1941',
    shortDesc: 'Hành trình qua Pháp, Liên Xô, Trung Quốc và thành lập Đảng.',
    time: '1911 – 1941',
    location: 'Pháp – Liên Xô – Trung Quốc',
    context:
      'Bôn ba khắp năm châu, tiếp thu chủ nghĩa Mác – Lênin, sáng lập Hội Việt Nam Cách mạng Thanh niên (1925) và chủ trì Hội nghị thành lập Đảng Cộng sản Việt Nam (1930).',
    image: '/images/ben-nha-rong.jpg',
  },
  {
    id: 'card-3',
    title: 'Lãnh Đạo Giành Độc Lập',
    period: '1941 – 1945',
    shortDesc: 'Đầu nguồn Pác Bó, lán Nà Nưa và Quảng trường Ba Đình lịch sử.',
    time: '1941 – 1945',
    location: 'Cao Bằng – Tuyên Quang – Hà Nội',
    context:
      'Trở về nước năm 1941, xây dựng căn cứ địa Pác Bó, lãnh đạo Cách mạng Tháng Tám và đọc Tuyên ngôn Độc lập ngày 2/9/1945 tại Quảng trường Ba Đình.',
    image: '/images/hcm_timeline_4.jpg',
  },
  {
    id: 'card-4',
    title: 'Kháng Chiến & Xây Dựng Đất Nước',
    period: '1945 – 1969',
    shortDesc: 'Chiến khu Việt Bắc, Điện Biên Phủ và hoạt động xây dựng miền Bắc.',
    time: '1945 – 1969',
    location: 'Việt Bắc – Điện Biên – Hà Nội',
    context:
      'Lãnh đạo hai cuộc kháng chiến và công cuộc xây dựng chủ nghĩa xã hội ở miền Bắc, với đỉnh cao là chiến thắng Điện Biên Phủ lừng lẫy năm châu (1954).',
    image: '/images/hcm_timeline_5.jpg',
  },
  {
    id: 'card-5',
    title: 'Đời Sống Thường Ngày & Tình Cảm Với Nhân Dân',
    period: 'Tư liệu đời thường',
    shortDesc: 'Hình ảnh giản dị tại Nhà sàn, ao cá; tình yêu thương với thế hệ trẻ.',
    time: '1954 – 1969',
    location: 'Phủ Chủ tịch, Hà Nội',
    context:
      'Cuộc sống thanh bạch nơi Nhà sàn, ao cá Bác Hồ; tình cảm ấm áp dành cho đồng bào, chiến sĩ và đặc biệt là các cháu thiếu niên, nhi đồng.',
    image: '/images/bac-ho-banner.jpg',
  },
];

// 2. Video Tư Liệu (Giao diện dạng Video Grid/Slider)
export const museumVideoTabs = [
  { key: 'lich-su' as const, label: 'Thước Phim Lịch Sử (Gốc)' },
  { key: 'tai-lieu' as const, label: 'Phim Tài Liệu & Âm Thanh' },
];

export const museumVideos: MuseumVideo[] = [
  {
    id: 'v1',
    tab: 'lich-su',
    title: 'Ngày Độc lập 2/9/1945',
    desc: 'Thước phim gốc Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình.',
    duration: '04:12',
    thumbnail: '/images/hcm_timeline_4.jpg',
  },
  {
    id: 'v2',
    tab: 'lich-su',
    title: 'Các chuyến bang giao quốc tế',
    desc: 'Tư liệu về những chuyến thăm và hoạt động ngoại giao của Bác với bạn bè quốc tế.',
    duration: '06:30',
    thumbnail: '/images/singapore.jpg',
  },
  {
    id: 'v3',
    tab: 'lich-su',
    title: 'Lễ tang năm 1969',
    desc: 'Hình ảnh toàn dân tiếc thương trong Lễ tang Chủ tịch Hồ Chí Minh tháng 9/1969.',
    duration: '08:05',
    thumbnail: '/images/hcm_timeline_6.jpg',
  },
  {
    id: 'v4',
    tab: 'tai-lieu',
    title: 'Phim chân dung phục chế',
    desc: 'Phim tài liệu chân dung Chủ tịch Hồ Chí Minh được phục chế bằng công nghệ hiện đại.',
    duration: '12:48',
    thumbnail: '/images/hcm_homepage.jpg',
  },
  {
    id: 'v5',
    tab: 'tai-lieu',
    title: 'Băng ghi âm giọng nói của Bác',
    desc: 'Bản ghi âm giọng nói nguyên gốc của Chủ tịch Hồ Chí Minh qua các bài phát biểu.',
    duration: '03:20',
    thumbnail: '/images/hcm_1.png',
  },
  {
    id: 'v6',
    tab: 'tai-lieu',
    title: 'Thơ chúc Tết của Bác',
    desc: 'Những vần thơ chúc Tết thân thương Bác gửi đồng bào và chiến sĩ cả nước mỗi độ xuân về.',
    duration: '05:15',
    thumbnail: '/images/bac-ho-banner.jpg',
  },
];
