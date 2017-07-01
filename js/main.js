'use strict';

$(function () {
    
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            //color nawigacji
            $('#menu').css('background-color', 'aqua');
        }
    });
});