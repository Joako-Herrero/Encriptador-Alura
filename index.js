function getTextEncriptar(){
	let str = document.getElementById("inputText");
	let string = str.value.toLowerCase();
	encriptador(string);
}

function encriptador(string){

	let newString = string.split('a').join('ai').split('e').join('enter').split('i').join('imes').split('o').join('ober').split('u').join('ufat').split('aimes').join('ai');
	document.getElementById("output").style.display = "none";
	document.getElementById("resultado").style.display = "inline";
	return document.getElementById("resultado").innerHTML = newString;

}



function getTextDesencriptar(){
	let str = document.getElementById("inputText");
	let string = str.value.toLowerCase();
	desencriptador(string);
}

function desencriptador(string){
	let newString = string.split('ai').join('a').split('enter').join('e').split('imes').join('i').split('ober').join('o').split('ufat').join('u');
	document.getElementById("output").style.display = "none";
	document.getElementById("resultado").style.display = "inline";
	return document.getElementById("resultado").innerHTML = newString;

}


function copiar(){
	let textoResuelto = document.getElementById(resultado);
	textoResuelto.select();
	textoResuelto.setSelectionRange(0, 9999);

	document.execCommand('copy');

	console.log("funciona" + textoResuelto);
}