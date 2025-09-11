import { HomePage } from "../pages/HomePage.js"
import { AboutPage } from "../pages/AboutPage.js"
import { ContactPage } from "../pages/ContactPage.js"

export class Router {
  constructor() {
    this.routes = {
      "": HomePage,
      inicio: HomePage,
      sobre: AboutPage,
      contacto: ContactPage,
    }

    this.currentPage = null
  }

  init() {
    // Escuchar cambios en el hash
    window.addEventListener("hashchange", () => this.handleRoute())

    // Manejar la ruta inicial
    this.handleRoute()
  }

  handleRoute() {
    // Obtener la ruta del hash (sin el #)
    const hash = window.location.hash.slice(1)

    // Encontrar la página correspondiente
    const PageClass = this.routes[hash] || this.routes[""]

    // Limpiar la página anterior
    if (this.currentPage && this.currentPage.cleanup) {
      this.currentPage.cleanup()
    }

    // Crear y renderizar la nueva página
    this.currentPage = new PageClass()
    this.currentPage.render()

    // Actualizar navbar activo
    this.updateActiveNav(hash || "inicio")
  }

  updateActiveNav(currentRoute) {
    // Remover clase activa de todos los enlaces
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active")
    })

    // Agregar clase activa al enlace actual
    const activeLink = document.querySelector(`[data-route="${currentRoute}"]`)
    if (activeLink) {
      activeLink.classList.add("active")
    }
  }

  navigateTo(route) {
    window.location.hash = route
  }
}
