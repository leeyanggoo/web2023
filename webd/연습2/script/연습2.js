$(function(){
    // 메뉴
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li > ul").stop().fadeIn(300);
        $(this).css("text-decoration","underline");
        $("#header .container").addClass("on");
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul").stop().fadeOut(300);
        $(this).css("text-decoration","none");
        $("#header .container").removeClass("on");
    });
    // 슬라이드
    let currentIndex = 0;
    const $sliderWrap = $(".slider__wrap");  // 부모 박스
    const $slider = $(".slider img");           // 각각 이미지
    const $sliderWidth = $slider.width();   // 이미지 가로값
    $sliderWrap.append($slider.eq(0).clone(true));  // 첫 번째 이미지 복사

    setInterval(function(){
        currentIndex++; // 현재 이미지를 1씩 증가
        $sliderWrap.animate({ marginLeft : -$sliderWidth * currentIndex }, 600);

        if(currentIndex === $slider.length){
            setTimeout(function(){
                $sliderWrap.animate({ marginLeft : 0 }, 0);
                currentIndex = 0;
            }, 700);
        }
    }, 3000);
});