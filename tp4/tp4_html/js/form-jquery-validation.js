$(document).ready(function () { //pour chargement de la page
    
        $('#mybtn').on("click", function (event) { //ajouter un "listener" à un élément
            event.preventDefault();
            console.log( "click" ); 
    
            if ($('#name').val() == "" || $('#firstname').val() == "" || $('#birth').val() == "" || $('#adresse').val() == "" || $('#mail').val() == "") {
    
                $('#myModal').modal("show");
            }
            else {
                
                contactStore.add($('#name').val(),$('#firstname').val(), $('#birth').val(),
                 $('#adresse').val(), $('#mail').val());
                 
                  document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
                  '<tr><td>'+$('#name').val()+'</td><td>'+$('#firstname').val()+'</td><td>'+$('#birth').val()+'</td><td>'+$('#adresse').val()+'</td><td>'+$('#mail').val()+'</td><td>';
            }
    
        });
    })
    $(document).ready(function(){
        $('#name').keyup(function(){
            $('span').text($('#name').val().length);
         });
     });
     $(document).ready(function(){
        $('#firstname').keyup(function(){
            $('a').text($('#firstname').val().length);
         });
     });
    