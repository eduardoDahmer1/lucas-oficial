$('.nav-toggle, .closed, .nav-close').click(function(e){
    e.preventDefault();
    $('.nav').toggleClass('active');
});