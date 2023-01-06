const helper = {};

helper.generateStarList = (stars) => {
    let str = '<div class="ratting">';
    let star = Math.floor(stars);
    let half = stars - star;

    for (i = 1; i <= star; i++) {
        str += '<i class="fa fa-star"></i>';
    }

    if (half > 0) {
        str += '<i class="fa fa-star-half-o"></i>';
    }

    for (i = 1; i <= 5 - stars; i++) {
        str += '<i class="fa fa-star-o"></i>';
    }

    str += '</div>';
    
    return str;
}

helper.generateSeat = (Tinh_Trang) => {
    // let str = `<div class="row justify-content-center align-items-center g-2">`
    
    // let GheId1 = (Danh_Sach_Tinh_Trang.GheId1)
    // let GheId2 = Danh_Sach_Tinh_Trang.GheId2
    

    // if(Danh_Sach_Tinh_Trang.Tinh_Trang1 == false){
    //     str += `<div class="col">`   
    //     str += `<input type = "checkbox" value = "${{GheId1}}" name ="ghe1">`
    //     str+= `</div>`
    // }else{
    //     str += `<div class="col">`
    //     str += `<input id = "c1" type = "checkbox" value="${{GheId1}}" name ="ghe2" onclick="this.checked=!this.checked;" checked="checked" >`
    //     str += `</div>`
    // }

    // if(Danh_Sach_Tinh_Trang.Tinh_Trang2 == false){
    //     str += `<div class="col">`
    //     str += `<input type = "checkbox" value="${{GheId2}}" name ="ghe3" >`
    //     str+= `</div>`
    // }else{
    //     str += `<div class="col">`
    //     str += `<input id = "c1" type = "checkbox" value="${{GheId2}}" name="ghe4"  onclick="this.checked=!this.checked;" checked="checked" >`
    //     str += `</div>`
    // }

    // str+= `</div>`
    let str = '';

    if(Tinh_Trang == true){
        str+= 'id="c1" class="check" onclick="this.checked=!this.checked;" checked="checked" '
    }
    //console.log(Tinh_Trang)
    return str
}

module.exports = helper;