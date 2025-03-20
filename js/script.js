let currentStyle = 1; // Comienza con el estilo 1
function cambiarEstilo() {

  const themeLink = document.getElementById("theme");

  currentStyle++; 

  // si el estilo es mayor a 4 vuelve al principio
  if (currentStyle > 4) {
    currentStyle = 1;
  }


  // Cambia la hoja de estilo según el valor de currentStyle
  switch (currentStyle) {
    case 1:
      themeLink.setAttribute("href", "./css/estilos.css");
      break;
    case 2:
      themeLink.setAttribute("href", "./css/estilos-peliculas.css");

      break;
    case 3:
      themeLink.setAttribute("href", "./css/estilos-urbano.css");
      break;
    case 4:
      themeLink.setAttribute("href", "./css/sin-estilos.css");
      break;
  }
  console.log("CurrentStyle: " , currentStyle)
}
