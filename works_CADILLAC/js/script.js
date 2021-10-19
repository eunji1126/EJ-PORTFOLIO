

;(function($){//$=jQuery
	$(function(){

		//객체선언
		var options = {auto:true, mode:"fade", nextText:'', prevText:'',
		autoControls:true};

		//플러그인호출(함수호출)
		$(".slider").bxSlider(options);

		$(".open_search").click(function(){
			$("#search").addClass('show');
		});

		$(".close_search").click(function(){
			$("#search").removeClass('show');
		});

		$(".bar").click(function(){
			$("#open_bar").addClass('show');
		});

		$(".close_bar").click(function(){
			$("#open_bar").removeClass('show');
		});

		$("#open_bar h4").click(function(){
			$(this).siblings('div').addClass('open');
		});

		$(".close_menu").click(function(){
			$(this).parent().removeClass('open');
		});



	
	});//e:$();
})(jQuery);