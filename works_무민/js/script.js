
;(function($){//$=jQuery
	$(function(){

		//객체선언
		var options = {auto:true, mode:"fade", nextText:'', prevText:''};

		//플러그인호출(함수호출)
		$(".slider").bxSlider(options);

		/* 요소를 복제하여 추가하기 */
		var menu = $("#gnb > ul").clone(); //객체(대상)를 복제함.
		// menu에는 복제된 객체가 들어가 있다.
		$("#main_menu").append(menu);
		//복제된 내용(menu)을 대상(#main_menu)안에 넣음.
		$("#main_menu a").addClass("arrow");


		var sns = $(".sns").clone();
		$('footer').prepend(sns);

		/*
			A.prepend(B) : A안에 B를 첫번째 요소로 삽입
			A.prependTo(B) : A를 B안에 첫번째 요소로 삽입
			A.append(B) : A안에 B를 마지막 요소로 삽입
			A.appendTo(B) : A를 B안에 마지막 요소로 삽입
		*/

	});//e:$();
})(jQuery);