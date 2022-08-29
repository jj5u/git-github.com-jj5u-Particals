if (window.matchMedia("(max-width: 768px)").matches) {
    $(".first_action")
        .after()
        .on("click", function (e) {
            e.preventDefault();
            $("section.2depth").show();
            $("section.2depth").addClass("mobile");
            $("body").addClass("scrollLock");
            $(".popup_wrapper").addClass("mobile");
            $("section.2depth.mobile").appendTo("div.popup_wrapper");
            $("section.2depth.mobile button.close").prependTo("section.2depth.mobile .white_box");
        });
    $("button.close").on("click", function (e) {
        e.preventDefault();
        $("section.2depth").hide();
        $("section.2depth").removeClass("mobile");
        $("body").removeClass("scrollLock");
        $(".popup_wrapper").removeClass("mobile");
    });
} else {
    $(".first_action")
        .after()
        .on("click", function (e) {
            e.preventDefault();
            $("section.2depth").show();
        });
    $("button.close").on("click", function (e) {
        e.preventDefault();
        $("section.2depth").hide();
    });
}
