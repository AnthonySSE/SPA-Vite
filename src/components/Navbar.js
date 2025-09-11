export class Navbar {
  constructor() {
    this.container = document.getElementById("navbar")
  }

  render() {
    this.container.innerHTML = `
      <nav class="navbar">
        <div class="nav-container">
          <div class="nav-brand">
            <h2>Mi App</h2>
          </div>
          <ul class="nav-menu">
            <li class="nav-item">
              <a href="#inicio" class="nav-link" data-route="inicio">Inicio</a>
            </li>
            <li class="nav-item">
              <a href="#sobre" class="nav-link" data-route="sobre">Sobre</a>
            </li>
            <li class="nav-item">
              <a href="#contacto" class="nav-link" data-route="contacto">Contacto</a>
            </li>
          </ul>
          <div class="nav-toggle">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </div>
      </nav>
    `

    this.setupMobileMenu()
  }

  setupMobileMenu() {
    const toggle = this.container.querySelector(".nav-toggle")
    const menu = this.container.querySelector(".nav-menu")

    toggle.addEventListener("click", () => {
      menu.classList.toggle("active")
      toggle.classList.toggle("active")
    })

    // Cerrar menú al hacer click en un enlace
    menu.addEventListener("click", (e) => {
      if (e.target.classList.contains("nav-link")) {
        menu.classList.remove("active")
        toggle.classList.remove("active")
      }
    })
  }
}
