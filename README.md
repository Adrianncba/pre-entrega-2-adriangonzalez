E-Commerce con ReactJS - Entrega Final
Este proyecto corresponde a la entrega final del curso de React JS de Coderhouse. La aplicación es un e-commerce donde los usuarios pueden explorar productos electrónicos, agregar productos al carrito de compras y realizar la compra. La app utiliza Firebase como base de datos y autenticación.

Tecnologías utilizadas
ReactJS: Framework para la interfaz de usuario.
Firebase: Utilizado para la base de datos en tiempo real, autenticación y almacenamiento de productos.
React Router: Para manejar las rutas dentro de la aplicación.
CSS: Para los estilos básicos de la aplicación.
Características principales
Catálogo de productos: Los usuarios pueden ver una lista de productos electrónicos.
Carrito de compras: Los usuarios pueden agregar productos al carrito, modificar la cantidad o eliminar productos.
Autenticación: Los usuarios pueden registrarse e iniciar sesión para gestionar su carrito de compras.
Navegación: Se implementa navegación entre páginas utilizando React Router.
Persistencia en Firebase: Los datos de los productos y el estado del carrito se almacenan en Firebase para mantener la información sincronizada.
Instalación
Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clonar el repositorio
Clona el repositorio en tu máquina:

bash
Copiar
git clone https://github.com/Adrianncba/pre-entrega-2-adriangonzalez.git
cd pre-entrega-2-adriangonzalez
2. Instalar dependencias
Instala las dependencias del proyecto utilizando npm:

bash
Copiar
npm install
3. Configurar Firebase
Crea un proyecto en Firebase, y luego agrega las credenciales de Firebase a tu proyecto.

Crea un archivo .env en la raíz del proyecto.
Añade las siguientes variables de entorno con los valores de tu configuración de Firebase:
env
Copiar
REACT_APP_FIREBASE_API_KEY=tu_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=tu_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=tu_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=tu_app_id
4. Ejecutar el proyecto
Para ejecutar la aplicación en tu entorno local, utiliza:

bash
Copiar
npm run dev
La aplicación estará disponible en:

arduino
Copiar
http://localhost:5173/
Estructura del Proyecto
bash
Copiar
/public
  index.html               # Archivo HTML principal
/src
  /components             # Componentes reutilizables (Producto, Carrito, etc.)
  /firebase               # Configuración y lógica de Firebase
  /pages                  # Páginas de la aplicación (Inicio, Carrito, Login)
  /styles                 # Estilos CSS de la aplicación
  App.js                  # Componente principal de la aplicación
  index.js                # Punto de entrada
/package.json             # Dependencias y configuración del proyecto
Contribución
Si deseas contribuir a este proyecto:

Haz un fork del repositorio.
Crea una nueva rama: git checkout -b mi-nueva-caracteristica.
Realiza tus cambios y haz commit.
Haz push a tu rama: git push origin mi-nueva-caracteristica.
Abre un pull request con tus cambios.
Licencia
Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo LICENSE.

Cómo pegar el README
Copia el contenido del README que te proporcioné.
Abre tu proyecto en tu editor de código.
En la raíz del proyecto, crea un archivo nuevo llamado README.md.
Pega el contenido del README copiado en el archivo README.md recién creado.
Guarda el archivo.