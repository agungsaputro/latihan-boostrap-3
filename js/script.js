// event pada link di klik

$('.page-scroll').on('click', function(e){
    var href = $(this).attr('href');
    var element = $(href);

    $('body').animate({
        scrollTop: element.offset().top - 50
    });

    e.preventDefault();
});