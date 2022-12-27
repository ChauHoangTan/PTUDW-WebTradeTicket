'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const items =[
      {ten_Nha_Xe:'Tiến Oanh', So_Luong_Xe: 7, SDT: '123456789', stars: 4.5, Mo_ta: 'Nhà xe Tiến Oanh luôn nổi bật với dịch vụ vận tải hành khách trên tuyến đường Sài Gòn <> Buôn Mê Thuột. Ngày nay, hãng xe Tiến Oanh đã mở rộng dịch vụ sang tuyến đường Sài Gòn <> Đà Lạt. Phục vụ dòng xe limousine giường nằm chất lượng cao, nhà xe vẫn cam kết mang lại cho hành khách những dịch vụ chất lượng, an toàn và thoải mái nhất.'
    , Dia_Chi:'Trụ sở: 266 Đồng Đen ,P10.Q.Tân Bình'},
    {ten_Nha_Xe:'Phương Trang', So_Luong_Xe: 6, SDT: '123456789', stars: 4, Mo_ta: 'Công ty Phương Trang được thành lập năm 2001 với hoạt động kinh doanh chính trong lĩnh vực mua bán xe ô tô, vận tải hành khách, bất động sản và kinh doanh dịch vụ. Ra đời từ một doanh nghiệp nhỏ với số lượng đầu xe chỉ từ 5-10 xe khách các loại. Trải qua quá trình hoạt động, với đường lối kinh doanh Uy tín - Chất lượng, với phương châm phục vụ “Chất lượng là danh dự”, sự lịch thiệp, hòa nhã, tận tình, chu đáo của đội ngũ nhân viên, xe khách Phương Trang đã trở thành một địa chỉ tin cậy của đông đảo khách hàng trong cả nước, Công ty Cổ phần Xe Khách Phương Trang – FUTA Bus Lines hiện đang khai thác hơn 60 tuyến vận tải hành khách liên tỉnh cố định trải dài từ Nam ra Bắc với hơn 250 phòng vé và trạm trung chuyển, hơn 2,000 đầu xe các loại, phục vụ hơn 20 triệu lượt khách mỗi năm.'
    , Dia_Chi:'Trụ sở chính tại 468-468A Lê Văn Lương, P.Tân Phong, Q.7, TP Hồ Chí Minh.'},
    {ten_Nha_Xe:'Sao Việt', So_Luong_Xe: 7, SDT: '123456789', stars: 4.5, Mo_ta: 'Xe Sao Việt đi Sapa có trang thiết bị hiện đại, dàn xe giường nằm mới đẹp, các tuyến đường tập trung ở Tây Bắc. Với quan niệm rằng: Khách hàng là người quyết định sự tồn tại cũng như phát triển của công ty, hãng xe Sao Việt đã được rất nhiều lời khen nhờ đội ngũ nhân viên nhiệt tình, hiếu khách, cư xử văn minh, lịch thiệp. '
    , Dia_Chi:'Trụ sở: Số 123, ngõ 85, Tân Xuân, Xuân Đỉnh, Bắc Từ Liêm, TP Hà Nội.'},
    {ten_Nha_Xe:'Sao Mai', So_Luong_Xe: 8, SDT: '123456789', stars: 4.5, Mo_ta: 'Bắt đầu đi vào hoạt động từ ngày 04 tháng 8 năm 2013, hãng xe khách Sao Mai cung cấp dịch vụ xe giường nằm cao cấp, phục vụ nước uống và khăn lạnh trên xe, lái xe và phụ xe thân thiện, nhiệt tình. Với nhu cầu khách hàng ngày một tăng cao, nhà xe Sao Mai đã tăng cường thêm mật độ các chuyến và phong phú địa điểm để phục vụ khách hàng một cách tốt nhất. '
    , Dia_Chi:'Trụ sở: 450h Điện Biên Phủ , phường 21 , quận Bình Thạnh , tp Hồ Chí Minh.'},
    {ten_Nha_Xe:'Hạ Long Travel', So_Luong_Xe: 8, SDT: '123456789', stars: 4.8, Mo_ta: 'Xe Hạ Long Travel limousine là hãng xe limousine 9 chỗ chuyên nghiệp phục vụ hành khách theo tuyến đường Hà Nội – Hạ Long và ngược lại. Xe Hạ Long Travel đi Hạ Long có đủ các tiện ích như máy lạnh, nước uống, wifi, LCD giải trí. Ngoài ra, nhà xe cũng cam kết chỉ chở đủ số lượng ghế có trên xe và không bắt khách dọc đường xe chạy. Nhà xe hướng tới sự trải nghiệm an toàn, thoải mái của hành khách nên chú trọng chăm chút cả về chất lượng xe lẫn đội ngũ nhân viên phục vụ chuyên nghiệp. '
    , Dia_Chi:'Trụ sở: 107 Phố Vọng, phường Đồng Tâm, quận Hai Bà Trưng, Hà Nội.'},
    {ten_Nha_Xe:'Quốc Đạt', So_Luong_Xe: 7, SDT: '123456789', stars: 4.7, Mo_ta: 'Quốc Đạt là nhà xe quen thuộc di chuyển tuyến Đà Nẵng - Dak Nông và ngược lại. Xe được trang bị các dịch vụ tiện ích như máy lạnh, khăn ướt, Toilet.. với hi vọng  tạo cảm giác thoải mái hơn cho hành khách trong suôt chuyến đi. Xe di chuyển nhanh và đúng giờ,ngoài ra. Quốc Đạt còn có đội ngũ lái xe lành nghề, có kinh nghiệm cũng như tinh thần trách nhiệm cao, chắc chắn sẽ mang đến cho hành khách chuyến đi thật an toàn. Sự ủng hộ và yêu mến của quý khách là động lực để chúng tôi cố gắng.'
    , Dia_Chi:'Trụ sở: 48 Bắc Sơn, P. Hòa An, Q. Cẩm Lệ, Đà Nẵng.'},
    {ten_Nha_Xe:'Thiện Thành', So_Luong_Xe: 8, SDT: '123456789', stars: 4.8, Mo_ta: 'Là nhà xe nổi tiếng về chất lượng và uy tín trên tuyến đường Sài Gòn – Rạch Giá – Kiên Giang, nhà xe Thiện Thành Limousine từ lâu đã sớm khẳng định thương hiệu của một hãng xe khách đẳng cấp. Phục vụ dòng xe giường phòng limousine 20 chỗ đầy đủ tiện nghi, xe Thiện Thành limousine đi Kiên Giang đã thu hút được rất nhiều sự quan tâm của hành khách trên tuyến đường này.'
    , Dia_Chi:'Trụ sở: Văn phòng Tân Phú - 20 Hoa Bằng, Tân Phú.'}
    ]

    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })

    await queryInterface.bulkInsert('Nha_Xes', items, {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Nha_Xes', null, {});
  }
};
