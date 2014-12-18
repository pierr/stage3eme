$('button[data-action="afficher"]').on('click', function(event){
  $('ul#listeGens').removeClass('hidden').addClass("animated rotateIn");
});


$('body > h2:nth-child(6) > button').on('click', function(event){
  $('form').removeClass('hidden').addClass("animated fadeIn");
});


setTimeout(function(){
  $("ul#listeGens").append(" <li>Philippe</li><li>François</li><li>Pierre</li><li>...</li>");
}, 5000);