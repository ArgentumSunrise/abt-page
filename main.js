$(document).ready(function () {

    $('#proj-page > h1 > a').mouseenter(function () {
        shadowToggle($(this))
    });
    $('#proj-page > h1 > a').mouseleave(function () {
        shadowToggle($(this))
    });

    function shadowToggle(subject) {
        subject.toggleClass("shadow-active");
    }

})