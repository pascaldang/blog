
$(document).ready(function(){
  $(document).mousemove(function(e){
     TweenLite.to($('body'), 
        .5, 
        { css: 
            {
                'background-position':parseInt(event.pageX/8) + "px "+parseInt(event.pageY/12)+"px, "+parseInt(event.pageX/15)+"px "+parseInt(event.pageY/15)+"px, "+parseInt(event.pageX/30)+"px "+parseInt(event.pageY/30)+"px"
            }
        });
  });
});
	$(document).ready(function(){$("body").hide().fadeIn(1000)});
	$(document).ready(function(){$("div").hide().fadeIn(1400)});
	$(document).ready(function(){$("h1").hide().fadeIn(1300)});

    function shakeIt(){
        $('#champ').effect("shake", { times:5, distance:8 }, 50);
    }


function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}

function verifPseudo(champ)
{
   if(champ.value.length < 3 || champ.value.length > 20)
   {
    $("#champsss").effect("shake");
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifPass(champ)
{
   if(champ.value.length < 8 || champ.value.length > 20)
   {
    $("#champssss").effect("shake");
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifPassConfirm(champ)
{
   if(champ.value.length < 3 || champ.value.length > 20)
   {
    $("#champss").effect("shake");
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}


function verifNom(champ)
{
   if(champ.value.length < 3 || champ.value.length > 20)
   {
    $("#champ").effect("shake");
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}
function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      $("#champs").effect("shake");
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   
    }
}

function verifPassConfirm(champ){
  if(champss.value != champssss.value) {
    $("#champss").effect("shake");
      surligne(champ, true);
      return false;
  }else if(champ.value.length == 0){
    $("#champss").effect("shake");
      surligne(champ, true);
      return false;
  } 
  else {
     surligne(champ, false);
      return true;
  }
}

function verifForm(f)
{  
   var passConfirmOk = verifPassConfirm(f.mdpConfirm);
   var nomOk = verifNom(f.nom);
   var mailOk = verifMail(f.mail);
   var pseudoOk = verifPseudo(f.pseudo)
   var mdpOk = verifPass(f.mdp)
   
   if(nomOk && mailOk && passConfirmOk && pseudoOk && mdpOk)
      return true;
    else{
      return false;
    }
}





function height(bloc){
  var hauteur;
  
  if( typeof( window.innerWidth ) == 'number' )
    hauteur = window.innerHeight;
  else if( document.documentElement && document.documentElement.clientHeight )
    hauteur = document.documentElement.clientHeight;
  
  document.getElementById(bloc).style.height = hauteur+"px";
}

window.onload = function(){ height("body") };
window.onresize = function(){ height("body") };
