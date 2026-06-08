import { Milestone, ArchiveItem, QuizQuestion } from '../types';

export const milestones: Milestone[] = [
  {
    id: 'm1',
    year: '1890',
    shortYear: '19/05',
    title: 'Sinh tại Nghệ An',
    location: 'Làng Sen, Kim Liên, Nam Đàn, Nghệ An',
    description: 'Chủ tịch Hồ Chí Minh (lúc nhỏ tên là Nguyễn Sinh Cung) sinh ra trong một gia đình nhà nho yêu nước.',
    richDetails: 'Sinh ngày 19 tháng 5 năm 1890 tại quê ngoại là làng Hoàng Trù (làng Chùa) và lớn lên ở làng Sen (làng Mắt). Thân phụ là cụ phó bảng Nguyễn Sinh Sắc, một nhà nho yêu nước, thân mẫu là bà Hoàng Thị Loan, người phụ nữ đảm đang, nhân hậu. Tuổi thơ của Người thấm đượm truyền thống yêu nước, hiếu học của quê hương và tình cảm gia đình ấm áp.',
    image: '/images/hcm_timeline_1.jpg'
  },
  {
    id: 'm2',
    year: '1911',
    shortYear: '05/06',
    title: 'Ra đi cứu nước',
    location: 'Bến cảng Nhà Rồng, Sài Gòn',
    description: 'Người lấy tên là Văn Ba, xuống tàu Amiral Latouche-Tréville ra đi tìm đường cứu nước.',
    richDetails: 'Ngày 5 tháng 6 năm 1911, từ Bến cảng Nhà Rồng, người thanh niên yêu nước Nguyễn Tất Thành dũng cảm bước chân ra đi tìm đường cứu nước trên con tàu Đô đốc Latouche-Tréville. Khác với các bậc tiền bối hướng sang phương Đông (Pháp, Nhật...), Người quyết định đi sang phương Tây - nơi khởi nguồn của tư tưởng "Tự do - Bình đẳng - Bác ái" để tìm hiểu thực chất và tìm kiếm con đường giải phóng thực sự cho đồng bào.',
    image: '/images/hcm_timeline_2.jpg'
  },
  {
    id: 'm3',
    year: '1930',
    shortYear: '03/02',
    title: 'Thành lập Đảng',
    location: 'Cửu Long, Hương Cảng (Hồng Kông)',
    description: 'Chủ trì Hội nghị hợp nhất các tổ chức cộng sản, thành lập Đảng Cộng sản Việt Nam.',
    richDetails: 'Từ ngày 3 đến 7-2-1930, tại bán đảo Cửu Long (Hương Cảng, Trung Quốc), Nguyễn Ái Quốc chủ trì Hội nghị thành lập Đảng Cộng sản Việt Nam. Hội nghị đã nhất trí thống nhất ba tổ chức cộng sản ở Việt Nam thành một Đảng duy nhất lấy tên là Đảng Cộng sản Việt Nam, thông qua Chính cương vắn tắt, Sách lược vắn tắt do Người soạn thảo.',
    image: '/images/hcm_timeline_3.jpg'
  },
  {
    id: 'm4',
    year: '1945',
    shortYear: '02/09',
    title: 'Độc lập dân tộc',
    location: 'Quảng trường Ba Đình, Hà Nội',
    description: 'Đọc bản Tuyên ngôn Độc lập vĩ đại, khai sinh ra nước Việt Nam Dân chủ Cộng hòa.',
    richDetails: 'Ngày 2 tháng 9 năm 1945, tại Quảng trường Ba Đình lịch sử, Chủ tịch Hồ Chí Minh thay mặt Chính phủ Lâm thời đọc bản Tuyên ngôn Độc lập, tuyên bố trước quốc dân đồng bào và thế giới về sự ra đời của nước Việt Nam Dân chủ Cộng hòa (nay là nước Cộng hòa Xã hội Chủ nghĩa Việt Nam), khẳng định quyền tự do, độc lập thiêng liêng của dân tộc Việt Nam.',
    image: '/images/hcm_timeline_4.jpg'
  },
  {
    id: 'm5',
    year: '1954',
    shortYear: '07/05',
    title: 'Chiến thắng Điện Biên',
    location: 'Điện Biên Phủ, Tây Bắc',
    description: 'Lãnh đạo kháng chiến giành thắng lợi vang dội Điện Biên Phủ lừng lẫy năm châu.',
    richDetails: 'Chiến dịch Điện Biên Phủ thắng lợi hoàn toàn vào ngày 7 tháng 5 năm 1954 là đỉnh cao của cuộc kháng chiến chống thực dân Pháp xâm lược dưới sự lãnh đạo tài tình của Trung ương Đảng và Chủ tịch Hồ Chí Minh. Chiến thắng này đã đập tan hoàn toàn kế hoạch Navarre, buộc chính phủ Pháp phải ký kết Hiệp định Geneva về đình chỉ chiến sự ở Việt Nam, mở ra kỷ nguyên mới giải phóng miền Bắc.',
    image: '/images/hcm_timeline_5.jpg'
  },
  {
    id: 'm6',
    year: '1969',
    shortYear: '02/09',
    title: 'Người đi xa',
    location: 'Hà Nội',
    description: 'Chủ tịch Hồ Chí Minh qua đời, để lại Di chúc lịch sử thiêng liêng và vô giá.',
    richDetails: 'Ngày 2 tháng 9 năm 1969, Chủ tịch Hồ Chí Minh từ trần tại Hà Nội, thọ 79 tuổi. Người ra đi để lại cho toàn Đảng, toàn quân và toàn dân bản Di chúc thiêng liêng gởi gắm khát vọng độc lập, thống nhất nước nhà, xây dựng chủ nghĩa xã hội và tấm lòng yêu thương vô hạn với đồng bào, chiến sĩ cả nước cũng như bầu bạn quốc tế.',
    image: '/images/hcm_timeline_6.jpg'
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
  },
  {
    id: 'q5',
    question: "Tác phẩm 'Đường Kách Mệnh' do Nguyễn Ái Quốc viết, được xuất bản lần đầu vào năm nào?",
    options: [
      '1925',
      '1927',
      '1930',
      '1941'
    ],
    answerIndex: 1,
    explanation: "Tác phẩm 'Đường Kách Mệnh' là tập hợp các bài giảng của Nguyễn Ái Quốc tại các lớp huấn luyện cán bộ ở Quảng Châu, được xuất bản vào năm 1927. Đây là một văn kiện lý luận quan trọng, đặt nền móng tư tưởng cho cách mạng Việt Nam."
  },
  {
    id: 'q6',
    question: "Năm 1920, Nguyễn Ái Quốc đã đọc 'Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa' của ai, từ đó tìm ra con đường cứu nước?",
    options: [
      'Karl Marx',
      'Friedrich Engels',
      'V.I. Lenin',
      'Joseph Stalin'
    ],
    answerIndex: 2,
    explanation: "Vào tháng 7/1920, Nguyễn Ái Quốc đã đọc 'Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa' của V.I. Lenin. Luận cương đã giải đáp những vấn đề mà Người đang trăn trở, từ đó Người hoàn toàn tin theo Lenin và đi theo con đường Cách mạng Tháng Mười."
  },
  {
    id: 'q7',
    question: "Tên gọi 'Hồ Chí Minh' lần đầu tiên xuất hiện trong văn kiện chính thức nào?",
    options: [
      'Trong bản Tuyên ngôn Độc lập năm 1945',
      'Khi tham gia Đại hội Tours năm 1920',
      'Trong thư gửi cho các nhà lãnh đạo Đồng minh năm 1941',
      'Khi thành lập Việt Minh năm 1941'
    ],
    answerIndex: 2,
    explanation: "Tên gọi Hồ Chí Minh lần đầu tiên được sử dụng chính thức trong một bức điện và thư gửi cho các nhà lãnh đạo Đồng minh vào năm 1941, khi Người từ Trung Quốc chuẩn bị về nước lãnh đạo cách mạng."
  },
  {
    id: 'q8',
    question: "Chiến dịch nào được coi là đỉnh cao của nghệ thuật quân sự Việt Nam trong kháng chiến chống Pháp, dưới sự lãnh đạo của Chủ tịch Hồ Chí Minh?",
    options: [
      'Chiến dịch Việt Bắc - Thu Đông 1947',
      'Chiến dịch Biên giới 1950',
      'Chiến dịch Điện Biên Phủ 1954',
      'Chiến dịch Hòa Bình 1951-1952'
    ],
    answerIndex: 2,
    explanation: "Chiến dịch Điện Biên Phủ (1954) là thắng lợi quyết định, buộc thực dân Pháp phải ký Hiệp định Geneva, chấm dứt chiến tranh và lập lại hòa bình ở Đông Dương. Đây được coi là đỉnh cao của nghệ thuật quân sự Việt Nam."
  },
  {
    id: 'q9',
    question: "Năm 1941, sau hơn 30 năm bôn ba, Nguyễn Ái Quốc đã trở về nước và chọn địa điểm nào làm căn cứ địa cách mạng đầu tiên?",
    options: [
      'Tân Trào, Tuyên Quang',
      'Pác Bó, Cao Bằng',
      'Việt Bắc, Thái Nguyên',
      'ATK Định Hóa, Thái Nguyên'
    ],
    answerIndex: 1,
    explanation: "Ngày 28/1/1941, sau hơn 30 năm hoạt động ở nước ngoài, Nguyễn Ái Quốc đã trở về Tổ quốc và chọn Pác Bó (Cao Bằng) làm nơi xây dựng căn cứ địa, trực tiếp lãnh đạo phong trào cách mạng trong nước."
  },
  {
    id: 'q10',
    question: "Năm điều Bác Hồ dạy thiếu niên, nhi đồng được Bác gửi trong bức thư cuối cùng cho ngành giáo dục vào năm nào?",
    options: [
      '1945',
      '1954',
      '1961',
      '1969'
    ],
    answerIndex: 2,
    explanation: "Năm điều Bác Hồ dạy được trích từ bức thư Người gửi cho cán bộ, cô giáo, thầy giáo, công nhân viên, học sinh, sinh viên nhân dịp bắt đầu năm học mới, vào ngày 15/10/1968, nhưng được biết đến rộng rãi từ năm 1961."
  },
  {
    id: 'q11',
    question: "Tổ chức UNESCO đã vinh danh Chủ tịch Hồ Chí Minh là 'Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất' vào năm nào?",
    options: [
      '1969',
      '1975',
      '1987',
      '1990'
    ],
    answerIndex: 2,
    explanation: "Vào khóa họp 24 năm 1987, Tổ chức Giáo dục, Khoa học và Văn hóa của Liên Hợp Quốc (UNESCO) đã ra nghị quyết vinh danh Chủ tịch Hồ Chí Minh là 'Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất của Việt Nam'."
  },
  {
    id: 'q12',
    question: "Bài thơ 'Nguyên tiêu' (Rằm tháng Giêng) nổi tiếng của Chủ tịch Hồ Chí Minh được sáng tác trong hoàn cảnh nào?",
    options: [
      'Trong thời gian bị giam ở Trung Quốc',
      'Trên đường đi công tác ở chiến khu Việt Bắc',
      'Sau khi Cách mạng Tháng Tám thành công',
      'Trong chuyến thăm hữu nghị một nước xã hội chủ nghĩa'
    ],
    answerIndex: 1,
    explanation: "Bài thơ 'Nguyên tiêu' được Bác sáng tác vào mùa xuân năm 1948 tại chiến khu Việt Bắc, trong bối cảnh cuộc kháng chiến chống Pháp đang diễn ra. Bài thơ thể hiện tinh thần lạc quan, tin tưởng vào thắng lợi của cách mạng."
  },
  {
    id: 'q13',
    question: "Trong bản Di chúc, Chủ tịch Hồ Chí Minh đã bày tỏ mong muốn cuối cùng là gì?",
    options: [
      'Được hỏa táng và đặt tro ở ba miền đất nước',
      'Xây dựng lăng thật to lớn',
      'Được chôn cất tại quê nhà Nghệ An',
      'Được ướp xác để nhân dân thăm viếng'
    ],
    answerIndex: 0,
    explanation: "Trong Di chúc, Người viết: '...Tôi yêu cầu thi hài tôi được đốt đi, nói chữ là hỏa táng... Tro thì chia làm ba phần, bỏ vào ba cái hộp sành, một cho miền Bắc, một cho miền Trung, một cho miền Nam. Đồng bào mỗi miền nên chọn một quả đồi mà chôn hộp tro đó.'"
  },
  {
    id: 'q14',
    question: "Hội Việt Nam Cách mạng Thanh niên, tiền thân của Đảng Cộng sản Việt Nam, được Nguyễn Ái Quốc thành lập ở đâu?",
    options: [
      'Hương Cảng (Hồng Kông)',
      'Paris (Pháp)',
      'Moskva (Liên Xô)',
      'Quảng Châu (Trung Quốc)'
    ],
    answerIndex: 3,
    explanation: "Tháng 6/1925, tại Quảng Châu (Trung Quốc), Nguyễn Ái Quốc đã thành lập Hội Việt Nam Cách mạng Thanh niên, tập hợp những thanh niên yêu nước để truyền bá chủ nghĩa Mác-Lênin và chuẩn bị cho việc thành lập Đảng."
  },
  {
    id: 'q15',
    question: "Câu nói 'Không có gì quý hơn độc lập, tự do' được Chủ tịch Hồ Chí Minh nói trong bối cảnh nào?",
    options: [
      'Trong Tuyên ngôn Độc lập năm 1945',
      'Trong lời kêu gọi toàn quốc kháng chiến năm 1946',
      'Trong bài trả lời phỏng vấn nhà báo nước ngoài năm 1966',
      'Trong bản Di chúc'
    ],
    answerIndex: 2,
    explanation: "Câu nói bất hủ 'Không có gì quý hơn độc lập, tự do' là chân lý được Chủ tịch Hồ Chí Minh đúc kết, được nêu trong 'Lời kêu gọi chống Mỹ, cứu nước' ngày 17/7/1966, khi đế quốc Mỹ leo thang chiến tranh ở Việt Nam."
  }
];
