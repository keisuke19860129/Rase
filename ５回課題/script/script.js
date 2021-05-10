      $(function() {
        $('#sub-menu').mouseover(function(e) {
        $('.menu-item01').addClass("open");
          })
        $('#sub-menu').mouseout(function(e) {
        $('.menu-item01').removeClass("open");
          })
          $('.a1').mouseover(function(e) {
            $('.menu-item01').addClass("open");
              })
            $('.a1').mouseout(function(e) {
            $('.menu-item01').removeClass("open");
              })
              $('#sub-menu2').mouseover(function(e) {
                $('.menu-item02').addClass("open");
                  })
                $('#sub-menu2').mouseout(function(e) {
                $('.menu-item02').removeClass("open");
                  })
                  $('.a2').mouseover(function(e) {
                    $('.menu-item02').addClass("open");
                      })
                    $('.a2').mouseout(function(e) {
                    $('.menu-item02').removeClass("open");
                      })
                      $('#sub-menu4').mouseover(function(e) {
                        $('.menu-item04').addClass("open");
                          })
                        $('#sub-menu4').mouseout(function(e) {
                        $('.menu-item04').removeClass("open");
                          })
                          $('.a4').mouseover(function(e) {
                            $('.menu-item04').addClass("open");
                              })
                            $('.a4').mouseout(function(e) {
                            $('.menu-item04').removeClass("open");
                              })
                              $('#sub-menu5').mouseover(function(e) {
                                $('.menu-item05').addClass("open");
                                  })
                                $('#sub-menu5').mouseout(function(e) {
                                $('.menu-item05').removeClass("open");
                                  })
                                  $('.a5').mouseover(function(e) {
                                    $('.menu-item05').addClass("open");
                                      })
                                    $('.a5').mouseout(function(e) {
                                    $('.menu-item05').removeClass("open");
                                      })
                                      $('#sub-menu6').mouseover(function(e) {
                                        $('.menu-item06').addClass("open");
                                          })
                                        $('#sub-menu6').mouseout(function(e) {
                                        $('.menu-item06').removeClass("open");
                                          })
                                          $('.a6').mouseover(function(e) {
                                            $('.menu-item06').addClass("open");
                                              })
                                            $('.a6').mouseout(function(e) {
                                            $('.menu-item06').removeClass("open");
                                              })
      $('.menu-item').hover(function(){
       $(this).find('.sub-menu').slideDown(200);
      }, function(){
          $(this).find('.sub-menu').hide();        
      })  
   });

   $('.Nav__btn').on('click',function(){
    $('.Nav').toggleClass('Nav--isOpen');
   });
    $('.Nav__btn').on('click',function(){
    $('.Nav__btn').toggleClass('Open');
  });
  $('.Nav__btn').on('click',function(){
    $('.Nav__lineTop').toggleClass('Open');
  });
  $('.Nav__btn').on('click',function(){
    $('.Nav__lineMiddle').toggleClass('Open');
  });
  $('.Nav__btn').on('click',function(){
    $('.Nav__lineBottom').toggleClass('Open');
});
$('.Nav__btn').on('click',function(){
  $('.menu-item').slideToggle('200');
});
$('.Nav__btn').on('click',function(){
  $('.Nav__lineBottom').css('color','white');
});