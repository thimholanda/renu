import 'bootstrap';
import $ from 'jquery';
import '@fortawesome/fontawesome-free/js/all.js';
import './sass/index.sass';

$(document).ready(function(){

    if($(this).scrollTop() > 120)
    {
        $('.btn-menu').addClass('btn-menu-fixed');
    }
    else
    {
        $('.btn-menu').removeClass('btn-menu-fixed');
    }

    $(window).scroll(function(){
        if($(this).scrollTop() > 120)
        {
            $('.btn-menu').addClass('btn-menu-fixed');
        }
        else
        {
            $('.btn-menu').removeClass('btn-menu-fixed');
        }
    });

    $('[data-toggle="tooltip"]').tooltip({
        template: '<div class="tooltip" role="tooltip"><div class="fa-info-container"><i class="fas fa-info text-secondary"></i></div><div class="tooltip-inner tooltip-inner-gray text-left py-3 px-4 bg-white text-secondary"></div></div>'
    });

    $('.btn-menu').click(function (e) {
        $('.menu').addClass('menu-opened');
    });

    $('.btn-close-menu').click(function (e) {
        $('.menu').removeClass('menu-opened');
    });

    $('.menu a').click(function (e) {
        $('.menu').removeClass('menu-opened');
    });

    $('.btn-accordion').click(function (e) {

        e.preventDefault();
        e.stopPropagation();
        var obj = $(this);

        if(obj.next().is(':visible'))
        {
            obj.find('.fa-minus').fadeOut('fast', function(){
                obj.find('.fa-plus').fadeIn();
            });
        }
        else
        {
            obj.find('.fa-plus').fadeOut('fast', function(){
                obj.find('.fa-minus').fadeIn();
            });
        }

        obj.next().fadeToggle('slow');
    });
});