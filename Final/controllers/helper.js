const helper = {};

helper.toFixed = (value, offset) => {
    return value.toFixed(offset);
}

helper.generateStarList = (stars) => {
    let str = '<div class="rating">';
    let star = Math.floor(stars);
    let half = stars - star;

    for (i = 1; i <= star; i++) {
        str += '<i class="fa-solid fa-star"></i>';
    }

    if (half > 0) {
        str += '<i class="fa-regular fa-star-half-stroke"></i>';
    }

    for (i = 1; i <= 5 - stars; i++) {
        str += '<i class="fa-regular fa-star"></i>';
    }

    str += '</div>';
    
    return str;
}

helper.generateSeat = (Tinh_Trang) => {
    let str = '';

    if(Tinh_Trang == true){
        str+= 'id="c1" class="check" onclick="this.checked=!this.checked;" checked="checked" '
    }
    //console.log(Tinh_Trang)
    return str
}

module.exports = helper;