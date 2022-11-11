/* let title = document.querySelector(".title");

title.style.color = "blue";
title.style.textAlign = "center";
title.style.fontSize = "12px";
titulo.style.backgroundColor = "black";

let cita = document.querySelector(".cita");

cita.classList.add("italicas77");

cita.classList.remove("cita");

let clase = document.querySelector(".p");

cita.classList.toggle("cita"); */

/* /* /* classList.contains( ) */
/* Nos permite preguntar si un elemento tiene una clase
determinada. Devuelve un valor booleano. */

/* let cita = document.querySelector(".italicas");
cita.classList.contains("cita"); */ // false;

/* let cita = document.querySelector(".italicas");
cita.classList.contains("italicas") */ // true; */ */

/* EVENTOS MAS USADOS
● onclick // Hacer click en un elemento
● ondblclick // Cuando presionas un boton
● onmouseover // Cuando pasas el mouse por la etiqueta
● onmouseout // Cuando sacas el cursor de la etiqueta
● onmousemove // Cuando moves el mouse
● onscroll // Bajas por la pagina
● onkeydown // Presionas una tecla
● onload // Cuando se carga la ventana de la pagina
● onfocus
● onblur
● onchange // Cuando cambia un elemento
● onsubmit */ // Para formularios cuando se suben los datos

/* 1) EVENTO ONLOAD
ONLOAD
El evento onLoad es un evento que permite que todo el
script se ejecute cuando se haya cargado por completo
el objeto document dentro del objeto window. */

/* window.onload = function(){
    alert("el documento está listo");
    } */

/* Se suele escribir el código js dentro de esta
    función para prevenir errores que pueden
    ocurrir si el documento no está totalmente
    cargado al momento de la ejecución del script. */

/* let btn = document.querySelector(".btn");

btn.onclick = () => {
  alert("Alerta Naranja");
};
 */

let hipervinculo = document.querySelector(".a");

/* hipervinculo.addEventListener("click", (event) => {
  event.preventDefault();
}); */

/* hipervinculo.onclick = function (event) {
  alert("Hola");
  event.preventDefault();
}; */

/* hipervinculo.addEventListener("", (event) => {
  alert("Prueba con doble click");
  event.preventDefault();
}); */

let texto = document.querySelector(".h1");

/* texto.ondblclick = () => {
  alert("hiciste doble click");
} */

/* texto.onmouseover = () => {
  alert("Hola Mundo");
}; */

/* texto.addEventListener("mouseover", () =>{
    alert("Granizo");
}) */

/* texto.onmouseout = () => {
  alert("Sacaste el mouse");
};

texto.addEventListener("mouseout", () => {
  document.write("Prueba del raton");
}); */

/* texto.onkeypress = () => {
  alert("Prueba del teclado");
}; */

let nombre = document.querySelector("#nombre");

/* nombre.onkeydown = (event) => {
  alert("Prueba del teclado" + event.key);
};

nombre.addEventListener("keydown", () =>{
    alert("Prueba del teclado");
}) */

/* nombre.onkeyup = () => {
  alert("Hola Computadora");
};

nombre.addEventListener("keyup", (event) => {
  alert("Se solto la tecla " + event.key);
}); */

/* nombre.addEventListener("contextmenu", () => {
  alert("Prohibido de copiar el menu");
}); */

/* nombre.oncontextmenu = (event) => {
  alert(event.key);
}; */

/* nombre.onclick = (event) => {
  console.table(event);
}; */

/* nombre.addEventListener("click", () => {
  alert("Entrando a React");
});
 */
/* 
window.onload = function(){
  document.write("Apertura de ventana");
} */

/* let p = document.querySelector("p");

/* p.onclick = () => {
  document.write("Prueba de parrafo2");
}; */

/* p.addEventListener("mouseover", () => document.writeln("Prueba de parrafo")); */

let p = document.querySelector("p");

let getTime = () => {
  return new Promise((reject, resolve) => {
    setInterval(() => {
      resolve(new Date().getHours());
    }, 3000);
  });
};

window.onload = async() => {
  p.innerHTML = `<p>${JSON.stringify(await getTime())}</p>`;
};
