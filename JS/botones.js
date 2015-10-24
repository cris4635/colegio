$(document).ready(function(){

    $("#boton1").click(function(){

   $("#grupo1").show();
    $("#grupo2").hide();
     $("#grupo3").hide();

});

        $("#boton2").click(function(){

   $("#grupo2").show();
    $("#grupo1").hide();
     $("#grupo3").hide();
    });
        
        $("#boton3").click(function(){

   $("#grupo3").show();
    $("#grupo1").hide();
     $("#grupo2").hide();
    });
         });
        