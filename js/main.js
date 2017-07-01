'use strict';

$(function () {
    
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            //color nawigacji
            $('#main-nav').css('background-color', 'aqua');
        } else {
            $('#main-nav').css('background-color', 'transparent');
        }
    });
});