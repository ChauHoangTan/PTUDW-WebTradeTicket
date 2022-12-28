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

    function newDate(addDay){
      var date = new Date();
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
     
      if((month<=7 && month % 2 == 1) || (month >=8 && month % 2 == 0)){
        if(day + addDay > 31){
          day = day + addDay - 31;
          month += 1;
          if(month > 12){
            month = 1;
            year++;
          }
        }
        else{
          day += addDay;
        }
      }
      else if(month == 2){
        if(year % 400 == 0 ){
          if(day + addDay > 29){
            day =  day + addDay - 29 ;
            month ++;
  
          }
          else{
            day = day + addDay;
          }
        }
        else if(year % 4 == 0 && year % 100 != 0){
          if(day + addDay > 29){
            day =  day + addDay - 29 ;
            month ++;
  
          }
          else{
            day = day + addDay;
          }
        }
        else{
          if(day + addDay > 28){
            day =  day + addDay - 28 ;
            month ++;
  
          }
          else{
            day = day + addDay;
          }
        }
      }
      else{
        if(day + addDay > 30){
          day = day + addDay - 30;
          month += 1;
        }
        else{
          day += addDay;
        }
      }
  
      
      var newDate = new Date(year,month-1,day)
  
      
      return newDate
    }

    
    function findNhaXeByIdXe(XeId){

      let randomNhaXeId;
      if(XeId == 1 || XeId == 2 || XeId == 3 || XeId == 4){
        randomNhaXeId = 1;
      }else if(XeId == 5 || XeId == 6 || XeId == 7 || XeId == 8){
        randomNhaXeId = 2;
      }else if(XeId == 9 || XeId == 10 || XeId == 11 || XeId == 12){
        randomNhaXeId = 3;
      }else if(XeId == 13 || XeId == 14 || XeId == 15 || XeId == 16){
        randomNhaXeId = 4;
      }else if(XeId == 17 || XeId == 18 || XeId == 19 || XeId == 20){
        randomNhaXeId = 5;
      }else if(XeId == 21 || XeId == 22 || XeId == 23 || XeId == 24){
        randomNhaXeId = 6;
      }else{
        randomNhaXeId = 7;
      }

      return randomNhaXeId;
    }

    const items = []
      //day1
      //1
      //1.1

      const DiaDiem = ["Sài Gòn","Hà Nội","Đà Lạt","Đồng Nai","Vũng Tàu","Đà Nẵng","Quảng Bình","Quảng Trị","Ninh Bình","Hải Phòng","Quảng Ninh","Vinh","Lạng Sơn","Lào Cai"];

      for(let i = 0; i <= 4; i++){
        for(let j = 0; j <7*14; j++ ){

          let randomDiemDi = Math.floor(Math.random() * 13);
          let randomDiemDen;
          while(true){
            randomDiemDen = Math.floor(Math.random() * 13);
            if(randomDiemDen != randomDiemDi){
              break;
            }
          }

          let randomGiaVe1 = ( Math.floor(Math.random()*70) + 19 ) * 10000;
          let randomGiaVe2 = ( Math.floor(Math.random()*70) + 19 ) * 10000;

          let randomXeId = Math.floor(Math.random() * 30) + 1;
          let randomNhaXeId = findNhaXeByIdXe(randomXeId);

          let time = Math.floor(Math.random() * 10) + 3;
          if(time < 10 ){
            time ="0"+time.toString()+":00:00";
          }else{
            time = time.toString()+":00:00";
          }

          let totalTimeTravel = Math.floor(Math.random() * 20) + 2;

          items.push({Gio_Bat_Dau:`${time}`,Tong_Thoi_Gian_Hanh_Trinh:totalTimeTravel,Diem_Di:DiaDiem[randomDiemDi],Diem_Den:DiaDiem[randomDiemDen],
          Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:randomGiaVe1,XeId:randomXeId,NhaXeId:randomNhaXeId}),

          randomXeId = Math.floor(Math.random() * 30) + 1;
          randomNhaXeId = findNhaXeByIdXe(randomXeId);

          items.push({Gio_Bat_Dau:`${time}`,Tong_Thoi_Gian_Hanh_Trinh:totalTimeTravel,Diem_Di:DiaDiem[randomDiemDen],Diem_Den:DiaDiem[randomDiemDi],
          Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:randomGiaVe1,XeId:randomXeId,NhaXeId:randomNhaXeId}),

          randomXeId = Math.floor(Math.random() * 30) + 1;
          randomNhaXeId = findNhaXeByIdXe(randomXeId);

          let time1 = Math.floor(Math.random() * 14) + 8;
          
          if(time1 < 10 ){
            time1 ="0"+time1.toString() +":00:00";
          }else{
            time1 = time1.toString()+":00:00";
          }

          items.push({Gio_Bat_Dau:`${time1}`,Tong_Thoi_Gian_Hanh_Trinh:totalTimeTravel,Diem_Di:DiaDiem[randomDiemDi],Diem_Den:DiaDiem[randomDiemDen],
          Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:randomGiaVe2,XeId:randomXeId,NhaXeId:randomNhaXeId}),

          randomXeId = Math.floor(Math.random() * 30) + 1;
          randomNhaXeId = findNhaXeByIdXe(randomXeId);

          items.push({Gio_Bat_Dau:`${time1}`,Tong_Thoi_Gian_Hanh_Trinh:totalTimeTravel,Diem_Di:DiaDiem[randomDiemDen],Diem_Den:DiaDiem[randomDiemDi],
          Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:randomGiaVe2,XeId:randomXeId,NhaXeId:randomNhaXeId})
        }
      }

    //   for(let i = 0; i<= 4; i++ ){
      
    //     items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đà Lạt',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:460000,XeId:3,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đà Lạt',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:630000,XeId:2,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đà Lạt',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:620000,XeId:4,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đà Lạt',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:670000,XeId:1,NhaXeId:1}),

    //     //1.2
    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đồng Nai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:450000,XeId:2,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đồng Nai',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:390000,XeId:3,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đồng Nai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:650000,XeId:1,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đồng Nai',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:510000,XeId:4,NhaXeId:1}),

    //     //1.3
    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Sài Gòn',Diem_Den:'Vũng Tàu',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:710000,XeId:1,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Vũng Tàu',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:300000,XeId:2,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Sài Gòn',Diem_Den:'Vũng Tàu',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:530000,XeId:3,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Vũng Tàu',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:610000,XeId:4,NhaXeId:1}),

    //     //1.4
    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Sài Gòn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:860000,XeId:2,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Hà Nội',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:530000,XeId:2,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Sài Gòn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:400000,XeId:1,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Hà Nội',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:740000,XeId:3,NhaXeId:1}),

    //     //1.5
    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Sài Gòn',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:380000,XeId:3,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Đà Nẵng',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:860000,XeId:2,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Sài Gòn',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:360000,XeId:4,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Đà Nẵng',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:390000,XeId:2,NhaXeId:1}),
        
    //     //1.6
    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Bình',Diem_Den:'Quảng Trị',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:630000,XeId:4,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Trị',Diem_Den:'Quảng Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:260000,XeId:2,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Bình',Diem_Den:'Quảng Trị',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:320000,XeId:2,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Trị',Diem_Den:'Quảng Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:560000,XeId:3,NhaXeId:1}),

    //     //1.7
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Hà Nội',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:780000,XeId:3,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Đà Nẵng',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:870000,XeId:1,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Hà Nội',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:460000,XeId:4,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Đà Nẵng',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:500000,XeId:4,NhaXeId:1}),

    //     //1.8
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:4,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:320000,XeId:4,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:320000,XeId:2,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:540000,XeId:4,NhaXeId:1}),

    //     //1.9
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:680000,XeId:3,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:410000,XeId:3,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:770000,XeId:2,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:530000,XeId:1,NhaXeId:1}),

    //     //1.10
    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Ninh Bình',Diem_Den:'Hải Phòng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:780000,XeId:4,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hải Phòng',Diem_Den:'Ninh Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:320000,XeId:2,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Ninh Bình',Diem_Den:'Hải Phòng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:850000,XeId:2,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hải Phòng',Diem_Den:'Ninh Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:780000,XeId:4,NhaXeId:1}),

    //     //1.11
    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Vinh',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:470000,XeId:2,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Vinh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:630000,XeId:1,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Vinh',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:430000,XeId:4,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Vinh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:230000,XeId:1,NhaXeId:1}),

    //     //1.12
    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Lạng Sơn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:480000,XeId:2,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Hà Nội',Diem_Den:'Lạng Sơn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:410000,XeId:3,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Lạng Sơn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:240000,XeId:1,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Hà Nội',Diem_Den:'Lạng Sơn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:200000,XeId:2,NhaXeId:1}),

    //     //1.13
    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Lào Cai',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:630000,XeId:3,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Lào Cai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:710000,XeId:3,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Lào Cai',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:1,NhaXeId:1}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Lào Cai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:390000,XeId:1,NhaXeId:1}),



    //     //2
    //     //1.1
    //     items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đà Lạt',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:490000,XeId:6,NhaXeId:2}),

    //     items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đà Lạt',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:640000,XeId:5,NhaXeId:2}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đà Lạt',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:320000,XeId:7,NhaXeId:2}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đà Lạt',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:490000,XeId:6,NhaXeId:2}),

    //     //1.2
    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đồng Nai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:7,NhaXeId:2}),

    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đồng Nai',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:330000,XeId:8,NhaXeId:2}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đồng Nai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:360000,XeId:6,NhaXeId:2}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đồng Nai',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:600000,XeId:8,NhaXeId:2}),

    //     //1.3
    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Sài Gòn',Diem_Den:'Vũng Tàu',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:810000,XeId:7,NhaXeId:2}),

    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Vũng Tàu',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:820000,XeId:8,NhaXeId:2}),

    //     items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Sài Gòn',Diem_Den:'Vũng Tàu',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:200000,XeId:7,NhaXeId:2}),

    //     items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Vũng Tàu',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:200000,XeId:7,NhaXeId:2}),

    //     //1.4
    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Sài Gòn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:510000,XeId:5,NhaXeId:2}),

    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Hà Nội',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:630000,XeId:6,NhaXeId:2}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Sài Gòn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:330000,XeId:5,NhaXeId:2}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Hà Nội',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:390000,XeId:8,NhaXeId:2}),

    //     //1.5
    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Sài Gòn',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:400000,XeId:5,NhaXeId:2}),

    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Đà Nẵng',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:620000,XeId:5,NhaXeId:2}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Sài Gòn',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:310000,XeId:6,NhaXeId:2}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Đà Nẵng',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:200000,XeId:5,NhaXeId:2}),
        
    //     //1.6
    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Bình',Diem_Den:'Quảng Trị',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:510000,XeId:5,NhaXeId:2}),

    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Trị',Diem_Den:'Quảng Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:240000,XeId:6,NhaXeId:2}),

    //     items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Bình',Diem_Den:'Quảng Trị',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:640000,XeId:7,NhaXeId:2}),

    //     items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Trị',Diem_Den:'Quảng Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:6,NhaXeId:2}),

    //     //1.7
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Hà Nội',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Đà Nẵng',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Hà Nội',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Đà Nẵng',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.8
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.9
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.10
    //     items.push({Gio_Bat_Dau:'04:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Ninh Bình',Diem_Den:'Hải Phòng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'04:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hải Phòng',Diem_Den:'Ninh Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Ninh Bình',Diem_Den:'Hải Phòng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hải Phòng',Diem_Den:'Ninh Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.11
    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Vinh',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Vinh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'23:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Vinh',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'23:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Vinh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.12
    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Lạng Sơn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Hà Nội',Diem_Den:'Lạng Sơn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'22:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Lạng Sơn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'22:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Hà Nội',Diem_Den:'Lạng Sơn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.13
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Lào Cai',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Lào Cai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Lào Cai',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Lào Cai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //3
    //     //1.1
    //     items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đà Lạt',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đà Lạt',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đà Lạt',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đà Lạt',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.2
    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đồng Nai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đồng Nai',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đồng Nai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đồng Nai',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.3
    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Sài Gòn',Diem_Den:'Vũng Tàu',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Vũng Tàu',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Sài Gòn',Diem_Den:'Vũng Tàu',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Vũng Tàu',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.4
    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Sài Gòn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Hà Nội',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Sài Gòn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Hà Nội',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.5
    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Sài Gòn',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Đà Nẵng',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Sài Gòn',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Đà Nẵng',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),
        
    //     //1.6
    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Bình',Diem_Den:'Quảng Trị',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Trị',Diem_Den:'Quảng Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Bình',Diem_Den:'Quảng Trị',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Trị',Diem_Den:'Quảng Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.7
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Hà Nội',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Đà Nẵng',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Hà Nội',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Đà Nẵng',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.8
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.9
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.10
    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Ninh Bình',Diem_Den:'Hải Phòng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hải Phòng',Diem_Den:'Ninh Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Ninh Bình',Diem_Den:'Hải Phòng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hải Phòng',Diem_Den:'Ninh Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.11
    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Vinh',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Vinh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Vinh',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Vinh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.12
    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Lạng Sơn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Hà Nội',Diem_Den:'Lạng Sơn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Lạng Sơn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Hà Nội',Diem_Den:'Lạng Sơn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.13
    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Lào Cai',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Lào Cai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Lào Cai',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Lào Cai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //4
    //     //1.1
    //     items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đà Lạt',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đà Lạt',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đà Lạt',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đà Lạt',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.2
    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đồng Nai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đồng Nai',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'19:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đồng Nai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'19:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đồng Nai',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.3
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Sài Gòn',Diem_Den:'Vũng Tàu',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Vũng Tàu',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Sài Gòn',Diem_Den:'Vũng Tàu',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Vũng Tàu',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.4
    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Sài Gòn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Hà Nội',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'12:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Sài Gòn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'12:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Hà Nội',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.5
    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Sài Gòn',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Đà Nẵng',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Sài Gòn',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Đà Nẵng',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),
        
    //     //1.6
    //     items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Bình',Diem_Den:'Quảng Trị',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Trị',Diem_Den:'Quảng Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Bình',Diem_Den:'Quảng Trị',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Trị',Diem_Den:'Quảng Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.7
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Hà Nội',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Đà Nẵng',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Hà Nội',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Đà Nẵng',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.8
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.9
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.10
    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Ninh Bình',Diem_Den:'Hải Phòng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hải Phòng',Diem_Den:'Ninh Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Ninh Bình',Diem_Den:'Hải Phòng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hải Phòng',Diem_Den:'Ninh Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.11
    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Vinh',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Vinh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Vinh',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Vinh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.12
    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Lạng Sơn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Hà Nội',Diem_Den:'Lạng Sơn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Lạng Sơn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Hà Nội',Diem_Den:'Lạng Sơn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.13
    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Lào Cai',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Lào Cai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Lào Cai',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Lào Cai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //5
    //     //1.1
    //     items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đà Lạt',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đà Lạt',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đà Lạt',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đà Lạt',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.2
    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đồng Nai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đồng Nai',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đồng Nai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đồng Nai',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.3
    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Sài Gòn',Diem_Den:'Vũng Tàu',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Vũng Tàu',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Sài Gòn',Diem_Den:'Vũng Tàu',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Vũng Tàu',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.4
    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Sài Gòn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Hà Nội',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Sài Gòn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Hà Nội',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.5
    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Sài Gòn',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Đà Nẵng',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Sài Gòn',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Đà Nẵng',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),
        
    //     //1.6
    //     items.push({Gio_Bat_Dau:'04:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Bình',Diem_Den:'Quảng Trị',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'04:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Trị',Diem_Den:'Quảng Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Bình',Diem_Den:'Quảng Trị',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Trị',Diem_Den:'Quảng Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.7
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Hà Nội',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Đà Nẵng',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Hà Nội',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Đà Nẵng',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.8
    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.9
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.10
    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Ninh Bình',Diem_Den:'Hải Phòng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hải Phòng',Diem_Den:'Ninh Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Ninh Bình',Diem_Den:'Hải Phòng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hải Phòng',Diem_Den:'Ninh Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.11
    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Vinh',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Vinh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Vinh',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Vinh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.12
    //     items.push({Gio_Bat_Dau:'04:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Lạng Sơn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'04:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Hà Nội',Diem_Den:'Lạng Sơn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Lạng Sơn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Hà Nội',Diem_Den:'Lạng Sơn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.13
    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Lào Cai',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Lào Cai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Lào Cai',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Lào Cai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //6
    //     //1.1
    //     items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đà Lạt',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đà Lạt',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'20:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đà Lạt',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'20:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đà Lạt',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.2
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đồng Nai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đồng Nai',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đồng Nai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đồng Nai',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.3
    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Sài Gòn',Diem_Den:'Vũng Tàu',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Vũng Tàu',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Sài Gòn',Diem_Den:'Vũng Tàu',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Vũng Tàu',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.4
    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Sài Gòn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Hà Nội',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Sài Gòn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Hà Nội',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.5
    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Sài Gòn',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Đà Nẵng',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Sài Gòn',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Đà Nẵng',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),
        
    //     //1.6
    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Bình',Diem_Den:'Quảng Trị',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Trị',Diem_Den:'Quảng Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Bình',Diem_Den:'Quảng Trị',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Trị',Diem_Den:'Quảng Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.7
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Hà Nội',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Đà Nẵng',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Hà Nội',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Đà Nẵng',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.8
    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.9
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.10
    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Ninh Bình',Diem_Den:'Hải Phòng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hải Phòng',Diem_Den:'Ninh Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Ninh Bình',Diem_Den:'Hải Phòng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hải Phòng',Diem_Den:'Ninh Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.11
    //     items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Vinh',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Vinh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Vinh',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Vinh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.12
    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Lạng Sơn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Hà Nội',Diem_Den:'Lạng Sơn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Lạng Sơn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Hà Nội',Diem_Den:'Lạng Sơn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.13
    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Lào Cai',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Lào Cai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Lào Cai',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Lào Cai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //7
    //     //1.1
    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đà Lạt',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đà Lạt',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đà Lạt',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đà Lạt',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.2
    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đồng Nai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đồng Nai',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đồng Nai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đồng Nai',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.3
    //     items.push({Gio_Bat_Dau:'04:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Sài Gòn',Diem_Den:'Vũng Tàu',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'04:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Vũng Tàu',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Sài Gòn',Diem_Den:'Vũng Tàu',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Vũng Tàu',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.4
    //     items.push({Gio_Bat_Dau:'03:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Sài Gòn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'03:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Hà Nội',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Sài Gòn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Hà Nội',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.5
    //     items.push({Gio_Bat_Dau:'05:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Sài Gòn',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'05:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Đà Nẵng',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Sài Gòn',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Đà Nẵng',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),
        
    //     //1.6
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Bình',Diem_Den:'Quảng Trị',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Trị',Diem_Den:'Quảng Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Bình',Diem_Den:'Quảng Trị',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Trị',Diem_Den:'Quảng Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.7
    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Hà Nội',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Đà Nẵng',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Hà Nội',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Đà Nẵng',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.8
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.9
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.10
    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Ninh Bình',Diem_Den:'Hải Phòng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hải Phòng',Diem_Den:'Ninh Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Ninh Bình',Diem_Den:'Hải Phòng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hải Phòng',Diem_Den:'Ninh Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.11
    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Vinh',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Vinh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Vinh',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Vinh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.12
    //     items.push({Gio_Bat_Dau:'12:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Lạng Sơn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'12:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Hà Nội',Diem_Den:'Lạng Sơn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Lạng Sơn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Hà Nội',Diem_Den:'Lạng Sơn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.13
    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Lào Cai',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Lào Cai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'18:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Lào Cai',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'18:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Lào Cai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //--------------------------------------------------------------------------------

    //     //---------------------------------------------------------------------------------






    //     //day1
    //     //1
    //     //1.1
    //     items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đà Lạt',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đà Lạt',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đà Lạt',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đà Lạt',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.2
    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đồng Nai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đồng Nai',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Sài Gòn',Diem_Den:'Đồng Nai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:'Đồng Nai',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.3
    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Sài Gòn',Diem_Den:'Vũng Tàu',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Vũng Tàu',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Sài Gòn',Diem_Den:'Vũng Tàu',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Vũng Tàu',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.4
    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Sài Gòn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Hà Nội',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Sài Gòn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:'Hà Nội',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.5
    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Sài Gòn',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Đà Nẵng',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Sài Gòn',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:'Đà Nẵng',Diem_Den:'Sài Gòn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),
        
    //     //1.6
    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Bình',Diem_Den:'Quảng Trị',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Trị',Diem_Den:'Quảng Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Bình',Diem_Den:'Quảng Trị',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:'Quảng Trị',Diem_Den:'Quảng Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.7
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Hà Nội',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Đà Nẵng',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Hà Nội',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:'Đà Nẵng',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.8
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.9
    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Quảng Ninh',Diem_Den:'Đà Nẵng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:'Đà Nẵng',Diem_Den:'Quảng Ninh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.10
    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Ninh Bình',Diem_Den:'Hải Phòng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hải Phòng',Diem_Den:'Ninh Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Ninh Bình',Diem_Den:'Hải Phòng',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hải Phòng',Diem_Den:'Ninh Bình',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.11
    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Vinh',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Vinh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Vinh',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Vinh',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.12
    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Lạng Sơn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Hà Nội',Diem_Den:'Lạng Sơn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Lạng Sơn',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:'Hà Nội',Diem_Den:'Lạng Sơn',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     //1.13
    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Lào Cai',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Lào Cai',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Lào Cai',Diem_Den:'Hà Nội',
    //     Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

    //     items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:'Hà Nội',Diem_Den:'Lào Cai',
    //     Ngay_Di:`${newDate(1).getFullYear()}-${newDate(1).getMonth() + 1}-${newDate(1).getDate()}`,Gia_Ve:290000,XeId:null})

  
    // }
      //-------------------------------------------------------



      //-------------------------------------------------------

    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })

    await queryInterface.bulkInsert('Chuyen_Xes', items, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Chuyen_Xes', items, {});
  }
};
