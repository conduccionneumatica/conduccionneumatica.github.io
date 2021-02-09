---
layout: content
title: 'Air Manual'
permalink: /en/manual/
vimeo:
  - 503877285
  - 503876816
  - 503876133
  - 503876434
---
AIR MANUAL EN

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
          Name:
          <input type="text" name="name" required>
        </li>
        <li>
          E-Mail:
          <input type="email" name="_replyto" required>
        </li>
        <li>
          Telephone Number:
          <input type="tel" name="phone" required>
        </li>
        <li>
          <button id="my-form-button" class="manual-form-button" type="submit">Send</button>
        </li>
        <li id="my-form-status" class="manual-form-status"></li>
      </ul>
    </form>
  </div>
</div>
