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

$('.americano').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }}]    
});
$('.latte').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }}]
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
$('.v03').click(function(){
    $('.video03').fadeIn();
});
$('.v04').click(function(){
    $('.video04').fadeIn();
});
$('.xi-close').click(function(){
    $('.modal-pop').fadeOut();
});
