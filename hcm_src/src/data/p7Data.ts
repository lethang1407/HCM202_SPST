// P7 - GIÁ TRỊ HIỆN NAY
// Tư tưởng Hồ Chí Minh với thanh niên & phong trào "Học tập, làm theo lời Bác"
// Biên soạn từ tài liệu HCM202 (2).docx

export const youthQuote = {
  text:
    'Thanh niên là chủ nhân tương lai của nước nhà… Nước nhà thịnh hay suy, yếu hay mạnh một phần lớn là do các thanh niên.',
  author: 'Chủ tịch Hồ Chí Minh',
};

export const youthIntro =
  'Trong giai đoạn hiện nay, tư tưởng của Bác vẫn là kim chỉ nam soi đường cho thế hệ trẻ vững bước trên con đường hội nhập và phát triển đất nước qua 3 trụ cột cốt lõi:';

// 1. Ba trụ cột
export interface Pillar {
  key: string;
  iconKey: 'study' | 'labor' | 'devote';
  title: string;
  slogan: string;
  value: string;
  actions: string[];
}

export const pillars: Pillar[] = [
  {
    key: 'hoc-tap',
    iconKey: 'study',
    title: 'Học Tập',
    slogan: '“Học để hành, học để phục vụ nhân dân”',
    value:
      'Giữa kỷ nguyên số và trí tuệ nhân tạo (AI), học tập không chỉ dừng lại ở sách vở mà là học tập suốt đời, chủ động cập nhật công nghệ, làm chủ tri thức toàn cầu.',
    actions: [
      'Xây dựng tinh thần tự học, tự nghiên cứu khoa học.',
      'Học đi đôi với hành, ứng dụng tri thức để giải quyết các vấn đề thực tiễn của xã hội.',
      'Chủ động học ngoại ngữ, kỹ năng mềm để trở thành những “công dân toàn cầu”.',
    ],
  },
  {
    key: 'lao-dong',
    iconKey: 'labor',
    title: 'Lao Động',
    slogan: '“Lao động là vinh quang”',
    value:
      'Lao động thời đại mới đòi hỏi sự sáng tạo, kỷ luật và năng suất cao. Thanh niên là lực lượng tiên phong trong đổi mới sáng tạo và khởi nghiệp (Startup).',
    actions: [
      'Xóa bỏ tư tưởng “việc nhẹ lương cao”, sẵn sàng dấn thân vào những việc khó, việc mới.',
      'Lao động có kỷ luật, tác phong công nghiệp và đạo đức nghề nghiệp vững vàng.',
      'Phát huy tinh thần khởi nghiệp đổi mới sáng tạo, làm giàu chính đáng cho bản thân và đất nước.',
    ],
  },
  {
    key: 'cong-hien',
    iconKey: 'devote',
    title: 'Cống Hiến',
    slogan: '“Đâu cần thanh niên có, đâu khó có thanh niên”',
    value:
      'Cống hiến không phải là điều gì quá to tát, mà bắt đầu từ trách nhiệm với cộng đồng, tinh thần tình nguyện và lòng yêu nước cụ thể bằng hành động.',
    actions: [
      'Tích cực tham gia các phong trào tình nguyện (Mùa hè xanh, Tiếp sức mùa thi, hiến máu nhân đạo, bảo vệ môi trường).',
      'Sẵn sàng đi bất cứ nơi đâu, làm bất cứ việc gì khi Tổ quốc cần (biên giới, hải đảo, vùng sâu vùng xa).',
    ],
  },
];

// 2.1. Các câu chuyện về Bác Hồ với Thanh niên
export interface Story {
  id: string;
  title: string;
  summary: string;
  message: string;
  full: string;
}

export const stories: Story[] = [
  {
    id: 'tu-hoc',
    title: 'Bài học về sự tự học của Bác',
    summary:
      'Hành trình ra đi tìm đường cứu nước với bàn tay trắng, Bác đã tự học thành thạo nhiều ngoại ngữ bằng cách viết từ mới lên tay khi làm việc, học từ đồng nghiệp, từ sách báo.',
    message:
      'Truyền cảm hứng về tinh thần vượt khó, tự học xuyên biên giới cho giới trẻ ngày nay.',
    full:
      'Trên hành trình bôn ba khắp năm châu, dù phải làm đủ nghề để kiếm sống — phụ bếp, quét tuyết, rửa ảnh… — người thanh niên Nguyễn Tất Thành vẫn kiên trì tự học. Bác viết những từ mới lên cánh tay, lên mẩu giấy để vừa làm vừa nhẩm; tranh thủ học từ thủy thủ, từ đồng nghiệp và từ sách báo mỗi khi rảnh. Nhờ ý chí ấy, Người đã thông thạo nhiều ngoại ngữ và tích lũy vốn tri thức khổng lồ phục vụ sự nghiệp cách mạng. Câu chuyện nhắc thế hệ trẻ: không có hoàn cảnh nào có thể cản trở một người thực sự muốn học.',
  },
  {
    id: 'nuoc-nong-nuoc-nguoi',
    title: '“Nước nóng, nước nguội”',
    summary:
      'Bài học sâu sắc Bác dạy về cách quản lý cảm xúc, sự điềm tĩnh và ứng xử văn hóa trong giao tiếp, quản lý.',
    message:
      'Giúp thanh niên rèn luyện kỹ năng quản trị bản thân, xây dựng lối sống hòa nhã, văn minh.',
    full:
      'Bác mượn hình ảnh giản dị của chén nước nóng và chén nước nguội để dạy về cách ứng xử: khi nóng giận, lời nói và hành động dễ làm tổn thương người khác, cũng như nước sôi dễ làm bỏng tay. Người cán bộ, người lãnh đạo càng cần giữ được sự điềm tĩnh, biết “để nguội” cơn giận trước khi xử lý công việc và phê bình đồng chí. Bài học nhắc thanh niên hôm nay rèn luyện kỹ năng quản trị cảm xúc, ứng xử hòa nhã, văn minh trong cả công việc lẫn cuộc sống.',
  },
];

// 2.2. Gương "Người tốt – Việc tốt" thời đại mới
export interface RoleModel {
  iconKey: 'tech' | 'doctor' | 'green';
  name: string;
  action: string;
  award: string;
}

export const roleModels: RoleModel[] = [
  {
    iconKey: 'tech',
    name: 'Thanh niên Khởi nghiệp Công nghệ',
    action:
      'Phát triển ứng dụng AI hỗ trợ nông dân tối ưu hóa năng suất cây trồng.',
    award: 'Gương mặt trẻ Việt Nam tiêu biểu',
  },
  {
    iconKey: 'doctor',
    name: 'Bác sĩ trẻ tình nguyện',
    action:
      'Vượt hàng trăm cây số mang dịch vụ y tế kỹ thuật cao về khám chữa bệnh miễn phí cho đồng bào vùng cao.',
    award: 'Thầy thuốc trẻ Việt Nam tiêu biểu',
  },
  {
    iconKey: 'green',
    name: 'Người trẻ “Xanh”',
    action:
      'Sáng lập tổ chức thu gom, tái chế rác thải nhựa, hồi sinh các dòng kênh chết tại đô thị.',
    award: 'Giải thưởng Tình nguyện Quốc gia',
  },
];
