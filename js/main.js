var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('header').height();


$(window).scroll(function() {
  if( $(this).scrollTop() > hdr + 50 ) {
    mn.addClass(mns);
    if(mn.hasClass(mns)){
      $('.main').css('margin-top','41px');
      $('header').css('background', '#f5f5f5');
    }
  } else {
    mn.removeClass(mns);
    if(!mn.hasClass(mns)){
      $('.main').css('margin-top','');
      $('header').css('background', '#232932');
    }
  }
});
$(window).scroll(function() {
  if( $(this).scrollTop() > hdr - 130) {
    $('.header_section_text section h1').fadeOut();
  } else {
    $('.header_section_text section h1').fadeIn();
   }
});

$('.portfolio-item').mouseenter(function(){
  $(this).addClass('active-box');
});
$('.portfolio-item').mouseleave(function(){
  $(this).removeClass('active-box');
});

$('.inputs-val').keyup(function(){
  if($('#contact-name').val() !== "" && $('#contact-email').val() !== "" && $('#contact-message').val() !== ""){
    $('.form_buttons').addClass('form_focused');
  }else {
    $('.form_buttons').removeClass('form_focused');
  }

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
        $('.wrapper').animate({marginLeft: margin}
          , {
        duration: 800,
        specialEasing: {
          marginLeft: "swing",
          }
      });



        return false;
    });
});

$('.nav-item a').click(function(){
    $('.nav-item').removeClass('active');
    $(this).parent().addClass('active');
});

$('form .form-control').on('change',function(){
  if($(this).val() !== ""){
    $(this).css('border-bottom','1.5px solid #232932');
  }else{
    $(this).css('border-bottom','1.5px solid rgba(35, 41, 50, 0.2)');
  }
});


var scrollPos = 0;

$('.modal')
    .on('show.bs.modal', function (){
        scrollPos = $('body').scrollTop();
        $('body').css({
            overflow: 'hidden',
            position: 'fixed',
            top : -scrollPos
        });
    })
    .on('hide.bs.modal', function (){
        $('body').css({
            overflow: '',
            position: '',
            top: ''
        }).scrollTop(scrollPos);
    });