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
      {ten_Nha_Xe:'Phương Trang', So_Luong_Xe: 7, SDT: '123456789', stars: 4.5, Mo_ta: `<div class="container">
      <ul>

      
          <div class = "d-flex justify-content-center fw-bold fs-5 my-2 text-success">Mô tả chuyến xe Phương Trang</div>
          <img src="/img/MoTaNhaXe/PhuongTrang/img1.jpg" class="w-100" >
          <li>
              <p class="mx-2 mt-2">
                  Công ty Phương Trang được thành lập năm 2001. Trải qua 20 năm phát triển đặt khách hàng làm trọng tâm,
                  chúng tôi tự hào trở thành doanh nghiệp vận tải nòng cốt đóng góp tích cực vào sự phát triển chung 
                  của ngành vận tải nói riêng và nền kinh tế đất nước nói chung. Luôn cải tiến mang đến chất lượng dịch
                  vụ tối ưu nhất dành cho khách hàng, Công ty Phương Trang được ghi nhận qua nhiều danh hiệu danh giá 
                  như “Top 5 Công ty Uy tín ngành Vận Tải và Logistics”, “Top 50 Nhãn hiệu nổi tiếng Việt Nam”,
                  “Sản phẩm và Dịch vụ Chất lượng Châu Á”, “Top 10 Thương hiệu chất lượng Châu Á”,…
              </p>
          </li>

          <img src="/img/MoTaNhaXe/PhuongTrang/img2.jpg" alt="">
          <li>
              
                  Tuân thủ phương châm “Chất lượng là danh dự”, Công ty Cổ phần Xe Khách Phương Trang
                   – FUTA Bus Lines hiện đang khai thác hơn 60 tuyến vận tải hành khách liên tỉnh 
                   cố định trải dài từ Nam ra Bắc với hơn 250 phòng vé và trạm trung chuyển, 
                   hơn 2,000 đầu xe các loại, phục vụ hơn 20 triệu lượt khách mỗi năm.
              </p>
          </li>
              
          <li>
              <p class="mx-2 my-2">
                  Nhà Xe Phương Trang là một trong những nhà xe lớn và uy tín nhất Việt Nam.
                  Với hơn 1000 chuyến xe mỗi ngày trên cả nước, xe Phương Trang là sự lựa chọn tin cậy và chất lượng cho bạn.
              </p>
                  
              </p>
          </li>

          <li>
              <p class="mx-2 my-2">
                  Ra đời từ một doanh nghiệp nhỏ với số lượng đầu xe chỉ từ 5 đến 10 xe khách các loại. Trải qua quá trình hoạt động, 
                  với đường lối kinh doanh Uy tín - Chất lượng, với phương châm phục vụ "Chất lượng là danh dự", sự lịch thiệp, 
                  hòa nhã, tận tình, chu đáo của đội ngũ nhân viên, Công Ty Cổ Phần Vận Tải Và Dịch Vụ Du Lịch Phương Trang đã 
                  trở thành một địa chỉ tin cậy của đông đảo khách hàng trong cả nước, được hành khách và lãnh đạo chính quyền 
                  các cấp hết lòng khen ngợi và đánh giá cao.
              </p>
          </li>
          <li>Hơn 2 triệu lượt khách: Phương Trang phục vụ hơn 2 triệu lượt khách/bình quân năm trên toàn quốc</li>
          <li>Hơn 200 phòng vé, Trạm trung chuyển: Phương Trang phục vụ hơn 20 triệu lượt khách/ bình quân năm trên toàn quốc</li>
          <li>Hơn 1000 chuyến mỗi ngày: Phương Trang phục vụ hơn 1000 chuyến xe đường dài và liên tỉnh mỗi ngày</li>
      </ul>
  </div>`
    , Dia_Chi:'Trụ sở: 266 Đồng Đen ,P10.Q.Tân Bình',Lo_Trinh: `<div class="container">
    <ul><span class="fw-bold fs-5 text-success mx-5">Địa điểm đón, trả khách ở Sài Gòn:</span> 
        <li>Bến xe Miền Tây – 395 Kinh Dương Vương, Phường An Lạc, Quận Bình Tân, Thành phố Hồ Chí Minh.</li>
        <li>Bến xe Miền Đông – 292 Đinh Bộ Lĩnh, Phường 26, Quận Bình Thạnh, Thành phố Hồ Chí Minh.</li>
        <li>Văn phòng Lê Hồng Phong – 233 Lê Hồng Phong, Phường 14, Quận 5, Thành phố Hồ Chí Minh.</li>
        <li>Văn phòng Cao Văn Lầu – 94 Cao Văn Lầu, Phường 1, Quận 6, Thành phố Hồ Chí Minh.</li>
        <li>Văn phòng Đồng Đen – 288 Đồng Đen, Phường 10, Quận Tân Bình, Thành phố Hồ Chí Minh.</li>
        <li>Văn phòng Y Dược – 15 Lô A, Đặng Thái Thân, Phường 11, Quận 5, Thành phố Hồ Chí Minh.</li>
        <li>Văn phòng Hàng Xanh – 486H Điện Biên Phủ, Phường 21, Quận Bình Thạnh, Thành phố Hồ Chí Minh.</li>
        <li>Số 26 Nguyễn Cư Trinh, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh.</li>
    </ul>

    <ul><span class="fw-bold fs-5 text-success mx-5">Địa điểm đón, trả khách ở Đài Lạt:</span> 
        <li>Bến xe liên tỉnh Đà Lạt – 01 Tô Hiến Thành, Phường 3, Thành phố Đà Lạt</li>
        <li>Có xe Trung chuyển về khu vực trung tâm thành phố.</li>
    </ul>
</div>`,Dich_Vu: `<div class="row justify-content-center align-items-center g-2">
<div class="col-sm-6 service-item">
    <div>
        <i class="fas fa-wifi"></i>
        <span>Wifi</span> 
    </div>
    
    <div>
        <i class="fad fa-air-conditioner"></i>
        <span>Máy lạnh</span> 
    </div>

    <div>
        <i class="fad fa-bed-alt"></i>
        <span>Gối</span> 
    </div>

    <div>
        <i class="fal fa-blanket"></i>
        <span>Chăn</span> 
    </div>

    <div>
        <i class="fal fa-utensils"></i>
        <span>Đồ ăn</span> 
    </div>

    <div>
        <i class="fad fa-glass-martini"></i>
        <span>Thức uống</span> 
    </div>
</div>
<div class="col-sm-6 service-item">
    <div>
        <i class="fad fa-plug"></i>
        <span>Cắm sạc</span> 
    </div>
    
    <div>
        <i class="fad fa-charging-station"></i>
        <span>Ổ sạc</span> 
    </div>

    <div>
        <i class="fad fa-hammer"></i>
        <span>Búa phá kính</span> 
    </div>

    <div>
        <i class="fad fa-hands-wash"></i>
        <span>Nước rửa tay</span> 
    </div>

    <div>
        <i class="fad fa-spray-can"></i>
        <span>Xịt khử trùng</span> 
    </div>

    <div>
        <i class="fad fa-tv"></i>
        <span>Tivi</span> 
    </div>
</div>

</div>`},
    {ten_Nha_Xe:'Tiến Oanh', So_Luong_Xe: 6, SDT: '123456789', stars: 4, Mo_ta: `<div class="container">
    <ul>

    
        <div class = "d-flex justify-content-center fw-bold fs-5 my-2 text-success">Mô tả chuyến xe Tiến Oanh</div>
        <img src="/img/MoTaNhaXe/TienOanh/img1.jpg" class="w-100" >
        <li>
            <p class="mx-2 mt-2">
                Nhà xe Tiến Oanh với phong cách phục vụ chuyên nghiệp, ân cần, nhẹ nhàng, chu đáo cùng dàn xe cao cấp 
                sở hữu nhiều trang thiết bị tiện nghi mang đến sự tiện lợi, an toàn cho hành khách. 
                Cùng tìm hiểu giá vé, lộ trình, cách đặt vé của xe khách Tiến Oanh nhé!
            </p>
        </li>

        <img src="/img/MoTaNhaXe/TienOanh/img2.jpg" alt="">
        <li>
            
                Ngoài xe giường nằm 40 chỗ cao cấp, xe khách Tiến Oanh ra đời từ năm 2000 còn đầu tư hàng loạt 
                dòng xe Mercedes-Benz loại 16 chỗ cải tiến thành 9 chỗ để có thể cung cấp được không gian rộng rãi, 
                thoáng mát và sang trọng hơn cho hành khách thoải mái hơn khi đi trên xe.
            
        </li>
            
        <li>
            <p class="mx-2 my-2">
                Và trải qua hơn 10 năm hoạt động trong lĩnh vực vận tải, Tiến Oanh Limousine với đường lối kinh doanh 
                riêng cùng phương châm phục vụ tốt nhất cho khách hàng, đã trở thành địa chỉ uy tín trong việc cung cấp 
                dịch vụ vận chuyển hành khách từ Sài Gòn – Buôn Mê Thuột và ngược lại.
            </p>
                
            </p>
        </li>

      
    </ul>
</div>`
    , Dia_Chi:'Trụ sở chính tại 468-468A Lê Văn Lương, P.Tân Phong, Q.7, TP Hồ Chí Minh.', Lo_Trinh: `<div class="container">
    <ul><span class="fw-bold fs-5 text-success mx-5">Địa điểm đón, trả khách ở Sài Gòn:</span> 
        <li>266 Đồng Đen, Phường 10, Quận Tân Bình, Thành phố Hồ Chí Minh.</li>
        <li>804 Song Hành, Xa Lộ Hà Nội, Phường Hiệp Phú Q9, Thành phố Thủ Đức</li>
    
    </ul>

    <ul><span class="fw-bold fs-5 text-success mx-5">Địa điểm đón, trả khách ở Đắk Lắk:</span> 
        <li>Ngã 3 Easim, Trung Hòa, Cư Kuin</li>
        <li>77 Nguyễn Thái Bình, xã Hòa Thắng</li>
        <li>134 Hai Bà Trưng, Thành Phố Buôn Mê Thuộc</li>
    </ul>

    <ul><span class="fw-bold fs-5 text-success mx-5">Địa điểm đón, trả khách ở Lâm Đồng:</span> 
        <li>272 Phù Đổng Thiên Vương, Văn Phòng Đà Lạt</li>
    </ul>

    <ul><span class="fw-bold fs-5 text-success mx-5">Địa điểm đón, trả khách ở Bình Dương:</span> 
        <li>660 Đại Lộ Bình Dương, P Hiệp Thành, Thành Phố Thủ Dầu Một</li>
    </ul>
</div>`,Dich_Vu:`<div class="row justify-content-center align-items-center g-2">
<div class="col-sm-6 service-item">
    <div>
        <i class="fas fa-wifi"></i>
        <span>Wifi</span> 
    </div>
    
    <div>
        <i class="fad fa-air-conditioner"></i>
        <span>Máy lạnh</span> 
    </div>

    <div>
        <i class="fad fa-bed-alt"></i>
        <span>Gối</span> 
    </div>

    <div>
        <i class="fal fa-blanket"></i>
        <span>Chăn</span> 
    </div>

    <div>
        <i class="fal fa-utensils"></i>
        <span>Đồ ăn</span> 
    </div>

    <div>
        <i class="fad fa-glass-martini"></i>
        <span>Thức uống</span> 
    </div>
</div>
<div class="col-sm-6 service-item">
    <div>
        <i class="fad fa-plug"></i>
        <span>Cắm sạc</span> 
    </div>
    
    <div>
        <i class="fad fa-charging-station"></i>
        <span>Ổ sạc</span> 
    </div>

    <div>
        <i class="fad fa-hammer"></i>
        <span>Búa phá kính</span> 
    </div>

    <div>
        <i class="fad fa-hands-wash"></i>
        <span>Nước rửa tay</span> 
    </div>

    <div>
        <i class="fad fa-spray-can"></i>
        <span>Xịt khử trùng</span> 
    </div>

    <div>
        <i class="fad fa-tv"></i>
        <span>Tivi</span> 
    </div>
</div>

</div>`},
    {ten_Nha_Xe:'Sao Việt', So_Luong_Xe: 7, SDT: '123456789', stars: 4.5, Mo_ta: `<div class="container">
    <ul>

    
        <div class = "d-flex justify-content-center fw-bold fs-5 my-2 text-success">Mô tả chuyến xe Sao Việt</div>
        <img src="/img/MoTaNhaXe/SaoViet/img1.jpg" class="w-100" >
        <li>
            <p class="mx-2 mt-2">
                Luôn ví mình là “ngôi nhà di động của hành khách”, nhà xe Sao Việt luôn mang đến những trải nghiệm 
                thú vị cho hành khách trên mỗi chuyến đi. Cùng tìm hiểu giá vé, lộ trình, cách đặt vé của xe khách Sao Việt nhé!
            </p>
        </li>

        <img src="/img/MoTaNhaXe/SaoViet/img2.jpg" alt="">
        <li>
            
                Xe khách Sao Việt đã trở thành thương hiệu xe khách được nhiều khách hàng tin tưởng và lựa chọn. 
                Sao Việt với gần 40 chuyến mỗi ngày từ Hà Nội đi Lào Cai – Sapa và ngược lại, trải dài từ 6h sáng đến tận 24h đêm. 
                Nhà xe luôn giúp cho hành khách chọn được chuyến xe phù hợp nhất với thời gian của mình.
            
        </li>
            
        <li>
            <p class="mx-2 my-2">
                Xe khách Sao Việt có 02 dòng xe chính là xe giường nằm 40 chỗ và xe Limousine 9 chỗ. Tất cả đều được bảo dưỡng, 
                nâng cấp thường xuyên nên có chất lượng tốt. Xe được trang bị đầy đủ tiện nghi, hiện đại, tất cả các xe đều có ghế 
                bọc da êm ái và có đầy đủ tiện nghi: tivi, wifi, điều hòa, chăn đắp, tủ lạnh mini và nước uống miễn phí giúp hành khách 
                thoải mái trên cả hành trình.
            </p>
                
            </p>
        </li>

      
    </ul>
</div>`
    , Dia_Chi:'Trụ sở: Số 123, ngõ 85, Tân Xuân, Xuân Đỉnh, Bắc Từ Liêm, TP Hà Nội.',Lo_Trinh: `<div class="container">
    <ul><span class="fw-bold fs-5 text-success mx-5">Địa điểm đón, trả khách ở Hà Nội:</span> 
        <li>VP 114 Trần Nhật Duật, Hoàn Kiếm, Hà Nội.</li>
        <li>VP 789 Giải Phóng, Hoàng Mai, Hà Nội (cách bến xe Giáp Bát 500m).</li>
        <li>VP số 7, Phạm Văn Đồng, Mỹ Đình, Hà Nội (cách bến xe Mỹ Đình 500m).</li>
        <li>VP Bến xe Mỹ Đình (quầy vé 36), Từ Liêm, Hà Nội.</li>
        <li>VP Nội Bài, QL2A, đầu cao tốc Hà Nội - Lào Cai.</li>
    
    </ul>

    <ul><span class="fw-bold fs-5 text-success mx-5">Địa điểm đón, trả khách ở Lào Cai:</span> 
        <li>Tại Bảo Hà: Văn phòng Bảo Hà, Bảo Hà, Lào Cai</li>
        <li>VP 333 Phố Mới, quảng trường Ga, Lào Cai.</li>
        <li>Bến xe Trung tâm Lào Cai, Lào Cai.</li>
    </ul>

   
</div>`,Dich_Vu:`<div class="row justify-content-center align-items-center g-2">
<div class="col-sm-6 service-item">
    <div>
        <i class="fas fa-wifi"></i>
        <span>Wifi</span> 
    </div>
    
    <div>
        <i class="fad fa-air-conditioner"></i>
        <span>Máy lạnh</span> 
    </div>

    <div>
        <i class="fad fa-bed-alt"></i>
        <span>Gối</span> 
    </div>

    <div>
        <i class="fal fa-blanket"></i>
        <span>Chăn</span> 
    </div>

    <div>
        <i class="fal fa-utensils"></i>
        <span>Đồ ăn</span> 
    </div>

    <div>
        <i class="fad fa-glass-martini"></i>
        <span>Thức uống</span> 
    </div>
</div>
<div class="col-sm-6 service-item">
    <div>
        <i class="fad fa-plug"></i>
        <span>Cắm sạc</span> 
    </div>
    
    <div>
        <i class="fad fa-charging-station"></i>
        <span>Ổ sạc</span> 
    </div>

    <div>
        <i class="fad fa-hammer"></i>
        <span>Búa phá kính</span> 
    </div>

    <div>
        <i class="fad fa-hands-wash"></i>
        <span>Nước rửa tay</span> 
    </div>

    <div>
        <i class="fad fa-spray-can"></i>
        <span>Xịt khử trùng</span> 
    </div>

    <div>
        <i class="fad fa-tv"></i>
        <span>Tivi</span> 
    </div>
</div>

</div>`},
    {ten_Nha_Xe:'Sao Mai', So_Luong_Xe: 8, SDT: '123456789', stars: 4.5, Mo_ta: `<div class="container">
    <ul>

    
        <div class = "d-flex justify-content-center fw-bold fs-5 my-2 text-success">Mô tả chuyến xe Sao Mai</div>
        <img src="/img/MoTaNhaXe/SaoMai/img1.jpg" class="w-100" >
        <li>
            <p class="mx-2 mt-2">
                Công ty Sao Mai tự hào là công ty cung cấp dịch vụ xe khách chất lượng cao trên tuyến đường Hải Phòng- Lào Cai. 
            </p>
        </li>

        <img src="/img/MoTaNhaXe/SaoMai/img2.jpg" alt="">
        <li>
            
                Bắt đầu đi vào hoạt động từ ngày 04 tháng 8 năm 2013, hãng xe khách Sao Mai cung cấp dịch vụ xe giường nằm cao cấp,
                 phục vụ nước uống và khăn lạnh trên xe, lái xe và phụ xe thân thiện, nhiệt tình. Với nhu cầu khách hàng ngày một 
                 tăng cao, nhà xe Sao Mai đã tăng cường thêm mật độ các chuyến và phong phú địa điểm để phục vụ khách hàng một cách tốt 
                 nhất. Trải qua hơn một năm hoạt động, nhà xe Sao Mai mong muốn nhận được những ý kiến đóng góp của khách hàng để 
                 ngày một hoàn thiện chất lượng hơn.
        </li>
            
        

      
    </ul>
</div>`
    , Dia_Chi:'Trụ sở: 450h Điện Biên Phủ , phường 21 , quận Bình Thạnh , tp Hồ Chí Minh.', Lo_Trinh:`<div class="container">
    <ul><span class="fw-bold fs-5 text-success mx-5">Địa điểm đón, trả khách ở Hải Phòng:</span> 
        <li>Bến Xe Niệm Nghĩa, 275 Trần Nguyên Hãn, Hải Phòng</li>
    </ul>

    <ul><span class="fw-bold fs-5 text-success mx-5">Địa điểm đón, trả khách ở Lào Cai:</span> 
        <li>Bến xe Phố Mới, Đường Nguyễn Công Hoan, Lào Cai</li>
    </ul>

   
</div>`, Dich_Vu:`<div class="row justify-content-center align-items-center g-2">
<div class="col-sm-6 service-item">
    <div>
        <i class="fas fa-wifi"></i>
        <span>Wifi</span> 
    </div>
    
    <div>
        <i class="fad fa-air-conditioner"></i>
        <span>Máy lạnh</span> 
    </div>

    <div>
        <i class="fad fa-bed-alt"></i>
        <span>Gối</span> 
    </div>

    <div>
        <i class="fal fa-blanket"></i>
        <span>Chăn</span> 
    </div>

    <div>
        <i class="fal fa-utensils"></i>
        <span>Đồ ăn</span> 
    </div>

    <div>
        <i class="fad fa-glass-martini"></i>
        <span>Thức uống</span> 
    </div>
</div>
<div class="col-sm-6 service-item">
    <div>
        <i class="fad fa-plug"></i>
        <span>Cắm sạc</span> 
    </div>
    
    <div>
        <i class="fad fa-charging-station"></i>
        <span>Ổ sạc</span> 
    </div>

    <div>
        <i class="fad fa-hammer"></i>
        <span>Búa phá kính</span> 
    </div>

    <div>
        <i class="fad fa-hands-wash"></i>
        <span>Nước rửa tay</span> 
    </div>

    <div>
        <i class="fad fa-spray-can"></i>
        <span>Xịt khử trùng</span> 
    </div>

    <div>
        <i class="fad fa-tv"></i>
        <span>Tivi</span> 
    </div>
</div>

</div>`},
    {ten_Nha_Xe:'Hạ Long Travel', So_Luong_Xe: 8, SDT: '123456789', stars: 4.8, Mo_ta: `<div class="container">
    <ul>

    
        <div class = "d-flex justify-content-center fw-bold fs-5 my-2 text-success">Mô tả chuyến xe Hạ Long Travel</div>
        <img src="/img/MoTaNhaXe/HaLongTravel/img1.jpg" class="w-100" >
        <li>
            <p class="mx-2 mt-2">
                Công ty Cổ phần Du lịch và dịch vụ Quốc tế Hạ Long là đơn vị hoạt động trong lĩnh vực vận tải hành 
                khách chất lượng, uy tín được đặt lên hàng đầu.Hạ Long Travel Limousine tuyến Hà Nội – Hạ Long là
                 tuyến trọng điểm Công ty đưa vào khai thác kết hợp phục vụ nhu cầu đi lại của người dân địa phương, 
                 khách đi công việc hay tham quan du lịch giữa Hà Nội và Hạ Long
            </p>
        </li>

        <img src="/img/MoTaNhaXe/HaLongTravel/img2.jpg" alt="">
        <li>
            
                Với dòng xe Limousine VIP 9 chỗ đẳng cấp bản thượng đỉnh lần đầu tiên xuất hiện trên tuyến Hà Nội – Hạ Long 
                được đưa vào khai thác cùng với chất lượng phục vụ chuyên nghiệp, Ha Long Travel Limousine cam kết đem đến cho 
                Khách hàng dịch vụ tốt nhất, mang đến sự tiện lợi và thoải mái cho chuyến đi của Quý khách.
        </li>
            
        

      
    </ul>
</div>`
    , Dia_Chi:'Trụ sở: 107 Phố Vọng, phường Đồng Tâm, quận Hai Bà Trưng, Hà Nội.',Lo_Trinh:`<div class="container">
    <ul><span class="fw-bold fs-5 text-success mx-5">Địa điểm đón, trả khách ở Hà Nội:</span> 
        <li>107 Phố Vọng, phường Đồng Tâm, quận Hai Bà Trưng, Hà Nội </li>
        <li>21 Tú Mỡ, Phường Trung Hoà, Quận Cầu Giấy, Hà Nội </li>
        <li>Ô số 13, Khu đấu giá X3, phường Cự Khối, Quận Long Biên, TP Hà Nội.</li>
    </ul>

    <ul><span class="fw-bold fs-5 text-success mx-5">Địa điểm đón, trả khách ở Hạ Long:</span> 
        <li>Số 256 Nguyễn Văn Cừ, TP. Hạ Long, Quảng Ninh </li>
    </ul>

   
</div>`, Dich_Vu:`<div class="row justify-content-center align-items-center g-2">
<div class="col-sm-6 service-item">
    <div>
        <i class="fas fa-wifi"></i>
        <span>Wifi</span> 
    </div>
    
    <div>
        <i class="fad fa-air-conditioner"></i>
        <span>Máy lạnh</span> 
    </div>

    <div>
        <i class="fad fa-bed-alt"></i>
        <span>Gối</span> 
    </div>

    <div>
        <i class="fal fa-blanket"></i>
        <span>Chăn</span> 
    </div>

    <div>
        <i class="fal fa-utensils"></i>
        <span>Đồ ăn</span> 
    </div>

    <div>
        <i class="fad fa-glass-martini"></i>
        <span>Thức uống</span> 
    </div>
</div>
<div class="col-sm-6 service-item">
    <div>
        <i class="fad fa-plug"></i>
        <span>Cắm sạc</span> 
    </div>
    
    <div>
        <i class="fad fa-charging-station"></i>
        <span>Ổ sạc</span> 
    </div>

    <div>
        <i class="fad fa-hammer"></i>
        <span>Búa phá kính</span> 
    </div>

    <div>
        <i class="fad fa-hands-wash"></i>
        <span>Nước rửa tay</span> 
    </div>

    <div>
        <i class="fad fa-spray-can"></i>
        <span>Xịt khử trùng</span> 
    </div>

    <div>
        <i class="fad fa-tv"></i>
        <span>Tivi</span> 
    </div>
</div>

</div>`},
    {ten_Nha_Xe:'Quốc Đạt', So_Luong_Xe: 7, SDT: '123456789', stars: 4.7, Mo_ta: `<div class="container">
    <ul>

    
        <div class = "d-flex justify-content-center fw-bold fs-5 my-2 text-success">Mô tả chuyến xe Quốc Đạt</div>
        <img src="/img/MoTaNhaXe/QuocDat/img1.jpg" class="w-100" >
        <li>
            <p class="mx-2 mt-2">
                Quốc Đạt là nhà xe quen thuộc di chuyển tuyến Đà Nẵng - Dak Nông và ngược lại. 
                Xe được trang bị các dịch vụ tiện ích như máy lạnh, khăn ướt, Toilet.. với hi vọng  
                tạo cảm giác thoải mái hơn cho hành khách trong suôt chuyến đi. Xe di chuyển nhanh và đúng giờ,ngoài ra. 
                Quốc Đạt còn có đội ngũ lái xe lành nghề, có kinh nghiệm cũng như tinh thần trách nhiệm cao, chắc chắn sẽ
                 mang đến cho hành khách chuyến đi thật an toàn. Sự ủng hộ và yêu mến của quý khách là động lực để chúng tôi cố gắng.
            </p>
        </li>

        <img src="/img/MoTaNhaXe/QuocDat/img2.jpg" alt="">
        <li>
            
                Ngoài ra, đội ngũ lái xe của nhà xe đều là những lái xe lành nghề, có kinh nghiệm cũng như tinh thần trách nhiệm cao, 
                chắc chắn sẽ mang đến cho hành khách chuyến đi thật an toàn.
        </li>
        
        <li>Xe khách Quốc Đạt trang bị dàn xe chất lượng cao với nhiều dịch vụ tiện ích như: máy lạnh, khăn ướt, Toilet.. 
            với mong muốn tạo cảm giác thoải mái cho hành khách trong suốt chuyến đi.</li>
        <li>
            Xe của Quốc Đạt di chuyển nhanh và đúng giờ, an toàn. Ngoài ra, xe kháhc Quốc Đạt còn có đội ngũ lái xe lành nghề, 
            tận tâm, có kinh nghiệm cũng như tinh thần trách nhiệm cao. Nhà xe cam kết không bắt khách dọc đường, 
            chỉ hỗ trợ đón khách tại các điểm cố định. Trong các chuyến xe đêm, tài xế luôn chạy với tốc độ vừa phải, 
            an toàn để hành khách có thể ngủ hoặc nghỉ ngơi dưỡng sức suốt chặng đường đi.
        </li>
        

      
    </ul>
</div>`
    , Dia_Chi:'Trụ sở: 48 Bắc Sơn, P. Hòa An, Q. Cẩm Lệ, Đà Nẵng.', Lo_Trinh:`<div class="container">
    <ul><span class="fw-bold fs-5 text-success mx-5">Địa điểm đón, trả khách ở Đà Nẵng:</span> 
        <li>Địa chỉ trụ sở: Số 48 Bắc Sơn, Phường Hòa Minh, Liên Chiểu, Đà Nẵng. </li>
    </ul>

    <ul><span class="fw-bold fs-5 text-success mx-5">Địa điểm đón, trả khách ở Buôn Ma Thuột:</span> 
        <li>Địa chỉ: Buôn Mê Thuột, Buôn Me Thuột, Đắk Lắk</li>
    </ul>

    <ul><span class="fw-bold fs-5 text-success mx-5">Địa điểm đón, trả khách ở Buôn Đắk Nông:</span> 
        <li>Địa chỉ: Mạc Thị Bưởi, Nghĩa Thành, Đắk Nông</li>
    </ul>

   
</div>`,Dich_Vu:`<div class="row justify-content-center align-items-center g-2">
<div class="col-sm-6 service-item">
    <div>
        <i class="fas fa-wifi"></i>
        <span>Wifi</span> 
    </div>
    
    <div>
        <i class="fad fa-air-conditioner"></i>
        <span>Máy lạnh</span> 
    </div>

    <div>
        <i class="fad fa-bed-alt"></i>
        <span>Gối</span> 
    </div>

    <div>
        <i class="fal fa-blanket"></i>
        <span>Chăn</span> 
    </div>

    <div>
        <i class="fal fa-utensils"></i>
        <span>Đồ ăn</span> 
    </div>

    <div>
        <i class="fad fa-glass-martini"></i>
        <span>Thức uống</span> 
    </div>
</div>
<div class="col-sm-6 service-item">
    <div>
        <i class="fad fa-plug"></i>
        <span>Cắm sạc</span> 
    </div>
    
    <div>
        <i class="fad fa-charging-station"></i>
        <span>Ổ sạc</span> 
    </div>

    <div>
        <i class="fad fa-hammer"></i>
        <span>Búa phá kính</span> 
    </div>

    <div>
        <i class="fad fa-hands-wash"></i>
        <span>Nước rửa tay</span> 
    </div>

    <div>
        <i class="fad fa-spray-can"></i>
        <span>Xịt khử trùng</span> 
    </div>

    <div>
        <i class="fad fa-tv"></i>
        <span>Tivi</span> 
    </div>
</div>

</div>`},
    {ten_Nha_Xe:'Thiện Thành', So_Luong_Xe: 8, SDT: '123456789', stars: 4.8, Mo_ta: `<div class="container">
    <ul>

    
        <div class = "d-flex justify-content-center fw-bold fs-5 my-2 text-success">Mô tả chuyến xe Thiện Thành</div>
        <img src="/img/MoTaNhaXe/ThienThanh/img1.jpg" class="w-100" >
        <li>
            <p class="mx-2 mt-2">
                Là nhà xe nổi tiếng về chất lượng và uy tín trên tuyến đường Sài Gòn – Rạch Giá – Kiên Giang, 
                nhà xe Thiện Thành Limousine từ lâu đã sớm khẳng định thương hiệu của một hãng xe khách đẳng cấp.
                 Phục vụ dòng xe giường phòng limousine 20 chỗ đầy đủ tiện nghi, xe Thiện Thành limousine đi Kiên Giang 
                 đã thu hút được rất nhiều sự quan tâm của hành khách trên tuyến đường này. Dòng xe Skybus cao cấp được nhà xe 
                 vận hành trên tuyến Sài Gòn – Rạch Giá có chất lượng vượt trội, tương đương với ghế hạng thương gia trên máy bay,
                  mang lại trải nghiệm đi xe tuyệt vời nhất.
            </p>
        </li>

        <img src="/img/MoTaNhaXe/ThienThanh/img2.jpg" alt="">
        <li>
            
                Ngoài ra, đội ngũ lái xe của nhà xe đều là những lái xe lành nghề, có kinh nghiệm cũng như tinh thần trách nhiệm cao, 
                chắc chắn sẽ mang đến cho hành khách chuyến đi thật an toàn.
        </li>
        
        <li>Xe khách Quốc Đạt trang bị dàn xe chất lượng cao với nhiều dịch vụ tiện ích như: máy lạnh, khăn ướt, Toilet.. 
            với mong muốn tạo cảm giác thoải mái cho hành khách trong suốt chuyến đi.</li>
        <li>
            Xe của Thiện Thành di chuyển nhanh và đúng giờ, an toàn. Ngoài ra, xe kháhc Quốc Đạt còn có đội ngũ lái xe lành nghề, 
            tận tâm, có kinh nghiệm cũng như tinh thần trách nhiệm cao. Nhà xe cam kết không bắt khách dọc đường, 
            chỉ hỗ trợ đón khách tại các điểm cố định. Trong các chuyến xe đêm, tài xế luôn chạy với tốc độ vừa phải, 
            an toàn để hành khách có thể ngủ hoặc nghỉ ngơi dưỡng sức suốt chặng đường đi.
        </li>
        

      
    </ul>
</div>`
    , Dia_Chi:'Trụ sở: Văn phòng Tân Phú - 20 Hoa Bằng, Tân Phú.',Lo_Trinh:`<div class="container">
    <ul><span class="fw-bold fs-5 text-success mx-5">Địa điểm đón, trả khách ở Thành Phố Hồ Chí Minh:</span> 
        <li>20 Hoa Bằng, P.Tân Sơn Nhì, Tân Phú, Thành Phố Hồ Chí Minh</li>
        <li>327 Dương Trần Phú, Phường 8, Quận 5, Thành phố Hồ Chí Minh</li>
    </ul>

    <ul><span class="fw-bold fs-5 text-success mx-5">Địa điểm đón, trả khách ở Kiên Giang:</span> 
        <li>Căn 21 P39 Mai Chí Thọ, Khu đô thị Phú Gia,Rạch Giá, Kiên Giang</li>
    </ul>


   
</div>`, Dich_Vu:`<div class="row justify-content-center align-items-center g-2">
<div class="col-sm-6 service-item">
    <div>
        <i class="fas fa-wifi"></i>
        <span>Wifi</span> 
    </div>
    
    <div>
        <i class="fad fa-air-conditioner"></i>
        <span>Máy lạnh</span> 
    </div>

    <div>
        <i class="fad fa-bed-alt"></i>
        <span>Gối</span> 
    </div>

    <div>
        <i class="fal fa-blanket"></i>
        <span>Chăn</span> 
    </div>

    <div>
        <i class="fal fa-utensils"></i>
        <span>Đồ ăn</span> 
    </div>

    <div>
        <i class="fad fa-glass-martini"></i>
        <span>Thức uống</span> 
    </div>
</div>
<div class="col-sm-6 service-item">
    <div>
        <i class="fad fa-plug"></i>
        <span>Cắm sạc</span> 
    </div>
    
    <div>
        <i class="fad fa-charging-station"></i>
        <span>Ổ sạc</span> 
    </div>

    <div>
        <i class="fad fa-hammer"></i>
        <span>Búa phá kính</span> 
    </div>

    <div>
        <i class="fad fa-hands-wash"></i>
        <span>Nước rửa tay</span> 
    </div>

    <div>
        <i class="fad fa-spray-can"></i>
        <span>Xịt khử trùng</span> 
    </div>

    <div>
        <i class="fad fa-tv"></i>
        <span>Tivi</span> 
    </div>
</div>

</div>`}
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
