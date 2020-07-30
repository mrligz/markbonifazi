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

$('.navbar-brand>img').on('click', function(){
    $('.animated-icon2').removeClass('open');
});

// navbar scroll style animation

$(window).scroll(function () {
$('.customNavbar').toggleClass('scrolled', $(this).scrollTop() > 40);
});



// smooth scroll

$(document).on('click', 'a[href^="#"]', function (event){
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 800);
  });

// hero page h1 animation

const text = document.querySelector(".name");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++
  if(char === splitText.length) {
    complete();
    return;
  }
}
function complete() {
  clearInterval(timer);
  timer = null;
}
