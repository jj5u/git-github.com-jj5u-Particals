$(".hamburger").on("click", function () {
    $(".side_bar").toggleClass("on");
    $(".content_wrapper").toggleClass("on");
    if ($(".side_bar").hasClass("on")) {
        $(".side_bar").css("width", "230px");
    } else {
        $(".side_bar").css("width", "76px");
    }
});
$(".side_container").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
});

$(".menu_icon").hover(
    () => {
        //hover
        $(".nav").css("width", "230px");
        $(".nav.on").css("width", "230px");
    },
    () => {
        //out
        $(".nav").css("width", "76px");
        $(".nav.on").css("width", "230px");
    }
);
