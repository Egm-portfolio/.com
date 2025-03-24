// Obtener el botón y el book de fotos
var boton = document.getElementById("boton");
var book = document.getElementById("book");

// Crear una función para mostrar u ocultar el book de fotos
function mostrarBook() {
  if (book.style.display === "none") {
    book.style.display = "block";
  } else {
    book.style.display = "none";
  }
}

// Añadir un event listener al botón para ejecutar la función cuando se haga clic
boton.addEventListener("click", mostrarBook);
