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

module.exports = helper;