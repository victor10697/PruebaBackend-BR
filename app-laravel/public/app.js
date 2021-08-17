function load() {
  var el = document.getElementById("form-sorteo");
  el.addEventListener("click", (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "nombre": document.getElementById("nombre").value,
      "apellido": document.getElementById("apellido").value,
      "email": document.getElementById("email").value
    });

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://brandliveco.vtexcommercestable.com.br/api/dataentities/PS/documents", requestOptions)
    .then(response => response.json())
    .then(result => {
      // logica respuesta del guardado del registro
    })
    .catch(error => console.log('error', error));
  });
}

document.addEventListener("DOMContentLoaded", load, false);