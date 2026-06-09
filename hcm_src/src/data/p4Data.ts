// P4 - CÁC GIAI ĐOẠN LỊCH SỬ
// Nội dung biên soạn từ tài liệu HCM202 (1).docx

export const introLead =
  'Chặng đường lịch sử đầy gian khổ nhưng hiển hách của dân tộc Việt Nam, từ cột mốc chói lọi năm 1945, kinh qua hai cuộc kháng chiến trường kỳ, đến công cuộc xây dựng và đạt được những thành tựu vẻ vang.';

// 1. Lộ trình lịch sử (Timeline tổng quan)
export interface TimelinePeriod {
  id: string;
  range: string;
  title: string;
  desc: string;
}

export const timelinePeriods: TimelinePeriod[] = [
  {
    id: 'tp-1945',
    range: '1945',
    title: 'Bước ngoặt vĩ đại',
    desc: 'Cách mạng Tháng Tám và khai sinh nước Việt Nam Dân chủ Cộng hòa.',
  },
  {
    id: 'tp-1946',
    range: '1946 – 1954',
    title: 'Kháng chiến chống thực dân Pháp',
    desc: '“Thà hy sinh tất cả chứ nhất định không chịu mất nước.”',
  },
  {
    id: 'tp-1954',
    range: '1954 – 1975',
    title: 'Xây dựng CNXH ở miền Bắc',
    desc: 'Đồng thời đấu tranh giải phóng miền Nam, thống nhất đất nước.',
  },
  {
    id: 'tp-1975',
    range: '1975 – Nay',
    title: 'Đổi mới & Hội nhập',
    desc: 'Các thành tựu vẻ vang trong phát triển đất nước.',
  },
];

export interface MediaVideo {
  title: string;
  desc: string;
  duration?: string;
  // Để trống nếu chưa có link; trình phát sẽ hiện nút tìm trên YouTube
  youtubeId?: string;
  searchQuery: string;
  thumbnail: string;
}

export interface MediaImage {
  caption: string;
  url: string;
}

// 2. Sự kiện năm 1945 – Bước ngoặt vĩ đại
export const event1945 = {
  context:
    'Năm 1945 là đỉnh cao của phong trào giải phóng dân tộc thế kỷ XX tại Việt Nam. Chớp thời cơ Nhật đầu hàng Đồng minh, Đảng và Chủ tịch Hồ Chí Minh đã phát động Tổng khởi nghĩa giành chính quyền trên toàn quốc.',
  events: [
    { date: '19/08/1945', text: 'Khởi nghĩa thắng lợi tại Hà Nội.' },
    { date: '23/08/1945', text: 'Khởi nghĩa thắng lợi tại Huế.' },
    { date: '25/08/1945', text: 'Khởi nghĩa thắng lợi tại Sài Gòn.' },
    {
      date: '02/09/1945',
      text: 'Tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.',
    },
  ],
  video: {
    title: 'Ngày Độc lập 2/9/1945 – Giây phút thiêng liêng của Tổ quốc',
    desc: 'Phim tài liệu (≈5 phút) – Nguồn: VTV / Viện phim Việt Nam.',
    duration: '5:00',
    youtubeId: 'j20bKry4jbA',
    searchQuery: 'Bác Hồ đọc Tuyên ngôn Độc lập 2/9/1945',
    thumbnail: '/images/hcm_timeline_4.jpg',
  } as MediaVideo,
  images: [
    {
      caption: 'Biển người mít tinh tại Quảng trường Ba Đình ngày 2/9/1945.',
      url: '/images/hcm_timeline_4.jpg',
    },
    {
      caption: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập trên lễ đài.',
      url: '/images/bac-ho-banner.jpg',
    },
  ] as MediaImage[],
};

// 3. Kháng chiến chống Pháp (1946 – 1954)
export const resistanceFrance = {
  intro:
    'Đêm 19/12/1946, kháng chiến toàn quốc bùng nổ. Với đường lối “Toàn dân, toàn diện, trường kỳ và tự lực cánh sinh”, quân và dân ta đã từng bước bẻ gãy các kế hoạch quân sự của Pháp.',
  campaigns: [
    {
      name: 'Việt Bắc Thu – Đông',
      time: '1947',
      meaning:
        'Đập tan cuộc tiến công chớp nhoáng của Pháp, bảo vệ cơ quan đầu não.',
    },
    {
      name: 'Biên Giới Thu – Đông',
      time: '1950',
      meaning:
        'Khai thông đường liên lạc quốc tế, giành quyền chủ động trên chiến trường chính.',
    },
    {
      name: 'Điện Biên Phủ',
      time: '1954',
      meaning:
        '“Lừng lẫy năm châu, chấn động địa cầu”, buộc Pháp ký Hiệp định Giơ-ne-vơ.',
    },
  ],
  video: {
    title: 'Chiến thắng Điện Biên Phủ 1954 – Thiên sử vàng dân tộc',
    desc: 'Phim tài liệu “56 ngày đêm chấn động địa cầu” về chiến dịch Điện Biên Phủ.',
    youtubeId: 'jy7Z3oYOp7w',
    searchQuery: 'Chiến thắng Điện Biên Phủ 1954 phim tài liệu',
    thumbnail: '/images/hcm_timeline_5.jpg',
  } as MediaVideo,
  images: [
    {
      caption: 'Đoàn dân công hỏa tuyến thồ hàng ra mặt trận Điện Biên Phủ.',
      url: '/images/hcm_timeline_5.jpg',
    },
    {
      caption:
        'Lá cờ “Quyết chiến Quyết thắng” tung bay trên nóc hầm tướng De Castries.',
      url: '/images/hcm_timeline_3.jpg',
    },
  ] as MediaImage[],
};

// 4. Xây dựng miền Bắc (1954 – 1975)
export const buildNorth = {
  role:
    'Sau năm 1954, đất nước tạm thời bị chia cắt. Miền Bắc bước vào thời kỳ quá độ lên Chủ nghĩa Xã hội, đóng vai trò là hậu phương lớn quyết định nhất đối với sự nghiệp giải phóng miền Nam, thống nhất đất nước.',
  movements: [
    {
      group: 'Trong công nghiệp & nông nghiệp',
      items: ['Phong trào “Sóng Duyên Hải” (công nghiệp)', 'Phong trào “Gió Đại Phong” (nông nghiệp)'],
    },
    {
      group: 'Trong chiến đấu & chi viện',
      items: [
        'Phong trào “Ba sẵn sàng” (thanh niên)',
        'Phong trào “Ba đảm đang” (phụ nữ)',
        '“Mỗi người làm việc bằng hai vì miền Nam ruột thịt”',
      ],
    },
    {
      group: 'Tuyến đường huyết mạch',
      items: [
        'Đường mòn Hồ Chí Minh (trên bộ và trên biển) – biểu tượng của ý chí thống nhất đất nước.',
      ],
    },
  ],
  video: {
    title: 'Hậu phương miền Bắc và những chuyến xe chi viện cho tiền tuyến lớn',
    desc: 'Phim tài liệu “Đường Trường Sơn – Con đường huyền thoại” (VNEWS).',
    youtubeId: 'rKdD74YMIT0',
    searchQuery: 'Hậu phương miền Bắc chi viện tiền tuyến phim tài liệu',
    thumbnail: '/images/hcm_homepage.jpg',
  } as MediaVideo,
  images: [
    {
      caption:
        'Nông dân miền Bắc hăng hái thu hoạch lúa, đóng góp cho quỹ “Hũ gạo kháng chiến”.',
      url: '/images/hcm_homepage.jpg',
    },
    {
      caption: 'Những đoàn xe vận tải vượt dãy Trường Sơn dưới làn bom đạn.',
      url: '/images/hcm_timeline_6.jpg',
    },
  ] as MediaImage[],
};

// 5. Các thành tựu vẻ vang
export interface Achievement {
  key: string;
  title: string;
  desc: string;
}

export const achievementsLead =
  'Trải qua các giai đoạn thăng trầm, những thành tựu lịch sử chính là minh chứng cho sức mạnh dân tộc:';

export const achievements: Achievement[] = [
  {
    key: 'political',
    title: 'Chính trị & Độc lập',
    desc: 'Bảo vệ vững chắc chủ quyền lãnh thổ, thống nhất non sông liền một dải vào ngày 30/04/1975.',
  },
  {
    key: 'economy',
    title: 'Kinh tế (Thời kỳ Đổi mới)',
    desc: 'Từ một nước nghèo nàn, thiếu thốn sau chiến tranh, Việt Nam vươn lên thành một trong những nền kinh tế năng động nhất Đông Nam Á, xóa đói giảm nghèo bền vững.',
  },
  {
    key: 'diplomacy',
    title: 'Đối ngoại',
    desc: 'Từ thế bị bao vây, cô lập, Việt Nam hiện đã thiết lập quan hệ ngoại giao với gần 200 quốc gia, là thành viên tích cực và có uy tín tại Liên Hợp Quốc, ASEAN…',
  },
];
