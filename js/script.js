;(function($){
	$(function(){

		//poptrox 플러그인 호출
		$("#works").poptrox({
			selector:'.img', //플러그인 기능을 하는 'a'태그
		});

	});//end:$()
})(jQuery);


const ani = anime({
	targets:'ul.end_text li',
	translateY:'40vh',
	delay: anime.stagger(80, {direction: 'normal'}),
});
	

const menuSwiper = new Swiper("#gnb",{
	wrapperClass:"menu",
	slideClass:"btn",
	slidesPerView:4
});


const wrapSwiper = new Swiper("#wrap",{
	wrapperClass:"container",
	slideClass:"area",
	direction:"vertical",
	mousewheel:true,
	speed:600,
	thumbs:{
		swiper:menuSwiper,
		slideThumbActiveClass:'active'
	},
	pagination:{
		el:'.pager',
		clickable:true,
		bulletActiveClass:'active',
	},
	scrollbar:{
		el:'.scrollbar', //스크롤막대 영역 지정
		draggable:true, //드래그하여 화면 전환가능
		hide:true,
	},
});//e:Swiper()


const workList = new Swiper("#work_area",{
	wrapperClass:"list",
	slideClass:"item",
	slidesPerView:3,
	grid:{
		rows:2,
		fill:'row'
	},
	spaceBetween:40,
});


wrapSwiper.on('slideChange', function (s) {
	if(s.activeIndex==3)	ani.restart();
});

function openPop01_1(){
	var popup = window.open('http://skin-skin8.dmswl2912.cafe24.com', 'pop01_1', 
	'width=1300px, height=800px, top=50px, left=100px');
}
function openPop01_2(){
	var popup = window.open('http://skin-skin8.dmswl2912.cafe24.com', 'pop01_2', 
	'width=950px, height=800px, top=50px, left=100px');
}
function openPop01_3(){
	var popup = window.open('http://skin-skin8.dmswl2912.cafe24.com', 'pop01_3', 
	'width=500px, height=800px, top=50px, left=100px');
}

function openPop02_1(){
	var popup = window.open('http://skin-skin12.dmswl2912.cafe24.com', 'pop02_1', 
	'width=1600px, height=800px, top=50px, left=50px');
}
function openPop02_2(){
	var popup = window.open('http://skin-skin12.dmswl2912.cafe24.com', 'pop02_2', 
	'width=1020px, height=800px, top=50px, left=100px');
}
function openPop02_3(){
	var popup = window.open('http://skin-skin12.dmswl2912.cafe24.com', 'pop02_3', 
	'width=400px, height=800px, top=50px, left=100px');
}