$(document).ready(function(){
    $('#navbarNavAltMarkup a').on('click',function(event){
        var scroll=$(this).attr('href')
        var tujuan=$(scroll);
        $('html,body').animate({
            scrollTop:tujuan.offset().top-50
        },1000,'easeInOutExpo');
        event.preventDefault();
    });
});