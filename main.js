$(document).ready(function () {

    pages = ['abt'];

    $('.arrow').click(function (event) {
        var id = $(this).parent().attr('id');
        var target = $("#" + id);
        if (target.length) {
            event.preventDefault();
            scrolling(target, pages.indexOf(id));
        }
    });

})