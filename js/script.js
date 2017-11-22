
$('.header__spinner').on('click', function(){
	$('.header__nav').addClass('open');
});
$('.header__nav span').on('click', function(){
	if ($('.header__nav').hasClass('open')){
		$('.header__nav').removeClass('open');
	}
});
