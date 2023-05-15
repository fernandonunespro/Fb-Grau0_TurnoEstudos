/* Programa para saber o Turno correpondente */

function studyTi(event){
  event.preventDefault();

  let turno = document.getElementById("turno").value;
  let resultado = document.getElementById("resultado");

  if (turno == "M" || turno == "matutino") {
    resultado.value = "Bom dia";
  }
  else if (turno == "V" || turno == "vespertino") {
    resultado.value = "Boa tarde";
  }
  else if (turno == "N" || turno == "noturno") {
    resultado.value = "Boa noite";
  }
  else{
    resultado.value = "Valor Invalido";
  }
}

