      $(function(){
         $('#slider div:gt(0)').hide();
           setInterval(function(){
            $('#slider div:first-child').fadeOut(1000)
                .next ('div').fadeIn(500)
                .end().appendTo('#slider');
          },5000);

       })