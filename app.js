// Seleccionamos los elementos una sola vez para mejorar el rendimiento
const textoInput = document.getElementById("texto");
const tituloMensaje = document.getElementById("titulo-mensaje");
const parrafo = document.getElementById("parrafo");
const muñeco = document.getElementById("muñeco");

// Validación de texto original (solo antes de encriptar)
const validarTexto = (texto) => /^[a-z\s]+$/.test(texto.trim());

// Diccionario de sustitución para encriptar/desencriptar (Mejorado)
const reemplazos = {
  a: "m1x",
  b: "x7q",
  c: "q4w",
  d: "k9z",
  e: "z3a",
  f: "b8s",
  g: "w2f",
  h: "s6d",
  i: "y5g",
  j: "f0h",
  k: "p7j",
  l: "h1k",
  m: "t4l",
  n: "n8m",
  o: "v2n",
  p: "c5o",
  q: "j9p",
  r: "g3q",
  s: "d0r",
  t: "a7s",
  u: "o6t",
  v: "e1u",
  w: "l8v",
  x: "u4w",
  y: "i5x",
  z: "r9y",
  " ": "00z",
};

// Generamos el diccionario inverso para desencriptar
const reemplazosInverso = Object.fromEntries(
  Object.entries(reemplazos).map(([key, value]) => [value, key])
);

// **1️⃣ Encriptación: Sustitución de caracteres**
const encriptarTexto = (texto) =>
  texto.replace(/[a-z\s]/g, (letra) => reemplazos[letra] || letra);

// **2️⃣ Desencriptación: Sustitución inversa con validación previa**
const desencriptarTexto = (texto) => {
  let textoDescifrado = texto;
  let contienePatrones = false; // Bandera para detectar si hay caracteres encriptados

  try {
    for (const [codigo, letra] of Object.entries(reemplazosInverso)) {
      if (texto.includes(codigo)) contienePatrones = true; // Verifica si hay patrones encriptados
      textoDescifrado = textoDescifrado.replaceAll(codigo, letra);
    }
  } catch (error) {
    swal("Error", "Texto inválido para desencriptar", "error");
    return "";
  }

  if (!contienePatrones) {
    swal(
      "Error",
      "El texto ingresado no está encriptado o es inválido",
      "error"
    );
    return "";
  }

  return textoDescifrado;
};

// **3️⃣ Función para actualizar la interfaz**
const actualizarInterfaz = (textoProcesado, titulo, imagen) => {
  textoInput.value = textoProcesado;
  tituloMensaje.textContent = titulo;
  parrafo.textContent = textoProcesado
    ? ""
    : "Ingresa el texto que deseas encriptar o desencriptar";
  muñeco.src = imagen;
};

// **4️⃣ Función principal de encriptación/desencriptación**
const procesarTexto = (accion) => {
  let texto = textoInput.value.trim();

  if (!texto) {
    swal("Ooops!", "Debes ingresar un texto", "warning");
    return;
  }

  if (accion === "encriptar" && !validarTexto(texto)) {
    swal(
      "Ooops!",
      "Solo se permiten letras minúsculas y sin acentos",
      "warning"
    );
    return;
  }

  // Escapamos posibles inyecciones XSS
  texto = texto.replace(/[<>]/g, "");

  const textoProcesado =
    accion === "encriptar" ? encriptarTexto(texto) : desencriptarTexto(texto);
  if (!textoProcesado) return; // Evita actualizar la interfaz si hay error al desencriptar

  const imagen =
    accion === "encriptar" ? "./img/encriptado.png" : "./img/desencriptado.png";
  const titulo =
    accion === "encriptar"
      ? "Texto encriptado con éxito"
      : "Texto desencriptado con éxito";

  actualizarInterfaz(textoProcesado, titulo, imagen);
};

// **5️⃣ Eventos asignados a los botones**
document
  .querySelector(".btn-encriptar")
  .addEventListener("click", () => procesarTexto("encriptar"));
document
  .querySelector(".btn-desencriptar")
  .addEventListener("click", () => procesarTexto("desencriptar"));

document.getElementById("btn-copiar").addEventListener("click", () => {
  const texto = textoInput.value;
  if (!texto) {
    swal("Ooops!", "No hay texto para copiar", "warning");
    return;
  }

  navigator.clipboard
    .writeText(texto)
    .then(() => {
      swal("¡Copiado!", "El texto ha sido copiado al portapapeles", "success");
    })
    .catch(() => {
      swal("Error", "No se pudo copiar el texto", "error");
    });
});
