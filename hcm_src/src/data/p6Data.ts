// P6 - TƯ TƯỞNG HỒ CHÍ MINH
// Nội dung rút gọn từ tài liệu HCM202.docx

// 1. Tư Tưởng Về Đại Đoàn Kết Dân Tộc
export const greatUnity = {
  concept:
    'Là chiến lược tập hợp mọi lực lượng yêu nước, không phân biệt giai cấp, tôn giáo, tạo thành sức mạnh vô địch để giành độc lập và xây dựng đất nước.',
  corePoints: [
    'Đại đoàn kết là mục tiêu hàng đầu của Cách mạng.',
    'Đoàn kết toàn dân, lấy liên minh Công – Nông – Trí thức làm nền tảng.',
    'Đoàn kết dân tộc gắn liền với đoàn kết quốc tế.',
  ],
  meaning:
    'Kim chỉ nam để củng cố khối đại đoàn kết toàn dân, tạo sự đồng thuận xã hội và giữ vững chủ quyền trong bối cảnh hội nhập toàn cầu.',
};

// 2. Tư Tưởng Về Đạo Đức Và Lối Sống (4 Khối / Tabs)
export interface VirtueBlock {
  key: string;
  letter: string;
  title: string;
  subtitle: string;
  content: string;
}

export const virtues: VirtueBlock[] = [
  {
    key: 'can',
    letter: 'CẦN',
    title: 'Cần',
    subtitle: 'Siêng năng',
    content:
      'Lao động cần cù, sáng tạo, có kế hoạch và đạt năng suất cao; không lười biếng, không ỷ lại.',
  },
  {
    key: 'kiem',
    letter: 'KIỆM',
    title: 'Kiệm',
    subtitle: 'Tiết kiệm',
    content:
      'Tiết kiệm thời gian, công sức, tiền của của công và của tư; không hoang phí, không phô trương.',
  },
  {
    key: 'liem',
    letter: 'LIÊM',
    title: 'Liêm',
    subtitle: 'Trong sạch',
    content:
      'Luôn giữ gìn của công, không tham lam danh lợi, vị trí; tôn trọng nhân dân, không đục khoét.',
  },
  {
    key: 'chinh',
    letter: 'CHÍNH',
    title: 'Chính',
    subtitle: 'Chính trực',
    content:
      'Thẳng thắn, bảo vệ lẽ phải. Đối với mình không tự cao; đối với người không nịnh trên khinh dưới.',
  },
];

// Trích dẫn nổi bật (Đặt ở Banner/Footer)
export const highlightQuote =
  'Người có bốn đức: Cần, Kiệm, Liêm, Chính. Thiếu một đức, thì không thành người.';
