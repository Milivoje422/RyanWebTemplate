var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('header').height();


$(window).scroll(function() {
  if( $(this).scrollTop() > hdr + 50 ) {
    mn.addClass(mns);
    if(mn.hasClass(mns)){
      $('.main').css('margin-top','41px');
    }
  } else {
    mn.removeClass(mns);
    if(!mn.hasClass(mns)){
      $('.main').css('margin-top','');
    }
  }
});

$('.portfolio-item').mouseenter(function(){
  $(this).addClass('active-box');
});
$('.portfolio-item').mouseleave(function(){
  $(this).removeClass('active-box');
});


$('#you form').mouseenter(function(){
  $('.form_buttons').addClass('form_focused');
});
$('#you form').mouseleave(function(){
  $('.form_buttons').removeClass('form_focused');
});

$(document).ready(function () {
    var sildeNum = $('.page').length,
        wrapperWidth = 100 * sildeNum,
        slideWidth = 100/sildeNum;

    $('.wrapper').width(wrapperWidth + '%'); 
    $('.page').width(slideWidth + '%');
    $('a.scrollitem').click(function(){
        $('a.scrollitem').removeClass('selected');
        $(this).addClass('selected');
        var slideNumber = $($(this).attr('href')).index('.page'),
            margin = slideNumber * -100 + '%';
        $('.wrapper').animate({marginLeft: margin},800);
        return false;
    });
});

$('.nav-item a').click(function(){
    $('.nav-item').removeClass('active');
    $(this).parent().addClass('active');
});