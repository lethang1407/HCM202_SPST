export interface ParagraphData {
  tieu_de: string;
  noi_dung_nguyen_van: string[];
  chi_tiet_4_pham_chat?: {
    can: { nguyen_van: string };
    kiem: { nguyen_van: string };
    liem: { nguyen_van: string };
    chinh: { nguyen_van: string };
  };
}

export interface Chapter5Data {
  tieu_de_chuong: string;
  muc_I: {
    tieu_de: string;
    phan_1: {
      tieu_de: string;
      muc_a: ParagraphData;
    };
    phan_2: {
      tieu_de: string;
      muc_a: ParagraphData;
      muc_b: ParagraphData;
    };
    phan_3: {
      tieu_de: string;
      noi_dung_nguyen_van: string[];
    };
    phan_4: {
      tieu_de: string;
      muc_a: ParagraphData;
      muc_b: ParagraphData;
    };
  };
}

export interface Chapter6Data {
  tieu_de_chuong: string;
  muc_II: {
    tieu_de: string;
    phan_2: {
      tieu_de: string;
      muc_b: ParagraphData;
    };
  };
}

export interface IdeologyData {
  chuong_5: Chapter5Data;
  chuong_6: Chapter6Data;
}

export const ideologyData: IdeologyData = {
  "chuong_5": {
    "tieu_de_chuong": "TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC VÀ ĐOÀN KẾT QUỐC TẾ",
    "muc_I": {
      "tieu_de": "I. TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC",
      "phan_1": {
        "tieu_de": "1. Vai trò của đại đoàn kết toàn dân tộc",
        "muc_a": {
          "tieu_de": "a. Đại đoàn kết toàn dân tộc là vấn đề có ý nghĩa chiến lược, quyết định thành công của cách mạng",
          "noi_dung_nguyen_van": [
            "Trong tư tưởng Hồ Chí Minh, đại đoàn kết toàn dân tộc không phải là sách lược hay thủ đoạn chính trị mà là chiến lược lâu dài, nhất quán của cách mạng Việt Nam. Người nói rõ: “Sử dạy cho ta bài học này: Lúc nào dân ta đoàn kết muôn người như một thì nước ta độc lập, tự do. Trái lại lúc nào dân ta không đoàn kết thì bị nước ngoài xâm lấn”. Đây is vấn đề mang tính sống còn của dân tộc Việt Nam nên chiến lược này được duy trì cả trong cách mạng dân tộc dân chủ nhân dân và cách mạng xã hội chủ nghĩa. Trong mỗi giai đoạn cách mạng, trước những yêu cầu và nhiệm vụ khác nhau, chính sách và phương pháp tập hợp đại đoàn kết có thể và cần thiết phải điều chỉnh cho phù hợp với từng đối tượng khác nhau song không bao giờ được thay đổi chủ trương đại đoàn kết toàn dân tộc, vì đó là nhân tố quyết định sự thành bại của cách mạng.",
            "Từ thực tiễn xây dựng khối đại đoàn kết toàn dân tộc, Hồ Chí Minh đã khái quát thành nhiều luận điểm mang tính chân lý về vai trò và sức mạnh của khối đại đoàn kết toàn dân tộc: “Đoàn kết là sức mạnh của chúng ta”, “Đoàn kết là một lực lượng vô địch của chúng ta để khắc phục khó khăn, giành lấy thắng lợi”, “Đoàn kết là sức mạnh, đoàn kết là thắng lợi”, “Đoàn kết là sức mạnh, là then chốt của thành công”, “Bây giờ còn một điểm rất quan trọng, cũng là điểm mẹ. Điểm này mà thực hiện tốt thì đẻ ra con cháu đều tốt: Đó là đoàn kết”. Người đã đi đến kết luận: “Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công”."
          ]
        }
      },
      "phan_2": {
        "tieu_de": "2. Lực lượng của khối đại đoàn kết toàn dân tộc",
        "muc_a": {
          "tieu_de": "a. Chủ thể của khối đại đoàn kết toàn dân tộc",
          "noi_dung_nguyen_van": [
            "Chủ thể của khối đại đoàn kết toàn dân tộc, theo Hồ Chí Minh bao gồm toàn thể nhân dân, tất cả những người Việt Nam yêu nước ở các giai cấp, các tầng lớp trong xã hội, các ngành, các lứa tuổi, các dân tộc, đồng bào các tôn giáo, các đảng phái, v.v.",
            "“Nhân dân” trong tư tưởng Hồ Chí Minh vừa được hiểu với nghĩa là con người Việt Nam cụ thể, vừa là một tập hợp đông đảo quần chúng nhân dân và cả hai đều là chủ thể của khối đại đoàn kết toàn dân tộc.",
            "Nói đại đoàn kết toàn dân tộc là phải tập hợp, đoàn kết được tất cả mọi người dân vào một khối thống nhất, không phân biệt dân tộc, giai cấp, tầng lớp, đảng phái, tôn giáo, lứa tuổi, giới tính, nghề nghiệp, ở trong nước hay ở ngoài nước cùng hướng vào mục tiêu chung, “ai có tài, có đức, có sức, có lòng phụng sự Tổ quốc và phục vụ nhân dân thì ta đoàn kết với họ”.",
            "Từ “ta” ở đây là chủ thể, vừa là Đảng Cộng sản Việt Nam nói riêng, vừa là mọi người dân Việt Nam nói chung.",
            "Hồ Chí Minh còn chỉ rõ, trong quá trình xây dựng khối đại đoàn kết toàn dân tộc, phải đứng vững trên lập trường giai cấp công nhân, giải quyết hài hòa mối quan hệ giữa giai cấp, dân tộc để tập hợp lực lượng, không bỏ sót một lực lượng nào miễn là họ có lòng trung thành và sẵn sàng phục vụ Tổ quốc, không phản bội lại quyền lợi của nhân dân.",
            "Tư tưởng của Người đã định hướng cho việc xây dựng khối đại đoàn kết toàn dân tộc trong suốt tiến trình cách mạng Việt Nam, từ cách mạng dân tộc dân chủ nhân dân đến cách mạng xã hội chủ nghĩa."
          ]
        },
        "muc_b": {
          "tieu_de": "b. Nền tảng của khối đại đoàn kết toàn dân tộc",
          "noi_dung_nguyen_van": [
            "Muốn xây dựng khối đại đoàn kết toàn dân tộc, phải xác định rõ đâu là nền tảng của khối đoàn kết toàn dân tộc và những lực lượng nào tạo nên nền tảng đó.",
            "Hồ Chí Minh chỉ rõ: “Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân, mà đại đa số nhân dân là công nhân, nông dân và các tầng lớp nhân dân lao động khác. Đó là nền, gốc của đại đoàn kết. Nó cũng như cái nền của nhà, gốc của cây. Nhưng đã có nền vững, gốc tốt, còn phải đoàn kết các tầng lớp nhân dân khác”.",
            "Như vậy, lực lượng làm nền tảng cho khối đại đoàn kết toàn dân tộc theo quan điểm của Hồ Chí Minh là công nhân, nông dân và trí thức.",
            "Nền tảng này càng được củng cố vững chắc thì khối đại đoàn kết toàn dân tộc càng có thể mở rộng, khi ấy không có thế lực nào có thể làm suy yếu khối đại đoàn kết toàn dân tộc.",
            "Trong khối đại đoàn kết toàn dân tộc, phải đặc biệt chú trọng yếu tố “hạt nhân” là sự đoàn kết và thống nhất trong Đảng vì đó là điều kiện cho sự đoàn kết ngoài xã hội.",
            "Sự đoàn kết của Đảng càng được củng cố thì sự đoàn kết toàn dân tộc càng được tăng cường, Đảng đoàn kết, dân tộc đoàn kết và sự gắn bó máu thịt giữa Đảng với nhân dân đã tạo nên sức mạnh bên trong của cách mạng Việt Nam để vượt qua mọi khó khăn, thử thách, chiến thắng mọi kẻ thù, đi tới thắng lợi cuối cùng của cách mạng."
          ]
        }
      },
      "phan_3": {
        "tieu_de": "3. Điều kiện để xây dựng khối đại đoàn kết toàn dân tộc",
        "noi_dung_nguyen_van": [
          "Để xây dựng khối đại đoàn kết dân tộc, quy quy, đoàn kết được mọi giai cấp, tầng lớp cần phải bảo đảm các điều kiện sau đây:",
          "Một là, phải kế thừa truyền thống yêu nước, nhân nghĩa, đoàn kết của dân tộc.",
          "Truyền thống này được hình thành, củng cố và phát triển trong suốt quá trình dựng nước và giữ nước hàng ngàn năm của dân tộc và đã trở thành giá trị bền vững, thấm sâu vào tư tưởng, tình cảm, tâm hồn của mỗi con người Việt Nam, được lưu truyền qua nhiều thế hệ.",
          "Truyền thống đó là cội nguồn sức mạnh vô địch để cả dân tộc chiến đấu và chiến thắng thiên tai địch họa, làm cho đất nước được trường tồn, bản sắc dân tộc được giữ vững.",
          "Thứ hai, phải có lòng khoan dung, độ lượng với con người.",
          "Theo Hồ Chí Minh, trong mỗi cá nhân cũng như mỗi cộng đồng đều có những ưu điểm, khuyết điểm, mặt tốt, mặt xấu... Cho nên, vì lợi ích của cách mạng, cần phải có lòng khoan dung độ lượng, trân trọng phần thiện dù nhỏ nhất ở mỗi người, có vậy mới tập hợp, quy tụ rộng rãi mọi lực lượng.",
          "Người từng căn dặn đồng bào: “Năm ngón tay cũng có ngón vắn, ngón dài. Nhưng vắn dài đều họp nhau lại nơi bàn tay. Trong mấy triệu người cũng có người thế này hay thế khác, nhưng thế này hay thế khác đều dòng dõi của tổ tiên ta. Vậy nên ta phải khoan hồng đại độ. Ta phải nhận rằng đã là con Lạc cháu Hồng thì ai cũng có ít hay nhiều lòng ái quốc. Đối với những đồng bào lạc lối lầm đường, ta phải lấy tình thân ái mà cảm hóa họ. Có như thế mới thành đại đoàn kết, có đại đoàn kết thì tương lai chắc chắn sẽ vẻ quang”.",
          "Ba là, phải có niềm tin vào nhân dân.",
          "Với Hồ Chí Minh, yêu dân, tin dân, dựa vào dân, sống, phấn đấu vì hạnh phúc của nhân dân là nguyên tắc tối cao trong cuộc sống.",
          "Nguyên tắc này vừa là sự tiếp nối truyền thống dân tộc “Nước lấy dân làm gốc”, “Chở thuyền và lật thuyền cũng là dân”, đồng thời là sự quán triệt sâu sắc nguyên lý mácxít “Cách mạng là sự nghiệp của quần chúng”.",
          "Dân là chỗ dựa vững chắc đồng thời cũng là nguồn sức mạnh vô địch của khối đại đoàn kết toàn dân tộc, quyết định thắng lợi của cách mạng.",
          "Vì vậy, muốn thực hiện đại đoàn kết toàn dân tộc, phải có niềm tin vào nhân dân."
        ]
      },
      "phan_4": {
        "tieu_de": "4. Hình thức tổ chức của khối đại đoàn kết toàn dân tộc – Mặt trận dân tộc thống nhất",
        "muc_a": {
          "tieu_de": "a. Mặt trận dân tộc thống nhất",
          "noi_dung_nguyen_van": [
            "Khối đại đoàn kết toàn dân tộc chỉ trở thành lực lượng to lớn, có sức mạnh khi được tập hợp, tổ chức lại thành một khối vững chắc, đó là Mặt trận dân tộc thống nhất.",
            "Mặt trận dân tộc thống nhất là nơi quy tụ mọi tổ chức và cá nhân yêu nước, tập hợp mọi người dân Việt Nam ở trong nước và kiều bào sinh sống ở nước ngoài.",
            "Hồ Chí Minh rất chú trọng đến việc tập hợp quần chúng nhân dân vào những tổ chức yêu nước phù hợp như các hội ái hữu hay tương trợ, công hội hay nông hội, đoàn thanh niên hay hội phụ nữ, đội thiếu niên nhi đồng hay phụ lão, hội Phật giáo cứu quốc, Công giáo yêu nước hay những nghiệp đoàn... trong đó bao trùm là Mặt trận dân tộc thống nhất.",
            "Tùy theo từng thời kỳ và căn cứ vào nhiệm vụ của từng chặng đường cách mạng, Mặt trận dân tộc thống nhất có những tên gọi khác nhau như: Hội Phản đế đồng minh (1930); Mặt trận dân chủ (1936); Mặt trận nhân dân phản đế (1939); Mặt trận Việt Minh (1941); Mặt trận Liên Việt (1951); Mặt trận dân tộc giải phóng miền Nam Việt Nam (1960); Mặt trận Tổ quốc Việt Nam (1955, 1976)...",
            "Tuy nhiên, thực chất chỉ là một, đó là tổ chức chính trị - xã hội rộng rãi, tập hợp đông đảo các giai cấp, tầng lớp, dân tộc, tôn giáo, đảng phái, các tổ chức, cá nhân yêu nước ở trong và ngoài nước, phấn đấu vì mục tiêu chung là độc lập, thống nhất của Tổ quốc và tự do, hạnh phúc của nhân dân."
          ]
        },
        "muc_b": {
          "tieu_de": "b. Nguyên tắc xây dựng và hoạt động của Mặt trận dân tộc thống nhất",
          "noi_dung_nguyen_van": [
            "Trong tư tưởng Hồ Chí Minh, Mặt trận dân tộc thống nhất cần được xây dựng và hoạt động trên cơ sở các nguyên tắc:",
            "Một là: Phải được xây dựng trên nền tảng liên minh công nhân - nông dân - trí thức và đặt dưới sự lãnh đạo của Đảng.",
            "Hồ Chí Minh xác định mục đích chung của mặt trận dân tộc thống nhất là nhằm tập hợp tới mức cao nhất lực lượng dân tộc vào khối đại đoàn kết toàn dân tộc.",
            "Mặt trận là một khối đoàn kết chặt chẽ, có tổ chức trên nền tảng khối liên minh giữa giai cấp công nhân, giai cấp nông dân, đội ngũ trí thức dưới sự lãnh đạo của Đảng.",
            "Đây là nguyên tắc cốt lõi trong chiến lược đại đoàn kết toàn dân tộc của Hồ Chí Minh, trên cơ sở đó để mở rộng Mặt trận, làm cho Mặt trận thực sự quy tụ được cả dân tộc, kết thành một khối vững chắc trong Mặt trận.",
            "Người viết: “Lực lượng chủ yếu trong khối đoàn kết dân tộc là công nông, cho nên liên minh công nông là nền tảng của Mặt trận dân tộc thống nhất”.",
            "Người chỉ rõ rằng, sở dĩ phải lấy liên minh công nông làm nền tảng “vì họ là người trực tiếp sản xuất tất cả mọi tài phú làm cho xã hội sống. Vì họ đông hơn hết, mà cũng bị áp bức bóc lột nặng nề hơn hết. Vì chí khí cách mạng của họ chắc chắn, bền bỉ hơn của mọi tầng lớp khác”.",
            "Người căn dặn, không nên chỉ nhấn mạnh vai trò của công nông, mà còn phải thấy vai trò và sự cần thiết phải liên minh với các giai cấp khác, nhất là với đội ngũ trí thức.",
            "Đảng Cộng sản Việt Nam vừa là thành viên, vừa là lực lượng lãnh đạo, Đảng không có lợi ích riêng, mà gắn liền với lợi ích toàn xã hội, toàn dân tộc.",
            "Đảng lãnh đạo đối với mặt trận thể hiện ở khả năng nắm bắt thực tiễn, phát hiện ra quy luật khách quan sự vận động của lịch sử để vạch đường lối và phương pháp cách mạng phù hợp, lãnh đạo Mặt trận hoàn thành nhiệm vụ của mình là đấu tranh giải phóng dân tộc và giải phóng giai cấp, kết hợp độc lập dân tộc với chủ nghĩa xã hội.",
            "Hai là: Phải xuất phát từ mục tiêu vì nước, vì dân.",
            "Mục đích chung của Mặt trận được Hồ Chí Minh xác định cụ thể, phù hợp với từng giai đoạn cách mạng, nhằm tập hợp tới mức cao nhất lực lượng dân tộc vào khối đại đoàn kết.",
            "Theo Người, đại đoàn kết phải xuất phát từ mục tiêu vì nước, vì dân, trên cơ sở yêu nước, thương dân, chống áp bức bóc lột, nghèo nàn lạc hậu.",
            "Người cho rằng, nếu nước được độc lập mà dân không được hưởng hạnh phúc, tự do thì độc lập cũng chẳng có ý nghĩa gì.",
            "Vì vậy, đoàn kết phải lấy lợi ích tối cao của dân tộc, lợi ích căn bản của nhân dân làm mục tiêu phấn đấu, đây là nguyên tắc bất di bất dịch, là ngọn cờ đoàn kết để quy tụ các tầng lớp, giai cấp, đảng phái, dân tộc và tôn giáo vào trong Mặt trận.",
            "Ba là: Phải hoạt động theo nguyên tắc hiệp thương dân chủ.",
            "Mặt trận dân tộc thống nhất là tổ chức chính trị - xã hội rộng lớn của cả dân tộc, bao gồm nhiều giai cấp, tầng lớp, đảng phái, dân tộc, tôn giáo khác nhau, với nhiều lợi ích khác nhau.",
            "Do vậy, hoạt động của Mặt trận phải dựa trên nguyên tắc hiệp thương dân chủ, Mọi vấn đề của Mặt trận đều phải được đem ra để tất cả các thành viên cùng nhau bàn bạc công khai, để đi đến nhất trí, loại trừ mọi sự áp đặt hoặc dân chủ hình thức.",
            "Những lợi ích riêng chính đáng, phù hợp với lợi ích chung của đất nước, của dân tộc cần được tôn trọng, những gì riêng biệt, không phù hợp sẽ dần được giải quyết bằng lợi ích chung của dân tộc, bằng sự nhận thức ngày càng đúng đắn hơn của mỗi người, mỗi bộ phận về mối quan hệ giữa lợi ích chung và lợi ích riêng.",
            "Do vậy, hoạt động của Mặt trận phải theo nguyên tắc hiệp thương dân chủ mới quy tụ được các tầng lớp, giai cấp, đảng phái, dân tộc, tôn giáo vào Mặt trận dân tộc thống nhất.",
            "Bốn là: Phải đoàn kết lâu dài, chặt chẽ, đoàn kết thật sự, chân thành, thân ái giúp đỡ nhau cùng tiến bộ.",
            "Theo Hồ Chí Minh, đoàn kết trong Mặt trận phải là lâu dài, chặt chẽ, đoàn kết thật sự, chân thành, thân ái giúp đỡ nhau cùng tiến bộ.",
            "Trong Mặt trận, các thành viên có những điểm tương đồng nhưng cũng có những điểm khác biệt, nên cần có sự bàn bạc để đi đến nhất trí.",
            "Hồ Chí Minh nhấn mạnh phương châm “cầu đồng tồn dị”, lấy cái chung để hạn chế cái riêng, cái khác biệt; đồng thời Người nêu rõ: “Đoàn kết thực sự nghĩa là mục đích phải nhất trí và lập trường cũng phải nhất trí. Đoàn kết thực sự nghĩa là vừa đoàn kết, vừa đấu tranh, học những cái tốt của nhau, phê bình những cái sai của nhau và phê bình trên lập trường thân ái, vì nước, vì dân” để tạo nên sự đoàn kết gắn bó chặt chẽ, lâu dài tạo tiền đề mở rộng khối đại đoàn kết trong mặt trận dân tộc thống nhất."
          ]
        }
      }
    }
  },
  "chuong_6": {
    "tieu_de_chuong": "TƯ TƯỞNG HỒ CHÍ MINH VỀ VĂN HÓA, ĐẠO ĐỨC, CON NGƯỜI",
    "muc_II": {
      "tieu_de": "II. TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐẠO ĐỨC",
      "phan_2": {
        "tieu_de": "2. Quan điểm về những chuẩn mực đạo đức cách mạng",
        "muc_b": {
          "tieu_de": "b. Cần, kiệm, liêm, chính, chí công vô tư",
          "noi_dung_nguyen_van": [
            "Cần, kiệm, liêm, chính, chí công vô tư là nội dung cốt lõi của đạo đức cách mạng, đó là phẩm chất đạo đức gắn liền với hoạt động hằng ngày của mỗi người. Vì vậy, Hồ Chí Minh đã đề cập phẩm chất này nhiều nhất, thường xuyên nhất, phản ánh ngay từ cuốn sách Đường cách mệnh đến bản Di chúc cuối đời.",
            "Hồ Chí Minh chỉ rõ: “Bọn phong kiến ngày xưa nêu ra cần, kiệm, liêm, chính, nhưng không bao giờ làm mà lại bắt nhân dân phải tuân theo để phụng sự quyền lợi cho chúng. Ngày nay ta đề ra cần, kiệm, liêm, chính cho cán bộ thực hiện làm gương cho nhân dân theo để lợi cho nước cho dân”. Với ý nghĩa như vậy, cần, kiệm, liêm, chính, chí công vô tư cũng là một biểu hiện cụ thể của phẩm chất “trung với nước, hiếu với dân”.",
            "“Cần, kiệm, liêm, chính, chí công vô tư” cũng là những khái niệm cũ trong đạo đức truyền thống dân tộc, được Hồ Chí Minh lọc bỏ những nội dung không phù hợp và đưa vào những nội dung mới đáp ứng yêu cầu của cách mạng."
          ],
          "chi_tiet_4_pham_chat": {
            "can": {
              "nguyen_van": "“Cần tức là siêng năng, chăm chỉ, cố gắng dẻo dai”. “Muốn cho chữ Cần có nhiều kết quả hơn, thì phải có kế hoạch cho mọi công việc”. Cần tức là lao động cần cù, siêng năng; lao động có kế hoạch, sáng tạo, có năng suất cao; lao động với tinh thần tự lực cánh sinh, không lười biếng. Phải thấy rõ, “Lao động là nghĩa vụ thiêng liêng, là nguồn sống, nguồn hạnh phúc của chúng ta”."
            },
            "kiem": {
              "nguyen_van": "“Kiệm là thế nào? Là tiết kiệm, không xa xỉ, không hoang phí, không bừa bãi”. Kiệm tức là tiết kiệm sức lao động, tiết kiệm thì giờ, tiết kiệm tiền của của dân, của nước, của bản thân mình; không phô trương hình thức, không liên hoan chè chén lu bù. “Tiết kiệm không phải là bủn xỉn. Khi không nên tiêu xài thì một đồng xu cũng không nên tiêu. Khi có việc đáng làm, việc ích lợi cho đồng bào, cho Tổ quốc, thì dù bao nhiêu công, tốn bao nhiêu của, cũng vui lòng. Như thế mới đúng là kiệm. Việc đáng tiêu mà không tiêu, là bủn xỉn, chứ không phải là kiệm. Tiết kiệm phải kiên quyết không xa xỉ”. “Cần với kiệm, phải đi đôi với nhau, như hai chân của con người”. Hồ Chí Minh yêu cầu “Phải cần kiệm xây dựng nước nhà”."
            },
            "liem": {
              "nguyen_van": "Liêm “là trong sạch, không tham lam”; là liêm khiết, “luôn luôn tôn trọng giữ gìn của công, của dân”, “Liêm là không tham địa vị. Không tham tiền tài. Không tham sung sướng. Không ham người tâng bốc mình. Vì vậy mà quang minh chính đại, không bao giờ hủ hóa. Chỉ có một thứ ham là ham học, ham làm, ham tiến bộ”. “Chữ Liêm phải đi đôi với chữ Kiệm. Cũng như chữ Kiệm phải đi đôi với chữ Cần. Có Kiệm mới Liêm được”."
            },
            "chinh": {
              "nguyen_van": "“Chính nghĩa là không tà, nghĩa là thẳng thắn, đứng đắn. Điều gì không đứng đắn, thẳng thắn, tức là tà”. Chính được thể hiện rõ trong ba mối quan hệ: “Đối với mình - Chớ tự kiêu, tự đại”. “Đối với người:… Chớ nịnh hót người trên. Chớ xem khinh người dưới. Thái độ phải chân thành, khiêm tốn,... Phải thực hành chữ Bác – Ái”. “Đối với việc: Phải để công việc nước lên trên, trước việc tư, việc nhà”; “việc thiện thì dù nhỏ mấy cũng làm. Việc ác thì dù nhỏ mấy cũng tránh”."
            }
          }
        }
      }
    }
  }
}
