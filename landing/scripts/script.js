var header = document.querySelector(".site-header");
var enlaces = document.querySelectorAll(".menu a[data-seccion]");
var secciones = ["inicio", "proyectos", "contacto"];

function actualizar() {
  if (window.scrollY > 10) {
    header.classList.add("con-sombra");
  } else {
    header.classList.remove("con-sombra");
  }

  if (enlaces.length === 0) {
    return;
  }

  var punto = window.scrollY + 140;
  var actual = "inicio";

  for (var i = 0; i < secciones.length; i++) {
    var seccion = document.getElementById(secciones[i]);
    if (seccion && seccion.offsetTop <= punto) {
      actual = secciones[i];
    }
  }

  var alFinal = window.innerHeight + window.scrollY >= document.body.offsetHeight - 4;
  if (alFinal) {
    actual = "contacto";
  }

  for (var j = 0; j < enlaces.length; j++) {
    if (enlaces[j].getAttribute("data-seccion") === actual) {
      enlaces[j].classList.add("activo");
    } else {
      enlaces[j].classList.remove("activo");
    }
  }
}

window.addEventListener("scroll", actualizar);
actualizar();