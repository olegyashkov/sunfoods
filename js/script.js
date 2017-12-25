
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();


$('.header__spinner').on('click', function(){
	$('.header__nav').addClass('open');
});
$('.header__nav span').on('click', function(){
	if ($('.header__nav').hasClass('open')){
		$('.header__nav').removeClass('open');
	}
});

$(window).scroll(function(){
   if ($(window).scrollTop() > 90) {
      $('.header__nav').removeClass('open');
   }
});
$('a[href^="#"]').on('click', function(){
  	var scroll =$(this).attr('href');
    $('.header__nav').removeClass('navi__open');
    $('html, body').animate({
    scrollTop:$(scroll).offset().top
},1200)
});


$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}