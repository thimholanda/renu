import 'bootstrap';
import $ from 'jquery';
import '@fortawesome/fontawesome-free/js/all.js';
import './sass/index.sass';
import YTPlayer from 'yt-player';

$(document).ready(function(){

    $('.menu-link').click(function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        let targetElTop = $(target).offset().top;

        switch (target) {
            case '#porque-escolher-renu-fresh':
                targetElTop -= 50;
                break;

            case '#familia-renu-fresh':
                targetElTop -= 50;
                break;

            case '#familia-bausch-lomb':
                targetElTop -= 160;
                break;

            case '#guia-rapido':
                targetElTop += 570;
                break;

            case '#para-iniciantes':
                targetElTop -= 150;
                break;

            case '#dicas-para-o-seu-dia-a-dia':
                targetElTop -= 150;
                break;

            case '#onde-encontrar':
                targetElTop -= 50;
                break;

            case '#duvidas-frequentes':
                targetElTop -= 180;
                break;
        }

        $(window).scrollTop(targetElTop);
    });

    $('body').on('click', '.link-control', function (e) {
        e.preventDefault();

        let href = $(this).attr('href');

        $('.btn-modal-continue').attr('href', href);

        $('.modal').modal({
            backdrop: 'static',
            show: true
        })
    });

    $('.btn-modal-continue').click(function(e){
        $('.modal').modal('hide');
    });

    const player = new YTPlayer('#player', {
        modestBranding : true,
        related : false
    });

    const player2 = new YTPlayer('#player2', {
        modestBranding : true,
        related : false
    });

    player.load('ASJJqD2weas');
    player2.load('X1zR6r4w_Ig');

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