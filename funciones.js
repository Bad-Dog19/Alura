function verificarTexto(text) {
  const regex = /^[a-z\s]+$/;
  if (text.trim() === '') {
    alert('El campo de texto está vacío.');
    return false;
  }
  if (!regex.test(text)) {
    alert('El texto no debe contener caracteres especiales, tildes ni mayúsculas.');
    return false;
  }
  return true;
}

function encriptarTexto(text) {
    text = text.replace(/e/g, 'enter');
    text = text.replace(/i/g, 'imes');
    text = text.replace(/a/g, 'ai');
    text = text.replace(/o/g, 'ober');
    text = text.replace(/u/g, 'ufat');
    return text;
  }
  
  function descriptarTexto(text) {
    text = text.replace(/enter/g, 'e');
    text = text.replace(/imes/g, 'i');
    text = text.replace(/ai/g, 'a');
    text = text.replace(/ober/g, 'o');
    text = text.replace(/ufat/g, 'u');
    return text;
  }
  
  const textArea = document.getElementById('text');
  const encriptacion = document.getElementById('encriptar');
  const descriptacion = document.getElementById('descriptar');
  const copiar = document.getElementById('copiarTexto');
  const resultDiv = document.getElementById('result');

  encriptacion.addEventListener('click', function() {
    const inputText = textArea.value;
    if (verificarTexto(inputText)) {
      const textoEncriptado = encriptarTexto(inputText);
      resultDiv.textContent = textoEncriptado;
    }
  });
  
  descriptacion.addEventListener('click', function() {
    const inputText = textArea.value;
    if (verificarTexto(inputText)) {
      const textoDescriptado = descriptarTexto(inputText);
      resultDiv.textContent = textoDescriptado;
    }
  });

  copiar.addEventListener('click', function() {
    const resultadoTexto = resultDiv.textContent;
    navigator.clipboard.writeText(resultadoTexto)
      .then(function() {
        alert('Texto Copiado');
      })
      .catch(function(error) {
        console.error('Erro Inesperado ' + error);
      });
  });
