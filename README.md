# Vite Vanilla SPA

Una aplicación de página única (SPA) construida con Vite y Vanilla JavaScript que demuestra las mejores prácticas de desarrollo frontend moderno.

## Características

### Funcionalidades Implementadas
- ✅ **Enrutamiento funcional** con hash routing
- ✅ **3 páginas navegables**: Inicio, Sobre, Contacto
- ✅ **Navbar reutilizable** con indicador de página activa
- ✅ **Estado global persistente** (contador + localStorage)
- ✅ **Diseño responsive y moderno**
- ✅ **Estructura modular bien organizada**
- ✅ **Configuración para GitHub Pages**

### Tecnologías Utilizadas
- **Vite** - Build tool moderno y rápido
- **Vanilla JavaScript** - ES6+ sin frameworks
- **CSS3** - Variables CSS y diseño responsive
- **GitHub Actions** - CI/CD automático
- **GitHub Pages** - Hosting gratuito

## Estructura del Proyecto

src/
├── components/          # Componentes reutilizables
│   ├── Navbar.js       # Barra de navegación
│   ├── Footer.js       # Pie de página
│   └── Counter.js      # Contador con estado global
├── pages/              # Páginas de la aplicación
│   ├── HomePage.js     # Página de inicio
│   ├── AboutPage.js    # Página sobre nosotros
│   └── ContactPage.js  # Página de contacto
├── router/             # Sistema de enrutamiento
│   └── Router.js       # Enrutador con hash routing
├── state/              # Gestión de estado
│   └── StateManager.js # Estado global con localStorage
├── style.css           # Estilos globales
└── main.js             # Punto de entrada
## Instalación y Desarrollo

### Prerrequisitos
- Node.js >= 18.0.0
- npm >= 8.0.0

### Instalación

# Clonar el repositorio
git clone https://github.com/AnthonySSE/SPA-Vite.git
cd SPA-Vite

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

### Scripts Disponibles

npm run dev      # Servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Vista previa de la build
npm run deploy   # Desplegar a GitHub Pages
npm run clean    # Limpiar archivos temporales

## Arquitectura

### Router
- **Hash-based routing** para compatibilidad con GitHub Pages
- **Lazy loading** de páginas para mejor rendimiento
- **Navegación programática** y manejo de errores 404

### State Management
- **Estado global** reactivo con patrón Observer
- **Persistencia automática** en localStorage
- **Suscripciones** para actualizaciones en tiempo real
- **Funciones de debug** en modo desarrollo

### Componentes
- **Clases ES6** para componentes reutilizables
- **Lifecycle methods** (render, bindEvents, destroy)
- **Event handling** y cleanup automático

## Diseño

### Sistema de Colores
- **Primario**: #2563eb (Azul)
- **Secundario**: #64748b (Gris)
- **Superficie**: #f8fafc (Gris claro)
- **Texto**: #1e293b (Gris oscuro)

### Responsive Design
- **Mobile-first** approach
- **Breakpoints**: 768px, 480px
- **Flexbox** y **CSS Grid** para layouts
- **Animaciones suaves** y transiciones

## Funciones de Debug

En modo desarrollo, tienes acceso a funciones de debug en la consola:
// Acceder al estado global
window.debugState.getState()

// Modificar estado
window.debugState.setState({ counter: 100 })

// Información de almacenamiento
window.debugState.getStorageInfo()

// Exportar/Importar estado
const backup = window.debugState.exportState()
window.debugState.importState(backup)

// Limpiar almacenamiento
window.debugState.clearStorage()

## Criterios de Evaluación Cumplidos

| Criterio | Estado | Descripción |
|----------|--------|-------------|
| **Estructura** | ✅ | Organización correcta de carpetas y archivos |
| **Router** | ✅ | Sistema de enrutamiento funcional con hash |
| **Componentes** | ✅ | Navbar y Footer reutilizables |
| **Páginas** | ✅ | 3 páginas con contenido diferenciado |
| **Estado** | ✅ | Gestión global con persistencia |
| **Estilos** | ✅ | CSS responsive y moderno |
| **GitHub Pages** | ✅ | Configuración completa para despliegue |
- [GitHub Pages](https://pages.github.com/) por el hosting gratuito
---

**¡Hecho con ❤️ y Vanilla JavaScript!**
