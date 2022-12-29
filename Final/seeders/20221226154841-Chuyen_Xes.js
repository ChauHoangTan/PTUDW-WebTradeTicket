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

      //const DiaDiem = ["Sài Gòn","Hà Nội","Đà Lạt","Đồng Nai","Vũng Tàu","Đà Nẵng","Quảng Bình","Quảng Trị","Ninh Bình","Hải Phòng","Quảng Ninh","Vinh","Lạng Sơn","Lào Cai"];

      for(let i = 0; i <= 4; i++){
        for(let j = 0; j <7*14; j++ ){

          let randomDiemDi = Math.floor(Math.random() * 13) + 1;
          let randomDiemDen;
          while(true){
            randomDiemDen = Math.floor(Math.random() * 13) + 1;
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

          items.push({Gio_Bat_Dau:`${time}`,Tong_Thoi_Gian_Hanh_Trinh:totalTimeTravel,Diem_Di:randomDiemDi,Diem_Den:randomDiemDen,DiaDiemId:1,
          Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:randomGiaVe1,XeId:randomXeId,NhaXeId:randomNhaXeId}),

          randomXeId = Math.floor(Math.random() * 30) + 1;
          randomNhaXeId = findNhaXeByIdXe(randomXeId);

          items.push({Gio_Bat_Dau:`${time}`,Tong_Thoi_Gian_Hanh_Trinh:totalTimeTravel,Diem_Di:randomDiemDen,Diem_Den:randomDiemDi,DiaDiemId:1,
          Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:randomGiaVe1,XeId:randomXeId,NhaXeId:randomNhaXeId}),

          randomXeId = Math.floor(Math.random() * 30) + 1;
          randomNhaXeId = findNhaXeByIdXe(randomXeId);

          let time1 = Math.floor(Math.random() * 14) + 8;
          
          if(time1 < 10 ){
            time1 ="0"+time1.toString() +":00:00";
          }else{
            time1 = time1.toString()+":00:00";
          }

          items.push({Gio_Bat_Dau:`${time1}`,Tong_Thoi_Gian_Hanh_Trinh:totalTimeTravel,Diem_Di:randomDiemDi,Diem_Den:randomDiemDen,DiaDiemId:1,
          Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:randomGiaVe2,XeId:randomXeId,NhaXeId:randomNhaXeId}),

          randomXeId = Math.floor(Math.random() * 30) + 1;
          randomNhaXeId = findNhaXeByIdXe(randomXeId);

          items.push({Gio_Bat_Dau:`${time1}`,Tong_Thoi_Gian_Hanh_Trinh:totalTimeTravel,Diem_Di:randomDiemDen,Diem_Den:randomDiemDi,DiaDiemId:1,
          Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:randomGiaVe2,XeId:randomXeId,NhaXeId:randomNhaXeId})
        }
      }

 


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
