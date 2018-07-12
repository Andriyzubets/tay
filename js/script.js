if (document.querySelector('.sandwich-right-bar .nav-toggle')) {
	sandwichButton = document.querySelector('.sandwich-right-bar .nav-toggle');
	sandFullMenu = document.querySelector('.sandwich-right-bar .right-menu');
	sandwichButton.onclick = function() {
		if(sandwichButton.classList.contains('active')){
			sandwichButton.classList.remove('active');
			sandFullMenu.classList.remove('active')
		}else{
			sandwichButton.classList.add('active');
			sandFullMenu.classList.add('active');
		}
	}
}
if(document.querySelector('.main-page')) {
	clientHeight = document.documentElement.clientHeight;
	header = document.querySelector('.header').offsetHeight;
	adv = document.querySelector('.main-page .advantages').offsetHeight;
	slider = document.querySelector('.main-page .slider-top');
	if(document.body.clientWidth>1440) {
		height = parseInt(clientHeight - header - adv - '45');
		slider.style.paddingTop=height + 'px';
		slider.style.marginBottom='45px';
	}
	if(document.body.clientWidth<=1440 && document.body.clientWidth>381) {
		height = parseInt(clientHeight - header - adv - '15');
		slider.style.paddingTop=height + 'px';
		slider.style.marginBottom='15px';
	}
	if(document.body.clientWidth<=380) {
		height = parseInt(clientHeight - header);
		slider.style.paddingTop=height + 'px';
		slider.style.marginBottom='15px';
	}
	
}
if(document.querySelector('.main-page .slider-top')) {
	slides = document.querySelectorAll('.main-page .slider-top .slide');
	dots = document.querySelectorAll('.main-page .slider-top .dots span');
	left = document.querySelector('.main-page .slider-top .butts .left');
	right = document.querySelector('.main-page .slider-top .butts .right');
	// autoplay
	setInterval(function(){
		if(slides[0].classList.contains('active')) {
			slides[0].classList.remove('active');
			dots[0].classList.remove('active');
			setTimeout(function(){
				slides[1].classList.add('active');
				dots[1].classList.add('active');
			},200)
		}
		if(slides[1].classList.contains('active')) {
			slides[1].classList.remove('active')
			dots[1].classList.remove('active');
			setTimeout(function(){
				dots[2].classList.add('active');
				slides[2].classList.add('active')
			},200)
		}
		if(slides[2].classList.contains('active')) {
			slides[2].classList.remove('active')
			dots[2].classList.remove('active');
			setTimeout(function(){
				slides[0].classList.add('active')
				dots[0].classList.add('active');
			},200)
		}
	},5000);
	// dots controls
	dots[0].onclick = function(){
		for(i=0;i<dots.length;i++){
			dots[i].classList.remove('active');
		}
		for(i=0;i<slides.length;i++){
			slides[i].classList.remove('active');
		}
		setTimeout(function(){
			dots[0].classList.add('active');
			slides[0].classList.add('active');
		},200)
	}
	dots[1].onclick = function(){
		for(i=0;i<dots.length;i++){
			dots[i].classList.remove('active');
		}
		for(i=0;i<slides.length;i++){
			slides[i].classList.remove('active');
		}
		setTimeout(function(){
			dots[1].classList.add('active');
			slides[1].classList.add('active');
		},200)
	}
	dots[2].onclick = function(){
		for(i=0;i<dots.length;i++){
			dots[i].classList.remove('active');
		}
		for(i=0;i<slides.length;i++){
			slides[i].classList.remove('active');
		}
		setTimeout(function(){
			dots[2].classList.add('active');
			slides[2].classList.add('active');
		},200)
	}
	// butts control
	left.onclick = function(){
		if(slides[0].classList.contains('active')){
			slides[0].classList.remove('active');
			dots[0].classList.remove('active');
			setTimeout(function(){
				slides[2].classList.add('active');
				dots[2].classList.add('active');
			},200)
		}
		if(slides[2].classList.contains('active')){
			slides[2].classList.remove('active');
			dots[2].classList.remove('active');
			setTimeout(function(){
				slides[1].classList.add('active');
				dots[1].classList.add('active');
			},200)
		}
		if(slides[1].classList.contains('active')){
			slides[1].classList.remove('active');
			dots[1].classList.remove('active');
			setTimeout(function(){
				slides[0].classList.add('active');
				dots[0].classList.add('active');
			},200)
		}
	}
	right.onclick = function(){
		if(slides[0].classList.contains('active')){
			slides[0].classList.remove('active');
			dots[0].classList.remove('active');
			setTimeout(function(){
				slides[1].classList.add('active');
				dots[1].classList.add('active');
			},200)
		}
		if(slides[2].classList.contains('active')){
			slides[2].classList.remove('active');
			dots[2].classList.remove('active');
			setTimeout(function(){
				slides[0].classList.add('active');
				dots[0].classList.add('active');
			},200)
		}
		if(slides[1].classList.contains('active')){
			slides[1].classList.remove('active');
			dots[1].classList.remove('active');
			setTimeout(function(){
				slides[2].classList.add('active');
				dots[2].classList.add('active');
			},200)
		}
	}
}