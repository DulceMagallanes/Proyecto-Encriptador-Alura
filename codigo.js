
let encriptarBoton = document.getElementById("encriptar-boton");
let desencriptarBoton = document.getElementById("desencriptar-boton");
let copiarBoton = document.getElementById("copiar-boton");
let textoEntrada = document.getElementById("textarea-entrada-texto");
let textoSalida = document.getElementById("textarea-salida-texto");
let contenedorSecundario = document.querySelector(".salida");

//Habilitar Elemento
function onBotones() {
    encriptarBoton.disabled = false;
    botonDesencriptar.disabled = false;
}
//Habilitar Elemento
function onCopiado() {
    copiarBoton.disabled = false;
}
//Cambia al textarea (salida-texto-textarea)(Texto Encriptado-Desencriptado)
function segundaVista() {
    if(textoEntrada.value !== ""){
        contenedorSecundario.classList.remove("texto-estructura")
    }
    textoEntrada.focus();
}
//Copiar
function copiartexto() {
    if (textoSalida.value != "") {
        navigator.clipboard.writeText(textoSalida.value);
        alertas("Mensaje copiado");
    }
    else {
        alertas("Nada que copiar");
    }
}
//Mensaje de alerta 
function alertas(mensaje) {
    var alert = document.getElementById('mensaje-alerta');
    alert.innerHTML = mensaje;
    alert.style.display = 'block';
    setTimeout(function() {//Tiempo
      alert.style.display = 'none';
    }, 2000); 
}
//Encripta
function encriptarTexto() {
  if (textoEntrada.value != "") {
    
    let verificarLetras = /^[a-z\s]+$/;

    if (verificarLetras.test(textoEntrada.value)) {
      let encriptar = textoEntrada.value;
      encriptar = encriptar.replaceAll(/e/gim, "enter");
      encriptar = encriptar.replaceAll(/i/gim, "imes");
      encriptar = encriptar.replaceAll(/a/gim, "ai");
      encriptar = encriptar.replaceAll(/o/gim, "ober");
      encriptar = encriptar.replaceAll(/u/gim, "ufat");
      textoSalida.innerHTML = encriptar;
      textoSalida.value = encriptar;
      segundaVista();
    } else {
      alertas("Lo sentimos. Para encriptar un texto válido, solo letras minúsculas y espacios.");
      
    }
  } else {
    alertas("Escriba un texto, para encriptar.");
  
  }
}
//Desencripta
function desencriptartexto() {
    if (textoEntrada.value != "") {

        let verificarLetras = /^[a-z\s]+$/;

        if (verificarLetras.test(textoEntrada.value)) {
        let desencriptar = textoEntrada.value;
        desencriptar = desencriptar.replaceAll(/enter/gim, "e");
        desencriptar = desencriptar.replaceAll(/imes/gim, "i");
        desencriptar = desencriptar.replaceAll(/ai/gim, "a");
        desencriptar = desencriptar.replaceAll(/ober/gim, "o");
        desencriptar = desencriptar.replaceAll(/ufat/gim, "u");
        textoSalida.innerHTML = desencriptar;
        textoSalida.value = desencriptar;
        segundaVista();
    }
    else {
        alertas("Lo sentimos. Para desencriptar un texto válido, solo letras minúsculas y espacios.");
      
    }
}else {
    alertas("Escriba un texto, para desencriptar.");
  
  }
}


encriptarBoton.onclick = encriptarTexto;
desencriptarBoton.onclick = desencriptartexto;
copiarBoton.onclick = copiartexto;
textoEntrada.onclick = onBotones;


  