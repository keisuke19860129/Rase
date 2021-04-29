    $(function (){
      $('.menu-item').hover(function(){
       $(this).find('.sub-menu').slideDown(200);
      }, function(){
          $(this).find('.sub-menu').hide();
      })  
   });


   $(function(){
     $('#Nav__btn').click(function(){

       $('#a1,#a2,#a3,#a4,#a5,#a6').slideToggle(100);
        $('#close').toggleClass('show');
        
    
   })
     
   });

