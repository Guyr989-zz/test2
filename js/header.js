$(document).ready(function () {


    window.isMobile = function () {
        return screen.width <= 768;
    }


    $(".banner_desktop_content_wrap").each(function (i, el) {
        if (!$(this).find(".on-banner").length < 1) {
            $(this).find(".banner_description").addClass("no-title");
        }
    });

    $(".on-banner-titles").each(function (i, el) {
        if ($(this).find(".banner_additional-info").hasClass("hide")) {
            $(this).css("bottom", "30px");
        }
    });


    if (window.isMobile()) {
        document.addEventListener("touchstart", function () {}, true);
        //close links popup  by any click on screen
        $('html,body').click(function () {
            $(".mob_menu_btn").removeClass("open")
            $(".mob_menu_btn").find("img").attr("src", "images/menu_mob_btn.jpg");
            $(".header .logo").removeClass("closeMenu");
            $(".header .logo img").attr("src", "images/logo_yes.png")
            $("nav").removeClass("slideRight");
        });
        $('.mob_menu_btn,.slideRight a,.sub_nav_items .ttl').click(function (event) {
            event.stopPropagation();
        });
        //close links popup


        $(".logo").on("click", function () {
            if ($(this).hasClass("closeMenu")) {
                $(".mob_menu_btn").removeClass("open")
                $(".mob_menu_btn").find("img").attr("src", "images/menu_mob_btn.jpg");
                $(".header .logo").removeClass("closeMenu");
                $(".header .logo img").attr("src", "images/logo_yes.png")
                $("nav").removeClass("slideRight");
            }
        });

        $(".mob_menu_btn").on("click", function () {
            if ($(this).hasClass("open")) {
                $(this).removeClass("open")
                $(this).find("img").attr("src", "images/menu_mob_btn.jpg");
                $(".header .logo").removeClass("closeMenu");
                $(".header .logo img").attr("src", "images/logo_yes.png")
                $("nav").removeClass("slideRight");

            } else {
                $(this).addClass("open")
                $(this).find("img").attr("src", "images/close.jpg");
                $(".header .logo img").attr("src", "images/menu_mob_btn.jpg")
                $(".header .logo").addClass("closeMenu");
                $("nav").addClass("slideRight");
            }
        });
        $(".header nav > a").on("click", function () {
            var act = $(this).next(".sub_nav");
            if ($(act).hasClass("active")) {
                $(act).removeClass("active");
                $(this).removeClass("open");
                return false;
            } else {
                $(".sub_nav").removeClass("active");
                $(act).addClass("active");

                $(".header nav > a").removeClass("open");
                $(this).addClass("open");
                return false;
            }
        });

        $(".header nav .sub_nav_items .ttl").on("click", function () {
            var act = $(this).parent(".item");
            if ($(act).find(".ttl").hasClass("active")) {
                $(act).find(".ttl").removeClass("active");
                $(act).find(".sub_lnk").removeClass("on");
                $(".plus").removeClass("active");
                $(".plus_sub").removeClass("on_plus");

            } else {
                $(".ttl").removeClass("active");
                $(act).find(".ttl").addClass("active");
                $(".sub_lnk").removeClass("on");
                $(act).find(".sub_lnk").addClass("on");
                $(".plus").removeClass("active");
                $(".plus_sub").removeClass("on_plus");
            }
        });


        $(" .header nav .sub_nav_items .plus").on("click", function () {
            var act = $(this);
            if ($(act).hasClass("active")) {
                $(act).removeClass("active");
                $(act).next(".plus_sub").removeClass("on_plus");

            } else {
                $(act).addClass("active");
                $(act).next(".plus_sub").addClass("on_plus");

            }
            return false
        });


    } else {

        $(" .header nav .sub_nav_items .plus").on("click", function () {
            var act = $(this);
            if ($(act).hasClass("active")) {
                $(act).removeClass("active");
                $(act).next(".plus_sub").removeClass("on_plus");

            } else {
                $(act).addClass("active");
                $(act).next(".plus_sub").addClass("on_plus");

            }
            return false
        });

        $("nav > a").on("mouseenter", function () {
            $("nav > a").next("div").hide();
            $(this).next("div").show();
            $("nav > a").removeClass("selected");
            $(this).addClass("selected");
        });

        $("nav").on("mouseleave", function () {
            $("nav > a").next("div").hide();



        });
    }
});