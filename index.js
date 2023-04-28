const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const texto1 = document.getElementById("texto1");
const texto2 = document.getElementById("texto2");

boton1.addEventListener("click", function() {
  if (boton1.classList.contains("activo")) {
    texto1.style.display = "none";
    boton1.classList.remove("activo");
  } else {
    texto1.style.display = "block";
    texto2.style.display = "none";
    boton1.classList.add("activo");
    boton2.classList.remove("activo");
  }
});

boton2.addEventListener("click", function() {
  if (boton2.classList.contains("activo")) {
    texto2.style.display = "none";
    boton2.classList.remove("activo");
  } else {
    texto1.style.display = "none";
    texto2.style.display = "block";
    boton1.classList.remove("activo");
    boton2.classList.add("activo");
  }
});
  

