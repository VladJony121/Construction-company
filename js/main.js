$(document).ready(function() {
    $('.header__burger').click(function(event){
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
    });
})
$(document).ready(function() {
    $('.questions__menu').click(function(event){
    $('.questions__menu,.questions__text,.questions__logo').toggleClass('active');
    });
    $('.questions__menu2').click(function(event){
        $('.questions__menu2,.questions__text2,.questions__logo2').toggleClass('active');
        });
        $('.questions__menu3').click(function(event){
            $('.questions__menu3,.questions__text3,.questions__logo3').toggleClass('active');
            });
            $('.questions__menu4').click(function(event){
                $('.questions__menu4,.questions__text4,.questions__logo4').toggleClass('active');
                });
})