$(document).ready(function () {
    $('.swiper-wrapper-chi-tiet').slick({
        // Các tùy chọn của Slick
        infinite: true,
        slidesToShow: 5, // Điều chỉnh theo nhu cầu của bạn
        slidesToScroll: 5,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',

    });
});
