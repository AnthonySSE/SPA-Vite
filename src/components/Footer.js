export class Footer {
  constructor() {
    this.container = document.getElementById("footer")
  }

  render() {
    this.container.innerHTML = `
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>Mi App</h3>
              <p>Una aplicación moderna construida con Vite y Vanilla JavaScript.</p>
            </div>
            <div class="footer-section">
              <h4>Enlaces</h4>
              <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>Tecnologías</h4>
              <ul>
                <li>Vite</li>
                <li>Vanilla JavaScript</li>
                <li>CSS3</li>
                <li>HTML5</li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2025 Mi App. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    `
  }
}
