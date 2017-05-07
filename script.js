    
   $(function(){
var suma, unfav, login;

    document.getElementById('unfav').title = "Añadir a favoritos";
    
     $("#unfav").click(function(){
   document.getElementById('unfav').src = "favorite.png";
        window.confirm("Agregado a favoritos");
    document.getElementById('unfav').title = "Eliminar de favoritos";
        
         $("#unfav").click(function(){
     document.getElementById('unfav').src = "unfav.png";
             window.confirm("Eliminado de favoritos");
         });
        
    });

 $("#unfav2").click(function(){
   document.getElementById('unfav2').src = "favorite.png";
        window.confirm("Agregado a favoritos");
    document.getElementById('unfav2').title = "Eliminar de favoritos";
        
         $("#unfav2").click(function(){
     document.getElementById('unfav2').src = "unfav.png";
             window.confirm("Eliminado de favoritos");
         });
        
    });

 $("#unfav3").click(function(){
   document.getElementById('unfav3').src = "favorite.png";
        window.confirm("Agregado a favoritos");
    document.getElementById('unfav3').title = "Eliminar de favoritos";
        
         $("#unfav3").click(function(){
     document.getElementById('unfav3').src = "unfav.png";
             window.confirm("Eliminado de favoritos");
         });
        
    });
             
         $("input[name=log]").change(function(){
            
             var check = $("#doc").is(":checked");
                if (this.checked){
                   $("#login").load("log.html");
                } else {
                    $("#login").hide();
                }       
        
        });
   });