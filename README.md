# La Carbonera

La API Emotional Shel ha llegado a oído de las principales librerías de Barcelona. Les ha parecido una idea muy buena que, nada más llegar a la tienda, se les pueda recomendar un libro en función del esado de ánimo de la persona ese día.

Para ello cada librería implementará una aplicación a su manera para consumir nuestra API. La librería [La Carnonera](https://www.google.com/maps/place//data=!4m2!3m1!1s0x12a4a2676d9ad76f:0x8502ba35041d11dd?sa=X&ved=1t:8290&ictx=111) va a colocar un pequeño terminal a la entrada done el cliente podrá seleccionar cómo se siente y la app les recomendará un libro. Algo similar a lo que se puede ver en algunos comercios o instalaciones para indicar el nivel de satisfacción con el servicio: 

![](https://c8.alamy.com/comp/BY1HG1/detail-of-video-customer-satisfaction-recording-screen-inside-toilets-BY1HG1.jpg)

Los programadores que han contratado han hecho la aplicación en HTML, CSS y JavaScript del lado cliente, pero la aplicación está incompleta.

[Demo de la solución](https://omiras.github.io/llibreria-carbonera-rest-api-client/)

## Modo _Hardcore_

¿Te atreves a implementar la aplicación del lado cliente de 0? No mires el fichero *app.js*. Renombralo y crearlo de cero para gestionarla manipulación del DOM , eventos JavaScript y llamada a la fetch API

## Dirección de la REST API pública

La API está todavía en una fase temprada de desarrollo. Ha sido publicada en el siguiente endpoint:

`GET https://emotional-shelf.onrender.com/api/books/recommendations/:emotion/random`

Donde :emotion es un valor de emoción posible entre los que maneja la REST API: 

Prueba a colocar cualquiera de las emociones que maneja la api

`Inspiration, Curiosity, Escapism, Nostalgia, Happiness, Sadness]`

Asi pues si queremos un libro relacionado con la curiosidad haríamos un GET a https://emotional-shelf.onrender.com/api/books/recommendations/Curiosity/random



## Iteración 1

Abre index.html usando Live Server.
Completa el fichero app.js allí donde se te indica. Estamos haciendo una petición a un endpoint des de una aplicación Web. [ayuda](https://github.com/omiras/ejemplos-javascript-pimec-front-end/blob/main/index-fetch-api.html)

## Iteración 2

Es posible que una de las emociones no "funcione". ¿Cuál es? ¿Por qué?
Echa un vistazo en las herramientas de desarrollador para averiguarlo:
<img src="https://oscarm.tinytake.com/media/16badfc?filename=1727774824942_TinyTake01-10-2024-11-26-28_638633716245038337.png&sub_type=thumbnail_preview&type=attachment&width=1199&height=612" title="Powered by TinyTake Screen Capture"/>

Es posible que tengas que modificar el HTML.

## Iteración 3

Levanta tu aplicación de _Emotional Shelf_ en localhost, y conecta ahora está aplicación a tu API. Intenta reproducir el mismo comportamiento que usando la API pública. Surgirán problemas es normal. Trata de identificarlos y arreglarlos.

### Creditos de las imágenes

[Shiba Inu Dog Emoticons](<a href="https://www.flaticon.com/free-icons/shiba-inu" title="shiba inu icons">Shiba inu icons created by AomAm - Flaticon</a>)