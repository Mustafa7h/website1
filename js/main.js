$(document).ready(function () {
    $("#loading").fadeOut(3000);
    let y = $('#client').offset().top;
    $(window).scroll(function () {
        let x = $(window).scrollTop();
        if (x > y - 150) {
            $('#main-nav').css('cssText', 'background-color: rgba(40, 58, 90, 1.5) !important')
            $("#btnUp").fadeIn(500);
        } else {
            $('#main-nav').css('cssText', 'background-color: transparent !important')
            $("#btnUp").fadeOut(500);
        }
    });
});

$("#btnUp").on("click", function () {
    $(window).scrollTop(0);

});
