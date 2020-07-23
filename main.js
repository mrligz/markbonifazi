// pre-loader

$(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
});

// burger animated
$(document).ready(function () {

  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });

});

// collapse nav when clicked

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('.navbar-brand>img').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('.navbar-nav>li>a').on('click', function(){
    $('.animated-icon2').toggleClass('open');
});

// navbar scroll animation
$(window).scroll(function () {
$('.customNavbar').toggleClass('scrolled', $(this).scrollTop() > 300);
})
