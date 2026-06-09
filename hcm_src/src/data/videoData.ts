// ============================================================================
//  P5 - BẢO TÀNG TRỰC TUYẾN  ·  Dữ liệu "Video Tư Liệu"
// ----------------------------------------------------------------------------
//  LƯU Ý: Các giá trị `youtubeId` dưới đây là ID MẪU để minh hoạ giao diện.
//  Hãy thay bằng ID video chính thức đã kiểm chứng (lấy phần sau "v=" trong
//  link YouTube, ví dụ https://www.youtube.com/watch?v=XXXXXXXXXXX -> youtubeId: "XXXXXXXXXXX").
//  Nếu để trống youtubeId, trình chiếu sẽ hiển thị nút mở tìm kiếm trên YouTube.
// ============================================================================

export type VideoTabKey = 'lichsu' | 'tailieu';

export interface VideoItem {
  id: string;
  tab: VideoTabKey;
  youtubeId: string;
  thumbnail: string;
  duration?: string;
  /** [Tiêu đề] */
  title: string;
  titleEn: string;
  /** [Thời gian] Ngày/Tháng/Năm hoặc Thập niên */
  time: string;
  timeEn: string;
  /** [Địa điểm] Nơi diễn ra sự kiện */
  location: string;
  locationEn: string;
  /** [Bối cảnh] Đoạn thuyết minh ngắn (2 - 3 câu) */
  context: string;
  contextEn: string;
}

export const videoTabs: { key: VideoTabKey; label: string; sub: string }[] = [
  { key: 'lichsu', label: 'Thước phim lịch sử (Gốc)', sub: 'Ngày Độc lập 2/9, các chuyến bang giao quốc tế, Lễ tang năm 1969.' },
  { key: 'tailieu', label: 'Phim tài liệu & Âm thanh', sub: 'Phim chân dung phục chế, băng ghi âm giọng nói và thơ chúc Tết của Bác.' },
];

export const videoData: VideoItem[] = [
  // ----------------------------- TAB 1: Thước phim lịch sử (gốc) -----------------------------
  {
    id: 'v-doclap-1945',
    tab: 'lichsu',
    youtubeId: 'https://youtu.be/SCPphVYDPDk?si=kzIXrOjFhso9F-Io',
    thumbnail: 'https://hochiminh.vn/upload/3000001/20251024/f4fce6430c5a04ed65f2a3cae22eff3d51.jpg',
    duration: '7:00',
    title: 'Ngày Độc lập 2/9/1945 – Đọc Tuyên ngôn Độc lập',
    titleEn: 'Independence Day 2 Sep 1945 – Reading the Declaration of Independence',
    time: '02/09/1945',
    timeEn: 'September 2, 1945',
    location: 'Quảng trường Ba Đình, Hà Nội',
    locationEn: 'Ba Dinh Square, Hanoi',
    context:
      'Thước phim lịch sử ghi lại khoảnh khắc Chủ tịch Hồ Chí Minh thay mặt Chính phủ Lâm thời đọc bản Tuyên ngôn Độc lập. Sự kiện khai sinh nước Việt Nam Dân chủ Cộng hòa trước hàng vạn đồng bào.',
    contextEn:
      'Historical footage of President Ho Chi Minh reading the Declaration of Independence on behalf of the Provisional Government, marking the birth of the Democratic Republic of Vietnam before tens of thousands of people.',
  },
  {
    id: 'v-banggiao-quocte',
    tab: 'lichsu',
    youtubeId: 'https://www.youtube.com/watch?v=Utj19iGD3B4',
    thumbnail: 'https://hochiminh.vn/upload/3000001/20251024/90d2eaa6bdfecfd5b12f837df6cdb6ec23.jpg',
    duration: '5:30',
    title: 'Các chuyến bang giao quốc tế',
    titleEn: 'International Diplomatic Visits',
    time: 'Thập niên 1950 – 1960',
    timeEn: '1950s – 1960s',
    location: 'Pháp, Liên Xô, Trung Quốc, Ấn Độ…',
    locationEn: 'France, USSR, China, India…',
    context:
      'Tư liệu về hoạt động đối ngoại của Chủ tịch Hồ Chí Minh: tiếp đón các đoàn đại biểu quốc tế và những chuyến công du nhằm tranh thủ sự ủng hộ của bạn bè thế giới đối với cách mạng Việt Nam.',
    contextEn:
      'Footage of President Ho Chi Minh’s diplomacy: receiving international delegations and undertaking state visits to win global support for the Vietnamese revolution.',
  },
  {
    id: 'v-letang-1969',
    tab: 'lichsu',
    youtubeId: 'https://www.youtube.com/watch?v=c2O_G-q0iWE',
    thumbnail: '/images/hcm_timeline_6.jpg',
    duration: '9:15',
    title: 'Lễ tang Chủ tịch Hồ Chí Minh',
    titleEn: 'The State Funeral of President Ho Chi Minh',
    time: '09/1969',
    timeEn: 'September 1969',
    location: 'Quảng trường Ba Đình, Hà Nội',
    locationEn: 'Ba Dinh Square, Hanoi',
    context:
      'Thước phim ghi lại Lễ Quốc tang Chủ tịch Hồ Chí Minh trong niềm tiếc thương vô hạn của toàn dân tộc và bạn bè quốc tế. Người ra đi để lại bản Di chúc lịch sử thiêng liêng.',
    contextEn:
      'Footage of the national funeral of President Ho Chi Minh amid the profound grief of the whole nation and international friends. He left behind his sacred historic Testament.',
  },

  // ----------------------------- TAB 2: Phim tài liệu & Âm thanh -----------------------------
  {
    id: 'v-chandung-phuche',
    tab: 'tailieu',
    youtubeId: 'https://youtu.be/SCPphVYDPDk?si=kzIXrOjFhso9F-Io',
    thumbnail: '/images/hcm_1.png',
    duration: '12:40',
    title: 'Phim chân dung phục chế (màu)',
    titleEn: 'Restored Colour Portrait Documentary',
    time: 'Phục chế hiện đại',
    timeEn: 'Modern restoration',
    location: 'Tư liệu lưu trữ quốc gia',
    locationEn: 'National archives',
    context:
      'Phim tài liệu chân dung được phục chế và lên màu từ các thước phim gốc, tái hiện sống động hình ảnh đời thường giản dị của Chủ tịch Hồ Chí Minh.',
    contextEn:
      'A portrait documentary restored and colourised from original footage, vividly recreating the simple everyday image of President Ho Chi Minh.',
  },
  {
    id: 'v-ghiam-giongnoi',
    tab: 'tailieu',
    youtubeId: 'https://youtu.be/SCPphVYDPDk?si=kzIXrOjFhso9F-Io',
    thumbnail: 'https://hochiminh.vn/upload/3000001/20251024/15b7c76970e6a14d349035875a6c7da4HCM-117.jpg',
    duration: '3:20',
    title: 'Băng ghi âm giọng nói của Bác',
    titleEn: 'Original Voice Recording',
    time: 'Thập niên 1940 – 1960',
    timeEn: '1940s – 1960s',
    location: 'Đài Tiếng nói Việt Nam',
    locationEn: 'Voice of Vietnam Radio',
    context:
      'Bản ghi âm giọng nói gốc của Chủ tịch Hồ Chí Minh qua các bài phát biểu và lời kêu gọi. Giọng nói ấm áp, gần gũi đã đi vào lịch sử dân tộc.',
    contextEn:
      'Original audio recordings of President Ho Chi Minh’s speeches and appeals. His warm, intimate voice has become part of the nation’s history.',
  },
  {
    id: 'v-tho-chuctet',
    tab: 'tailieu',
    youtubeId: 'https://youtu.be/SCPphVYDPDk?si=kzIXrOjFhso9F-Io',
    thumbnail: 'https://hochiminh.vn/upload/3000001/20251024/49386c07f50128c0e5d01bd57b5fd8db41.jpg',
    duration: '2:10',
    title: 'Thơ chúc Tết của Bác',
    titleEn: 'The Lunar New Year Poems',
    time: 'Tết Xuân (1946 – 1969)',
    timeEn: 'Lunar New Year (1946 – 1969)',
    location: 'Phát trên Đài Tiếng nói Việt Nam',
    locationEn: 'Broadcast on Voice of Vietnam',
    context:
      'Mỗi dịp Tết đến Xuân về, Chủ tịch Hồ Chí Minh đều có thơ chúc Tết gửi đồng bào và chiến sĩ cả nước. Những vần thơ giản dị mà chứa chan niềm tin tất thắng.',
    contextEn:
      'Each Lunar New Year, President Ho Chi Minh wrote greeting poems for compatriots and soldiers nationwide — simple verses brimming with faith in victory.',
  },
];
