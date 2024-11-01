$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        fade: true,
    });


    $('.main_content .arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev')
    });
    $('.main_content .arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext')
    });


    $('.main_Collection .fade_slide').slick({
        arrows: false,
        fade: true,
        asNavFor: '.main_Collection .ga_slider'
    });


    $('.main_Collection .ga_slider').slick({
        arrows: false,
        slidesToShow: 4,
        asNavFor: '.main_Collection .fade_slide',
        focusOnSelect: true,
    })


    $('.main_Collection .arrows .prev').on('click', function () {
        $('.fade_slide').slick('slickPrev')
    });
    $('.main_Collection .arrows .next').on('click', function () {
        $('.fade_slide').slick('slickNext')
    });


    $('.mian_timepiece .watch .list li').on('click', function () {
        let num = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.mian_timepiece .desc .itm').eq(num).addClass('on').siblings().removeClass('on')
    });


    $('.main_custom .inner .itm').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on')
    })


});