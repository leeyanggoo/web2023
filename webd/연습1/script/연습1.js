// $(document).ready(function(){

// });


$(function(){
    // 메뉴
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });

    // 슬라이드
    let currentIndex = 0;
    const $slider = $(".slider");
    $slider.hide().first().show();  // 첫 번째 이미지 나타남

    setInterval(function(){
        let nextIndex = (currentIndex + 1) % $slider.length;
        $slider.eq(currentIndex).fadeOut(1000); // eq = first
        $slider.eq(nextIndex).fadeIn(1000);

        currentIndex = nextIndex;
    }, 3000)

    // 탭 메뉴
    const tabBtn = $(".info-menu > a");
    const tabCont = $(".info-cont > ul");
    tabCont.hide().eq(0).show();
    tabBtn.click(function(){
        const index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");    //sibling은 옆에 형제놈
        tabCont.eq(index).show().siblings().hide();
    })
});