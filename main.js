//Con esta funcion aparecerá la navegacion cuando se pulse el boton xd 
function despliegaMenu(){
	var cinta = document.querySelector(".navigation");
	if (cinta.style.display === "none"){
		cinta.style.display = "block"; 
	}else{
		cinta.style.display = "none"; 
	}
}
//LOS BOTONES SELECTORES DEL SLIDER
function muestraImagen1(){
	//se obtienen las imagenes y se almacenan en una variable
    let img1 = document.getElementById("img1");
	let img2 = document.getElementById("img2");
	let img3 = document.getElementById("img3"); 
//imagen que se pide es img1 asi que oculta las otras y muestra img1
    img2.style.display = "none"; 
    img3.style.display = "none";
	img1.style.display = "block"; 
}
function muestraImagen2(){
	let img1 = document.getElementById("img1");
	let img2 = document.getElementById("img2");
	let img3 = document.getElementById("img3"); 

	img1.style.display = "none"; 
	img3.style.display = "none"; 
	img2.style.display = "block"; 
}
function muestraImagen3(){
	/*let img1 = document.getElementById("img1"); 
	let img2 = document.getElementById("img2");
	let img3 = document.getElementById("img3"); */
	let fondo = document.querySelctor(".blur-lg-12");

	/*img1.style.display = "none"; 
	img2.style.display = "none";
	img3.style.display = "block"; */
	fondo.style.backgroundImage = "url('img03.jpg')"; 
}

//BOTONES DEL ABOUT

function showRed(){
	var cuadritoRojo = document.getElementById("cuadrito-rojo"); 
	if(cuadritoRojo.style.visibility == "hidden"){
		cuadritoRojo.style.visibility = "visible"; 
	} else{
		cuadritoRojo.style.visibility = "hidden"; 
	}
}
function showGreen(){
	var cuadritoVerde = document.getElementById("cuadrito-verde"); 
	if(cuadritoVerde.style.visibility == "hidden"){
		cuadritoVerde.style.visibility = "visible"; 
	}else{
		cuadritoVerde.style.visibility = "hidden"; 
	}
}
function showWhite(){
	var cuadritoBlanco = document.getElementById("cuadrito-blanco");
	if(cuadritoBlanco.style.visibility == "hidden"){
		cuadritoBlanco.style.visibility = "visible"; 
	}else{
		cuadritoBlanco.style.visibility = "hidden"; 
	}
}