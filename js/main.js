'use strict';

$(function () {
    
/* $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(window).height() ) {
            //color nawigacji
            $('#main-nav').css('background-color', 'aqua');
        } else {
            $('#main-nav').css('background-color', 'transparent');
        }
    });*/
    
    
    $(window).scroll(function () {
       
        if ($(window).scrollTop() >= 50) {
            //$('#main-nav').css('background-color', 'aqua');
            $('#main-nav').addClass('scroll');
            $('#main-nav').css({'transition': 'all 0.3s'});
        } else {
            //$('#main-nav').css('background-color', 'transparent');
            $('#main-nav').removeClass('scroll');
        }
        
    });

     if ($(window).scrollTop() >= 50) {
            $('#main-nav').addClass('scroll');
         
        } 
    
});