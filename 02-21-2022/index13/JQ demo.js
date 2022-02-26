$('.register').each(function (i){

    $(this).click(function (){
        $('.registerform').addClass('registerform-active');
        $('.login').css('background-coler','#A9E2F4');
        $('.register').css('coler','#A9E2F4');
    });

});
$('.login').each(function (i){
    $(this).click(function (){
        $('.registerfrom').removeClass('registerform-active');
        $('.register').css('background-coler','#0B4C5F');
    });
});