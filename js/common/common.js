$(document).ready(function() {
    $(".navbar-shadow").click(function() {
        hide_navbar_collapse(); //隐藏
    });

    $(".navbar-close").click(function () {
        hide_navbar_collapse(); //隐藏
    });

    $(".navbar-toggle").click(function() {
        open_navbar_collapse();  // 显示
    });

});

/* 显示 */
function open_navbar_collapse() {
    $("body").addClass("navbar-on");
    $(".navbar-shadow").addClass("navbar-on-shadow");
}
/* 隐藏 */
function hide_navbar_collapse() {
    $("body").removeClass("navbar-on");
    $(".navbar-shadow").removeClass("navbar-on-shadow");
}