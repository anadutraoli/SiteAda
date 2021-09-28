document.getElementById("botaoenviar").addEventListener("click", validaformulario)

function validaformulario(){
  if(document.getElementById("nome").value != "" && 
    document.getElementById("email").value != "" && 
    document.getElementById("telefone"). value != ""){
      alert("Prontinho! Você recebrá as novidades por e-mail")
  }else{
      alert("Por favor, preencha os campos com seu nome e email!")
  }
}




