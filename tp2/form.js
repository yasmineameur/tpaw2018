function validation() {
    
    if (document.getElementById("nom").value==""|| document.getElementById("prenom").value=="" || document.getElementById("date").value==""||document.getElementById("address").value==""||document.getElementById("mail").value=="") 
    {
        
        document.getElementById("resultat").setAttribute("hidden","hidden");
        document.getElementById("error").removeAttribute("hidden");
        document.getElementById("error").innerHTML = "La saisie de tout les champs est obligatoire";
           }

                                                                           
           else if (document.getElementById("nom").value.length <5 || document.getElementById("nom").value.length >20 )
    {
     document.getElementById("resultat").setAttribute("hidden","hidden");
     document.getElementById("error").removeAttribute("hidden");
     document.getElementById("error").innerHTML = "le nom doit contenir entre 5 et 20 caractères";
    }
    else if (document.getElementById("prenom").value.length <5 || document.getElementById("prenom").value.length >20 )
    {
     document.getElementById("resultat").setAttribute("hidden","hidden");
     document.getElementById("error").removeAttribute("hidden");
     document.getElementById("error").innerHTML = " le prénom doit contenir entre 5 et 20 caractères";
    }
    else if (document.getElementById("address").value.length <5 || document.getElementById("address").value.length >20 )
    {
     document.getElementById("resultat").setAttribute("hidden","hidden");
     document.getElementById("error").removeAttribute("hidden");
     document.getElementById("error").innerHTML = " le champ adresse doit contenir entre 5 et 20 caractères";
    }
    else if (document.getElementById("mail").value.length <5 || document.getElementById("mail").value.length >20 )
    {
     document.getElementById("resultat").setAttribute("hidden","hidden");
     document.getElementById("error").removeAttribute("hidden");
     document.getElementById("error").innerHTML = "le champ adresse mail doit contenir entre 5 et 20 caractères";
    }
  
    else{
     document.getElementById("error").setAttribute("hidden","hidden");
     document.getElementById("resultat").removeAttribute("hidden");
     document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
    }
 }