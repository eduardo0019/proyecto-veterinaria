# 🐾 PetHealth - Sistema de Gestión Veterinaria

Solución web desarrollada en Angular para digitalizar y automatizar el flujo de atención clínica: registro de pacientes (mascotas), agenda interactiva de citas médicas y consulta de historias clínicas.

🌐 **Demo en vivo:** [https://eduardo0019.github.io/proyecto-veterinaria/](https://eduardo0019.github.io/proyecto-veterinaria/)

---

## 🛠️ Tecnologías Utilizadas

- **Framework:** Angular 17+
- **Lenguaje:** TypeScript, HTML5, CSS3
- **Control de versiones:** Git & GitHub
- **Alojamiento y Despliegue:** GitHub Pages (`angular-cli-ghpages`)

---

## 📋 Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de contar con el siguiente software instalado en tu equipo:

- [Node.js](https://nodejs.org/) (versión 18.x o superior)
- [npm](https://www.npmjs.com/) (gestor de paquetes incluido con Node.js)
- [Angular CLI](https://angular.io/cli) (opcional a nivel global):
  `npm install -g @angular/cli`

---

## 🚀 Instalación y Configuración

1. Clonar el repositorio:
   git clone https://github.com/eduardo0019/proyecto-veterinaria.git
   cd proyecto-veterinaria

2. Instalar dependencias:
   npm install

---

## 💻 Ejecución en Desarrollo

1. Iniciar el servidor local de desarrollo:
   npm start
   (o bien: ng serve)

2. Acceder a la plataforma:
   Abre un navegador web e ingresa a:
   http://localhost:4200/

*El servidor incluye recarga en caliente (hot reload); cualquier cambio guardado en el código se reflejará de inmediato en pantalla.*

---

## 🧪 Ejecución de Pruebas

Para ejecutar las pruebas unitarias automatizadas con Jasmine y Karma:

npm test
(o bien: ng test)

Este comando compila las pruebas y abre una ventana del navegador reportando la cobertura y el estado de los componentes, directivas, pipes y servicios del proyecto.

---

## 📦 Compilación y Despliegue

1. Build de Producción:
   Para generar los archivos estáticos optimizados listos para hosting (en Windows/Git Bash):
   MSYS_NO_PATHCONV=1 npx ng build --base-href /proyecto-veterinaria/

   Los artefactos de distribución se generarán en la ruta:
   dist/proyecto-veterinaria/browser/

2. Despliegue en GitHub Pages:
   Para sincronizar y publicar los archivos generados en la rama gh-pages:
   npx angular-cli-ghpages --dir=dist/proyecto-veterinaria/browser

---

## 📁 Estructura del Proyecto

src/
├── app/
│   ├── core/         # Servicios globales del sistema (StorageService, persistencia)
│   ├── modules/
│   │   ├── citas/     # Módulo de agendamiento y gestión de citas médicas
│   │   ├── historial/ # Módulo de consulta y registro de historias clínicas
│   │   └── mascotas/  # Módulo de registro y listado de mascotas/pacientes
│   ├── pages/        # Componentes de páginas principales y navegación
│   └── shared/       # Elementos compartidos (pipes, directivas, módulos comunes)
├── public/           # Recursos estáticos (imágenes, logos e iconos)
└── styles.css        # Hoja de estilos global de la aplicación