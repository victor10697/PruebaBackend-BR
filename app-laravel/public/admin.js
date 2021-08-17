
function listadoParticipantes(){
	var myHeaders = new Headers();
	myHeaders.append("Cookie", "");

	var requestOptions = {
	  method: 'POST',
	  headers: myHeaders,
	  redirect: 'follow'
	};

	fetch("http://brandliveco.vtexcommercestable.com.br/api/dataentities/PS/search?_fields=nombre,apellido,email", requestOptions)
	  .then(response => response.text())
	  .then(result => {
	  	// logica para pintar tabla de Participantes

	  })
	  .catch(error => console.log('error', error));
}

function load() {
 listadoParticipantes();
}

document.addEventListener("DOMContentLoaded", load, false);