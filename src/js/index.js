$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });
 $('.menu-cont').on('click', function() {
   
   var menu = $('.menu-txt').text();
     var close = $('.menu-txt').attr('data-text');
   
   $('.menu').toggleClass('active');
   
   if ($('.menu-txt').text(menu)) {
     $('.menu-txt').text(close);
   } else {
     $('.menu-txt').text(menu);
   } 
     $('.menu-txt').attr('data-text',menu);
 })
