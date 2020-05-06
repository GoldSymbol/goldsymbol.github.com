// Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

// Recorrerlos
links.forEach(function(link) {
  // Agregar un evento click a cada uno de ellos - Case Sensitive
  // ev == event == evento -> cualquiera se puede usar / event -> Puede generar en ocaciones errores
  link.addEventListener("click", function(ev) {
    // return false; -> Hace lo mismo que ev.preventDefault();, que es quitar el redireccionamiento
    ev.preventDefault();
    let view = document.querySelector(".view");
    // Quitarle las clases de animación que ya addEventListener
    view.classList.remove("bounceInLeft");
    view.classList.remove("animated");
    // Agregar clases para animar su salida
    view.classList.add("fadeOutLeft");
    view.classList.add("animated");

    // setInterval -> Se ejecuta muchas veces | setTimeout -> Se ejecuta una sola vez
    setTimeout(function() {
      location.href = "/boletines";
    }, 600)
  })
});
