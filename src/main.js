import "./styles/main.css"
import { Router } from "./router/Router.js"
import { StateManager } from "./state/StateManager.js"
import { Navbar } from "./components/Navbar.js"
import { Footer } from "./components/Footer.js"

// Inicializar el estado global
const state = new StateManager()

// Inicializar componentes
const navbar = new Navbar()
const footer = new Footer()

// Inicializar router
const router = new Router()

// Renderizar componentes fijos
navbar.render()
footer.render()

// Iniciar la aplicación
router.init()

// Exponer estado globalmente para debugging
window.appState = state
