import { Milestone, ArchiveItem, QuizQuestion } from '../types';

export const milestones: Milestone[] = [
  {
    id: 'm1',
    year: '1890',
    shortYear: '90',
    title: 'Sinh tại Nghệ An',
    location: 'Làng Sen, Kim Liên, Nam Đàn, Nghệ An',
    description: 'Chủ tịch Hồ Chí Minh (lúc nhỏ tên là Nguyễn Sinh Cung) sinh ra trong một gia đình nhà nho yêu nước.',
    richDetails: 'Sinh ngày 19 tháng 5 năm 1890 tại quê ngoại là làng Hoàng Trù (làng Chùa) và lớn lên ở làng Sen (làng Mắt). Thân phụ là cụ phó bảng Nguyễn Sinh Sắc, một nhà nho yêu nước, thân mẫu là bà Hoàng Thị Loan, người phụ nữ đảm đang, nhân hậu. Tuổi thơ của Người thấm đượm truyền thống yêu nước, hiếu học của quê hương và tình cảm gia đình ấm áp.',
    image: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm2',
    year: '1911',
    shortYear: '11',
    title: 'Ra đi cứu nước',
    location: 'Bến cảng Nhà Rồng, Sài Gòn',
    description: 'Người lấy tên là Văn Ba, xuống tàu Amiral Latouche-Tréville ra đi tìm đường cứu nước.',
    richDetails: 'Ngày 5 tháng 6 năm 1911, từ Bến cảng Nhà Rồng, người thanh niên yêu nước Nguyễn Tất Thành dũng cảm bước chân ra đi tìm đường cứu nước trên con tàu Đô đốc Latouche-Tréville. Khác với các bậc tiền bối hướng sang phương Đông (Pháp, Nhật...), Người quyết định đi sang phương Tây - nơi khởi nguồn của tư tưởng "Tự do - Bình đẳng - Bác ái" để tìm hiểu thực chất và tìm kiếm con đường giải phóng thực sự cho đồng bào.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm3',
    year: '1930',
    shortYear: '30',
    title: 'Thành lập Đảng',
    location: 'Cửu Long, Hương Cảng (Hồng Kông)',
    description: 'Chủ trì Hội nghị hợp nhất các tổ chức cộng sản, thành lập Đảng Cộng sản Việt Nam.',
    richDetails: 'Từ ngày 6 tháng 1 đến ngày 7 tháng 2 năm 1930, tại bán đảo Cửu Long (Hương Cảng, Trung Quốc), Nguyễn Ái Quốc chủ trì Hội nghị thành lập Đảng Cộng sản Việt Nam. Hội nghị đã nhất trí thống nhất ba tổ chức cộng sản ở Việt Nam thành một Đảng duy nhất lấy tên là Đảng Cộng sản Việt Nam, thông qua Chính cương vắn tắt, Sách lược vắn tắt do Người soạn thảo.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm4',
    year: '1945',
    shortYear: '45',
    title: 'Độc lập dân tộc',
    location: 'Quảng trường Ba Đình, Hà Nội',
    description: 'Đọc bản Tuyên ngôn Độc lập vĩ đại, khai sinh ra nước Việt Nam Dân chủ Cộng hòa.',
    richDetails: 'Ngày 2 tháng 9 năm 1945, tại Quảng trường Ba Đình lịch sử, Chủ tịch Hồ Chí Minh thay mặt Chính phủ Lâm thời đọc bản Tuyên ngôn Độc lập, tuyên bố trước quốc dân đồng bào và thế giới về sự ra đời của nước Việt Nam Dân chủ Cộng hòa (nay là nước Cộng hòa Xã hội Chủ nghĩa Việt Nam), khẳng định quyền tự do, độc lập thiêng liêng của dân tộc Việt Nam.',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLuaAUERRXegD_BGTHCod--NWBXUE7HHJ4cSPMAIAnVj1djUzBCLPUkMetEz-jPgJ4cVTgYsBAh5RVPhuWrJhDgDGwgAM4Rt2gvWSRo9PM0alRpsmE9vOCODGZRWVC1OXng3GrYGwmxbbN7mc-De5qcOTO6bDpPSaFCC8lKAyY_6f1S-WB0hx3-S0YOeqdsSl5CWkzhlOCPRsAAMaS707FQFEuT9HjZ5EnthxwlicKW83jnmD6zpNoo0xR4'
  },
  {
    id: 'm5',
    year: '1954',
    shortYear: '54',
    title: 'Chiến thắng Điện Biên',
    location: 'Điện Biên Phủ, Tây Bắc',
    description: 'Lãnh đạo kháng chiến giành thắng lợi vang dội Điện Biên Phủ lừng lẫy năm châu.',
    richDetails: 'Chiến dịch Điện Biên Phủ thắng lợi hoàn toàn vào ngày 7 tháng 5 năm 1954 là đỉnh cao của cuộc kháng chiến chống thực dân Pháp xâm lược dưới sự lãnh đạo tài tình của Trung ương Đảng và Chủ tịch Hồ Chí Minh. Chiến thắng này đã đập tan hoàn toàn kế hoạch Navarre, buộc chính phủ Pháp phải ký kết Hiệp định Geneva về đình chỉ chiến sự ở Việt Nam, mở ra kỷ nguyên mới giải phóng miền Bắc.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm6',
    year: '1969',
    shortYear: '69',
    title: 'Người đi xa',
    location: 'Hà Nội',
    description: 'Chủ tịch Hồ Chí Minh qua đời, để lại Di chúc lịch sử thiêng liêng và vô giá.',
    richDetails: 'Ngày 2 tháng 9 năm 1969, Chủ tịch Hồ Chí Minh từ trần tại Hà Nội, thọ 79 tuổi. Người ra đi để lại cho toàn Đảng, toàn quân và toàn dân bản Di chúc thiêng liêng gởi gắm khát vọng độc lập, thống nhất nước nhà, xây dựng chủ nghĩa xã hội và tấm lòng yêu thương vô hạn với đồng bào, chiến sĩ cả nước cũng như bầu bạn quốc tế.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80'
  }
];

export const archiveItems: ArchiveItem[] = [
  {
    id: 'a1',
    category: 'doclap',
    title: 'Tuyên ngôn Độc lập',
    description: 'Ngày 2/9/1945 lịch sử tại Quảng trường Ba Đình huyền thoại, Chủ tịch Hồ Chí Minh long trọng tuyên bố nền độc lập tự chủ khai sinh nước Việt Nam.',
    year: '1945',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLuaAUERRXegD_BGTHCod--NWBXUE7HHJ4cSPMAIAnVj1djUzBCLPUkMetEz-jPgJ4cVTgYsBAh5RVPhuWrJhDgDGwgAM4Rt2gvWSRo9PM0alRpsmE9vOCODGZRWVC1OXng3GrYGwmxbbN7mc-De5qcOTO6bDpPSaFCC8lKAyY_6f1S-WB0hx3-S0YOeqdsSl5CWkzhlOCPRsAAMaS707FQFEuT9HjZ5EnthxwlicKW83jnmD6zpNoo0xR4'
  },
  {
    id: 'a2',
    category: 'khotulieu',
    title: 'Không gian trải nghiệm số',
    description: 'Hệ thống tương tác hỗ trợ trình diễn sơ đồ hành trình, tra cứu thông tin chi tiết qua các màn hình cảm ứng độ phân giải cao.',
    year: 'Hiện đại',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBN8U8SJufY0ju7wE8Wq-Cz720Pz8k41s5sU6AQYx077YHiy2Vv8oft-t23gfmr2VdIWV3wYWn-3QNHvKDb9YoF7Xgs_alaS3k8YgZ8BTGIghQRfmvPGTEkMuLDeItCiGvxINEc03BHKmj-hLDLHp77DP1oqjjZKM5KKltTPH5PtjO7kh_1QlukGKIP3bjp5ZoX_mTaMJRB9LyipsrsYV5a_bmwqdviFm60_uwb_VaAkTrSiCj7OhPaaU7XkjURbm2fudNB9X4t5aM'
  },
  {
    id: 'a3',
    category: 'disan',
    title: 'Người Cha già dân tộc',
    description: 'Chân dung đặc tả Chủ tịch Hồ Chí Minh, toát lên phong thái giản dị, thanh tao, ánh mắt sáng ngời tinh anh và tình thương thương mến.',
    year: 'Chân dung',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaR8t7K5cH84Q-lYtULT2oVEfz-pYy84Qt6rZww0HAnZSh05tJP9ju8VlAaqOvnNHmDG_p7js_2AxZrSiPCdkkc1XCJr5670-jrofZo0nAllGQZMYBsggQytURu-tWzNTrJcvCTkUDq5Idjey3iyhGm4cYLj901ivWfCxPaiejSBeylzpBdh5ATMnldqzLHTc4dGS8SAEqdC4OuIWjMiE2mksEQ4ntl-cwrq_U_kPtSyJ8A7uoRMHBDTvDZGYe_1hVbAR_8Nuh8Ls'
  },
  {
    id: 'a4',
    category: 'nienthieu',
    title: 'Quê nội Hoàng Trù & Làng Sen Nghệ An',
    description: 'Khung cảnh làng quê yên bình, đơn sơ nơi nuôi dưỡng tâm hồn và bản lĩnh kiên cường của cậu bé Nguyễn Sinh Cung thuở nhỏ.',
    year: 'Thế kỷ XIX',
    image: 'https://images.unsplash.com/photo-1543872084-c7da3822851f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a5',
    category: 'conduong',
    title: 'Nguyễn Ái Quốc tại Pháp',
    description: 'Chân dung nhà hoạt động trẻ tuổi tràn đầy nhiệt huyết tại Đại hội Tua lịch sử, đấu tranh mạnh mẽ đòi quyền tự quyết cho dân tộc Việt Nam.',
    year: '1920',
    image: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a6',
    category: 'khotulieu',
    title: 'Hồ sơ tài liệu bút tích lịch sử',
    description: 'Lưu trữ các văn bản cách mạng quan trọng: Bản án chế độ thực dân Pháp, Đường Kách mệnh, Lời kêu gọi toàn quốc kháng chiến.',
    year: 'Lưu trữ',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80'
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Chủ tịch Hồ Chí Minh đã ra đi tìm đường cứu nước từ bến cảng nào vào năm 1911?',
    options: [
      'Bến cảng Hải Phòng',
      'Bến cảng Nhà Rồng (Sài Gòn)',
      'Bến cảng Đà Nẵng',
      'Bến cảng Vân Đồn'
    ],
    answerIndex: 1,
    explanation: 'Ngày 5/6/1911, từ Bến cảng Nhà Rồng (Sài Gòn), Nguyễn Tất Thành lấy tên Văn Ba, lên tàu Amiral Latouche-Tréville ra đi tìm đường cứu nước.'
  },
  {
    id: 'q2',
    question: 'Đảng Cộng sản Việt Nam độc lập được thành lập vào thời gian nào và ở đâu?',
    options: [
      'Năm 1930 tại Hương Cảng (Quảng Đông, Trung Quốc)',
      'Năm 1945 tại Hà Nội, Việt Nam',
      'Năm 1925 tại Quảng Châu, Trung Quốc',
      'Năm 1941 tại Pác Bó, Cao Bằng'
    ],
    answerIndex: 0,
    explanation: 'Đảng Cộng sản Việt Nam được thành lập vào ngày 3/2/1930 tại Hội nghị hợp nhất tổ chức Cộng sản ở bán đảo Cửu Long, Hương Cảng.'
  },
  {
    id: 'q3',
    question: 'Chủ tịch Hồ Chí Minh đã đọc bản Tuyên ngôn Độc lập vào ngày nào và tại đâu?',
    options: [
      'Ngày 19/8/1945 tại Nhà hát Lớn Hà Nội',
      'Ngày 2/9/1945 tại Quảng trường Ba Đình, Hà Nội',
      'Ngày 2/9/1945 tại Dinh Độc Lập, Sài Gòn',
      'Ngày 30/4/1975 tại Dinh Độc Lập'
    ],
    answerIndex: 1,
    explanation: 'Ngày 2/9/1945, Chủ tịch Hồ Chí Minh đã long trọng đọc bản Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa tại Quảng trường Ba Đình.'
  },
  {
    id: 'q4',
    question: 'Chủ tịch Hồ Chí Minh lúc nhỏ có tên khai sinh là gì?',
    options: [
      'Nguyễn Ái Quốc',
      'Nguyễn Sinh Cung',
      'Nguyễn Tất Thành',
      'Hồ Quang'
    ],
    answerIndex: 1,
    explanation: 'Chủ tịch Hồ Chí Minh sinh ra tại Nghệ An với tên khai sinh mang thuở nhỏ là Nguyễn Sinh Cung.'
  }
];
