# Encriptador de Texto

Una aplicación web simple para encriptar y desencriptar texto usando un algoritmo de sustitución personalizado. La aplicación está diseñada como una PWA (Progressive Web App) y está optimizada tanto para escritorio como para dispositivos móviles. 🚀

## Tabla de Contenidos

- [🚀 Características](#-características)
- [🛠️ Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)
- [🚀 Cómo Ejecutar la Aplicación](#-cómo-ejecutar-la-aplicación)
- [📝 Detalles del Código](#-detalles-del-código)
- [📌 Licencia](#-licencia)

## 🚀 Características

- **Encriptación/Desencriptación de Texto:**
  Convierte el texto ingresado utilizando un diccionario de sustitución único para cada carácter (solo acepta letras minúsculas sin acentos).

- **Interfaz Responsive:**
  Diseño optimizado para escritorio y dispositivos móviles, con posicionamientos absolutos en escritorio y adaptaciones en móviles.

- **Progressive Web App (PWA):**
  Incluye un archivo `site.webmanifest` que permite instalar la aplicación en dispositivos compatibles.

- **Alertas Amigables:**
  Utiliza [SweetAlert](https://sweetalert.js.org/) para mostrar mensajes de error, advertencia y confirmación en la interfaz.

## 🛠️ Tecnologías Utilizadas

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) **HTML5**
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) **CSS3**
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) **JavaScript**
- ![PWA](https://img.shields.io/badge/PWA-0A3871?style=flat&logo=google-chrome&logoColor=white) **Progressive Web App**
- ![SweetAlert](https://img.shields.io/badge/SweetAlert-FF5733?style=flat&logo=javascript&logoColor=white) **SweetAlert**

## 📂 Estructura del Proyecto

```
📦 Encriptador de Texto
├── 📁 img               # Imágenes y favicon.
├── 📄 index.html        # Página principal.
├── 📄 components.css    # Estilos de componentes.
├── 📄 base.css          # Estilos del proyecto.
├── 📄 app.js            # Lógica de encriptación y desencriptación.
├── 📄 README.md         # Documentación del proyect.
└── 📄 site.webmanifest  # Configuración de la app para PWA.
```

## 🚀 Cómo Ejecutar la Aplicación

1. **Clona el repositorio o descarga el proyecto:**

   ```bash
   git clone https://github.com/CriXDZ/Encriptador-de-texto.git

   ```

2. **Abre `index.html`:**
   Puedes abrir el archivo `index.html` directamente en tu navegador para probar la aplicación.

3. **Servidor Local (opcional):**
   Para una mejor experiencia y para probar la funcionalidad PWA, ejecuta un servidor local (por ejemplo, usando [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) o utilizando `http-server` con Node.js).

## 📝 Detalles del Código

### index.html

- Define la estructura básica de la aplicación y carga todos los recursos necesarios (hojas de estilo, scripts, íconos y manifest).
- La estructura incluye tres secciones principales:
  - **Logo:** Ubicado en la esquina superior izquierda en dispositivos móviles.
  - **Área de Encriptación:** Contiene el textarea para ingresar el texto, una sección de términos y botones para encriptar/desencriptar.
  - **Área Encriptada:** Muestra el mensaje resultante junto con una imagen y un botón para copiar el texto.

### app.js

- Contiene la lógica para encriptar y desencriptar el texto usando un diccionario de sustitución personalizado.
- Realiza validación para asegurar que el texto ingresado cumpla con el formato (solo letras minúsculas sin acentos).
- Utiliza la API del portapapeles para copiar el resultado y muestra alertas utilizando SweetAlert.

### base.css

- Define los estilos base, resetea márgenes y paddings, y configura el box model mediante `box-sizing: border-box`.
- Configura el contenedor principal (`.container`) con un fondo de gradiente y dimensiona la aplicación a la altura y ancho del viewport.
- Incluye un media query para ajustar el layout en dispositivos móviles.

### components.css

- Define estilos específicos para cada componente:
  - **Logo:** Estilos para el contenedor y la imagen del logo.
  - **Texto (textarea):** Estilos de posicionamiento, tipografía y fondo.
  - **Términos y Botones:** Alineación, tamaños y estilos de hover para los botones.
  - **Área Encriptada y Mensaje:** Posicionamiento y estilos para mostrar el resultado encriptado/desencriptado.
- Incluye un media query para optimizar la responsividad en dispositivos móviles (ajustando tamaños, posiciones y eliminando efectos hover).

### site.webmanifest

- Proporciona la configuración necesaria para que la aplicación funcione como una PWA.
- Define el nombre, la descripción, los íconos, colores de tema, fondo y orientación.
- Permite que la aplicación se instale en dispositivos móviles con una experiencia nativa.

## 📌 Licencia

Este proyecto es de uso libre. ¡Siéntete libre de modificarlo y adaptarlo a tus necesidades!
