var tarjetas = [
    "1.jpg", "1.jpg", "2.jpg", "2.jpg",
    "3.jpg", "3.jpg", "4.jpg", "4.jpg",
    "5.jpg", "5.jpg", "6.jpg", "6.jpg",
    "7.jpg", "7.jpg", "8.jpg", "8.jpg",
];
var imagenTemporal, esperando = false;
var contador = 0;

function cambiarImagen(imagen,indice){
imagen.src= `${tarjetas[indice]}`;
imagen.removeAttribute("onclick");
if(!esperando) imagenTemporal = imagen;
else{
   if(imagenTemporal.src == imagen.src) { 
      //alert("¡Encontramos un par!");
       setTimeout(function(){desaparecerPar(imagenTemporal, imagen)}, 500);
   }else{          
      //alert("Lo siento, no encontramos un par :(");
      setTimeout(function(){Regresar(imagenTemporal, imagen)}, 500);
   }
}
esperando = !esperando;
}

function Regresar(imagen1,imagen2){
imagen1.src = "llanta.png";
imagen2.src = "llanta.png";
imagen1.setAttribute("onclick", `cambiarImagen(this,${imagen1.id})`);
imagen2.setAttribute("onclick", `cambiarImagen(this,${imagen2.id})`);
}

function desaparecerPar(imagen1, imagen2){
imagen1.style.visibility = "hidden";
imagen2.style.visibility = "hidden";
imagen1.removeAttribute("onclick");
imagen2.removeAttribute("onclick");
contador++;
if(contador!=8){
   document.getElementById("contador").innerHTML = `Pares encontrados: ${contador}`;
} else { 
   document.getElementById("contador").innerHTML = `Pares encontrados: ${contador} ¡Ganaste!`;
}
}

function Revolver(){
var j = 0;
for(let i = 15; i > 0; i--){
   j = Math.floor(Math.random() * (i+1));
   [tarjetas[i], tarjetas[j]] = [tarjetas[j], tarjetas[i]];
}
//document.getElementById("Salida").innerHTML = tarjetas.join(" - ");
}

function Fondo(){
var fondo = Math.floor(Math.random() * 3) + 1;
document.getElementById("tabla").style = `background-image: url("fondo${fondo}.jpg)`;
}
function Reiniciar(){
location.reload()
}