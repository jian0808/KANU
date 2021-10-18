// header
$('.goust-btn').click(function(){
    $('.gnb').slideToggle();
});

// section02
$('.tab01').click(function(){
    $('.americano').css('display','block');
    $('.latte').css('display','none');
    $('.tab01').css('border-bottom','3px solid #e50a18');
    $('.tab02').css('border-bottom','none');
});
$('.tab02').click(function(){
    $('.latte').css('display','block');
    $('.americano').css('display','none');
    $('.tab02').css('border-bottom','3px solid #e50a18');
    $('.tab01').css('border-bottom','none');        
});

// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,        
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: { 
        280: { 
            slidesPerView: 2, 
            spaceBetween: 20 
        }, 
        1024: { 
            slidesPerView: 4,
            spaceBetween: 30 
        } 
    }
});

// section05
$(".point>li").mouseover(function(){
        $(this).children(".bgs").css("transform","scale(1.2)");
});
$(".point>li").mouseleave(function(){
    $(this).children(".bgs").css("transform","scale(1)");
});

// modal-pop
$('.v01').click(function(){
    $('.video01').fadeIn();
});
$('.v02').click(function(){
    $('.video02').fadeIn();
});
$('.xi-close').click(function(){
    $('.modal-pop').fadeOut();
});

