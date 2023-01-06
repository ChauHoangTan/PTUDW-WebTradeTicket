const helper = {};

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

helper.ifCond = (v1, operator, v2, options) => {
    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
};

module.exports = helper;