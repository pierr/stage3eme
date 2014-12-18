stage3eme
=========

Stage de 3ème Maxime et Hugo.

## Technologies abordées
- HTML : struture de la page
- CSS : habillage de la page
- JavaScript: dynamisme dans la page

## Liens utiles

- Lien du site publié : [ici](http://pierr.github.io/stage3eme/)
- Site de départ: [ici](http://html5boilerplate.com/)


## Exemple

- HTML

```html
<p class="authors animated flipInX">
  Cet exemple a été écrit par <a id="lienHugo" href="http://google.fr">Hugo</a> et <a href='http://facebook.com'>Maxime</a>.
</p>
```

- CSS
```css
a#lienHugo{
background-color: red;
 color: white;   
}

p.authors{
    font-size: 50px;
    width: 50%;
    margin-left: 40%;
    border-style: solid;
    border-width: 5px;
}
```

- JavaScript
```javascript
$('button[data-action="afficher"]').on('click', function(event){
  $('ul#listeGens').removeClass('hidden').addClass("animated rotateIn");
});

```

- Liens utiles
+ [Mozilla Dev](https://developer.mozilla.org)
+ [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
+ [CSS](https://developer.mozilla.org/fr/docs/Web/CSS)
+ [HTML](https://developer.mozilla.org/fr/docs/Web/HTML)
+ [HTML5 boilerplate](http://html5boilerplate.com/)
