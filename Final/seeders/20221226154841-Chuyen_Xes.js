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

    

    const items = []
      //day1
      //1
      //1.1

      for(let i = 0; i<= 4; i++ ){
      
        items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:3,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:3,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:3,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:3,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.2
        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:2,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:2,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:2,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:2,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.3
        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:1,Diem_Den:14,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:14,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:1,Diem_Den:14,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:14,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.4
        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:1,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:5,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:1,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:5,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.5
        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:1,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:4,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:1,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:4,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),
        
        //1.6
        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:6,Diem_Den:7,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:7,Diem_Den:6,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:6,Diem_Den:7,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:7,Diem_Den:6,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.7
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:5,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:4,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:5,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:4,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.8
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.9
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.10
        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:9,Diem_Den:10,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:10,Diem_Den:9,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:9,Diem_Den:10,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:10,Diem_Den:9,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.11
        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:13,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:13,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:13,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:13,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.12
        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:11,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:5,Diem_Den:11,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:11,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:5,Diem_Den:11,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.13
        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:12,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:12,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:12,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:12,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),



        //2
        //1.1
        items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:3,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:3,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:3,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:3,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.2
        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:2,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:2,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:2,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:2,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.3
        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:1,Diem_Den:14,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:14,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:1,Diem_Den:14,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:14,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.4
        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:1,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:5,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:1,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:5,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.5
        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:1,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:4,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:1,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:4,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),
        
        //1.6
        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:6,Diem_Den:7,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:7,Diem_Den:6,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:6,Diem_Den:7,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:7,Diem_Den:6,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.7
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:5,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:4,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:5,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:4,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.8
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.9
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.10
        items.push({Gio_Bat_Dau:'04:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:9,Diem_Den:10,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'04:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:10,Diem_Den:9,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:9,Diem_Den:10,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:10,Diem_Den:9,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.11
        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:13,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:13,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'23:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:13,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'23:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:13,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.12
        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:11,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:5,Diem_Den:11,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'22:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:11,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'22:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:5,Diem_Den:11,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.13
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:12,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:12,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:12,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:12,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //3
        //1.1
        items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:3,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:3,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:3,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:3,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.2
        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:2,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:2,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:2,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:2,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.3
        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:1,Diem_Den:14,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:14,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:1,Diem_Den:14,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:14,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.4
        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:1,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:5,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:1,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:5,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.5
        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:1,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:4,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:1,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:4,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),
        
        //1.6
        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:6,Diem_Den:7,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:7,Diem_Den:6,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:6,Diem_Den:7,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:7,Diem_Den:6,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.7
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:5,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:4,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:5,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:4,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.8
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.9
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.10
        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:9,Diem_Den:10,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:10,Diem_Den:9,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:9,Diem_Den:10,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:10,Diem_Den:9,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.11
        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:13,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:13,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:13,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:13,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.12
        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:11,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:5,Diem_Den:11,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:11,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:5,Diem_Den:11,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.13
        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:12,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:12,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:12,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:12,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //4
        //1.1
        items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:3,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:3,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:3,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:3,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.2
        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:2,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:2,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'19:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:2,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'19:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:2,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.3
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:1,Diem_Den:14,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:14,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:1,Diem_Den:14,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:14,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.4
        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:1,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:5,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'12:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:1,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'12:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:5,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.5
        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:1,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:4,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:1,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:4,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),
        
        //1.6
        items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:6,Diem_Den:7,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:7,Diem_Den:6,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:6,Diem_Den:7,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:7,Diem_Den:6,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.7
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:5,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:4,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:5,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:4,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.8
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.9
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.10
        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:9,Diem_Den:10,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:10,Diem_Den:9,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:9,Diem_Den:10,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:10,Diem_Den:9,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.11
        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:13,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:13,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:13,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:13,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.12
        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:11,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:5,Diem_Den:11,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:11,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:5,Diem_Den:11,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.13
        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:12,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:12,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:12,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:12,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //5
        //1.1
        items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:3,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:3,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:3,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:3,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.2
        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:2,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:2,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:2,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:2,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.3
        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:1,Diem_Den:14,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:14,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:1,Diem_Den:14,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:14,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.4
        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:1,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:5,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:1,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:5,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.5
        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:1,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:4,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:1,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:4,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),
        
        //1.6
        items.push({Gio_Bat_Dau:'04:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:6,Diem_Den:7,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'04:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:7,Diem_Den:6,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:6,Diem_Den:7,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:7,Diem_Den:6,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.7
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:5,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:4,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:5,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:4,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.8
        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.9
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.10
        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:9,Diem_Den:10,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:10,Diem_Den:9,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:9,Diem_Den:10,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:10,Diem_Den:9,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.11
        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:13,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:13,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:13,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:13,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.12
        items.push({Gio_Bat_Dau:'04:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:11,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'04:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:5,Diem_Den:11,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:11,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:5,Diem_Den:11,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.13
        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:12,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:12,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:12,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:12,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //6
        //1.1
        items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:3,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:3,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'20:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:3,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'20:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:3,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.2
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:2,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:2,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:2,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:2,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.3
        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:1,Diem_Den:14,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:14,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:1,Diem_Den:14,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:14,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.4
        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:1,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:5,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:1,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:5,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.5
        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:1,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:4,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:1,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:4,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),
        
        //1.6
        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:6,Diem_Den:7,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:7,Diem_Den:6,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:6,Diem_Den:7,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:7,Diem_Den:6,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.7
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:5,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:4,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:5,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:4,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.8
        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.9
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.10
        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:9,Diem_Den:10,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:10,Diem_Den:9,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:9,Diem_Den:10,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:10,Diem_Den:9,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.11
        items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:13,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:13,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:13,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:13,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.12
        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:11,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:5,Diem_Den:11,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:11,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:5,Diem_Den:11,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.13
        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:12,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:12,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:12,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:12,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //7
        //1.1
        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:3,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:3,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:3,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:3,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.2
        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:2,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:2,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:2,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:2,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.3
        items.push({Gio_Bat_Dau:'04:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:1,Diem_Den:14,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'04:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:14,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:1,Diem_Den:14,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:14,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.4
        items.push({Gio_Bat_Dau:'03:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:1,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'03:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:5,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:1,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:5,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.5
        items.push({Gio_Bat_Dau:'05:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:1,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'05:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:4,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:1,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:4,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),
        
        //1.6
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:6,Diem_Den:7,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:7,Diem_Den:6,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:6,Diem_Den:7,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:7,Diem_Den:6,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.7
        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:5,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:4,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:5,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:4,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.8
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.9
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.10
        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:9,Diem_Den:10,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:10,Diem_Den:9,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:9,Diem_Den:10,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:10,Diem_Den:9,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.11
        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:13,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:13,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:13,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:13,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.12
        items.push({Gio_Bat_Dau:'12:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:11,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'12:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:5,Diem_Den:11,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:11,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:5,Diem_Den:11,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.13
        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:12,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:12,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'18:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:12,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'18:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:12,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //--------------------------------------------------------------------------------

        //---------------------------------------------------------------------------------






        //day1
        //1
        //1.1
        items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:3,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'08:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:3,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:3,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:3,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.2
        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:2,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:2,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:1,Diem_Den:2,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:8,Diem_Di:2,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.3
        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:1,Diem_Den:14,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:14,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:1,Diem_Den:14,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'15:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:14,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.4
        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:1,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:5,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:1,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:22,Diem_Di:5,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.5
        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:1,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'06:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:4,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:1,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:18,Diem_Di:4,Diem_Den:1,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),
        
        //1.6
        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:6,Diem_Den:7,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'09:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:7,Diem_Den:6,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:6,Diem_Den:7,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'14:00:00',Tong_Thoi_Gian_Hanh_Trinh:3,Diem_Di:7,Diem_Den:6,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.7
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:5,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:4,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:5,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:12,Diem_Di:4,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.8
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.9
        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'07:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:8,Diem_Den:4,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'13:00:00',Tong_Thoi_Gian_Hanh_Trinh:16,Diem_Di:4,Diem_Den:8,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.10
        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:9,Diem_Den:10,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'10:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:10,Diem_Den:9,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:9,Diem_Den:10,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'16:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:10,Diem_Den:9,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.11
        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:13,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:13,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:13,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:13,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.12
        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:11,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:5,Diem_Den:11,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:11,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:4,Diem_Di:5,Diem_Den:11,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        //1.13
        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:12,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'11:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:12,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:12,Diem_Den:5,
        Ngay_Di:`${newDate(i).getFullYear()}-${newDate(i).getMonth() + 1}-${newDate(i).getDate()}`,Gia_Ve:290000,XeId:null}),

        items.push({Gio_Bat_Dau:'17:00:00',Tong_Thoi_Gian_Hanh_Trinh:5,Diem_Di:5,Diem_Den:12,
        Ngay_Di:`${newDate(1).getFullYear()}-${newDate(1).getMonth() + 1}-${newDate(1).getDate()}`,Gia_Ve:290000,XeId:null})

  
    }
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
