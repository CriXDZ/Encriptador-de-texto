function validarTexto(texto) {
  return /^[a-z\s]+$/.test(texto);
}

function encriptarTexto(texto) {
  return texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
}

function desencriptarTexto(texto) {
  return texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
}

function actualizarInterfaz(textoCifrado, titulo, imagen) {
  document.getElementById("texto").value = textoCifrado;
  document.getElementById("titulo-mensaje").textContent = titulo;
  document.getElementById("parrafo").textContent = "";
  document.getElementById("muñeco").src = imagen;
}

function encriptar() {
  let texto = document.getElementById("texto").value;

  if (!validarTexto(texto)) {
    swal(
      "Ooops!",
      "Solo se permiten letras minúsculas y sin acentos",
      "warning"
    );
    return;
  }

  if (texto.length != 0) {
    let textoCifrado = encriptarTexto(texto);
    actualizarInterfaz(
      textoCifrado,
      "Texto encriptado con éxito",
      "./img/encriptado.jpg"
    );
  } else {
    actualizarInterfaz("", "Ningún mensaje fue encontrado", "./img/muñeco.png");
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;

  if (texto.length != 0) {
    let textoCifrado = desencriptarTexto(texto);
    actualizarInterfaz(
      textoCifrado,
      "Texto desencriptado con éxito",
      "./img/desencriptado.jpg"
    );
  } else {
    actualizarInterfaz("", "Ningún mensaje fue encontrado", "./img/muñeco.png");
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function copiarTexto() {
  let texto = document.getElementById("texto").value;
  if (texto.length != 0) {
    navigator.clipboard
      .writeText(texto)
      .then(() => {
        swal(
          "¡Copiado!",
          "El texto ha sido copiado al portapapeles",
          "success"
        );
      })
      .catch(() => {
        swal("Error", "No se pudo copiar el texto", "error");
      });
  } else {
    swal("Ooops!", "No hay texto para copiar", "warning");
  }
}
