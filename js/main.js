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
