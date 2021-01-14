---
layout: content
title: 'Manual del Aire'
permalink: /manual/
vimeo:
  - 289756234
  - 289756234
  - 289756234
  - 289756234
---
Ejercicios respiratorios para modelar cuerpos y atmósferas, y producir flujos de aire. Es una recopilación de conocimientos y prácticas respiratorias de diversos espacio-tiempos. Van y vienen, se adaptan a cada contenido, acelerando y desacelerando, humedeciendo y secando, presionando y relajando. Ejercicios sonoros, rítmicos, de fortalecimiento, de resistencia; diseñados para hacerse en solitario, en pareja o en grupo. Las instrucciones indican el lugar, la postura, la forma, intensidad y frecuencia con la que se ingiere y expulsa el aire desde el cuerpo. Úsalo y des-úsalo como tus flujos gaseosos lo deseen.

<br>

{% for id in page.vimeo %}
  <div class="video-with-title">
    <div class="video-title"
         style="background-image: url({{ site.baseurl }}/images/manual-marquee-{{ forloop.index0 }}.png);"></div>
    {% include vimeo.html id=id %}
  </div>
{% endfor %}

Encuentra 27 ejercicios más en la publicación impresa del Manual del Aire.

<div class="manual-table">
  <div class="manual-table-image-wrapper">
    <div class="manual-table-image"></div>
  </div>
  <div class="manual-table-info">
    <ul class="manual-table-info-list">
      <li>Manual del aire</li>
      <li>Impresión en risografía a dos tintas:<br>
        Rosa Fluor y Azul.</li>
      <li>44 páginas</li>
      <li>27 ejercicios respiratorios:<br>
        21 de la luz y<br>
        6 de la sombra</li>
      <li>Tiraje: 150 copias</li>
      <li>Precio: 40 soles</li>
    </ul>
    <ul id="my-manual-table-info-button" class="manual-table-info-list manual-table-info-button">
      <li>Consiguelo aquí</li>
    </ul>
  </div>
</div>

<div class="manual-table manual-form-table">
  <div class="manual-table-image-wrapper"></div>
  <div class="manual-table-info">
    <form id="my-form" class="manual-form" action="https://formspree.io/f/mayladrk" method="POST">
      <ul class="manual-table-info-list">
        <li>
          Nombre:
          <input type="text" name="name" required>
        </li>
        <li>
          Correo Electrónico:
          <input type="email" name="_replyto" required>
        </li>
        <li>
          Teléfono:
          <input type="tel" name="phone" required>
        </li>
        <li>
          <button id="my-form-button" class="manual-form-button" type="submit">Enviar</button>
        </li>
        <li id="my-form-status" class="manual-form-status"></li>
      </ul>
    </form>
  </div>
</div>
