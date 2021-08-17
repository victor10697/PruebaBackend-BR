function load() {
  var el = document.getElementById("form-sorteo");
  el.addEventListener("click", async (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/vnd.vtex.ds.v10+json");
    myHeaders.append("Content-Type", "application/json");

    //validacion datos
    if(await validarRegistroExistente(document.getElementById("email").value) != false){
      alert('registro existe');
      return;
    }
    var raw = JSON.stringify({
      "nombre": document.getElementById("nombre").value,
      "apellido": document.getElementById("apellido").value,
      "email": document.getElementById("email").value
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://brandliveco.vtexcommercestable.com.br/api/dataentities/PS/documents", requestOptions)
    .then(response => response.json())
    .then(result => {
      // logica respuesta del guardado del registro
    })
    .catch(error => console.log('error', error));
  });
}

document.addEventListener("DOMContentLoaded", load, false);

function validarRegistroExistente(email){
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  return fetch(`http://brandliveco.vtexcommercestable.com.br/api/dataentities/PS/search?_fields=nombre,apellido,email&_where=${encodeURI('email='+email)}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      // respuesta validacion
      return result.length > 0 ? true : false;
    })
    .catch(error => {return false});
}