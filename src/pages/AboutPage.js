import { stateManager } from "../state/StateManager.js"

export class AboutPage {
  constructor() {
    this.container = document.getElementById("main-content")
  }

  render() {
    const state = stateManager.getState()

    this.container.innerHTML = `
      <div class="page about-page">
        <div class="container">
          <div class="page-header">
            <h1>Sobre Nosotros</h1>
            <p class="page-subtitle">Conoce más sobre este proyecto y las tecnologías utilizadas</p>
          </div>
          
          <div class="content-grid">
            <div class="content-main">
              <section class="content-section">
                <h2>¿Qué es esta aplicación?</h2>
                <p>Esta es una aplicación de página única (SPA) construida completamente con <strong>Vite</strong> y <strong>Vanilla JavaScript</strong>. Demuestra cómo crear una aplicación moderna y funcional sin frameworks pesados.</p>
                
                <h3>Características implementadas:</h3>
                <ul>
                  <li>✅ Enrutamiento funcional con hash routing</li>
                  <li>✅ Navegación entre 3 páginas diferentes</li>
                  <li>✅ Navbar reutilizable con indicador de página activa</li>
                  <li>✅ Estado global persistente con localStorage</li>
                  <li>✅ Diseño responsive y moderno</li>
                  <li>✅ Estructura modular bien organizada</li>
                </ul>
              </section>
              
              <section class="content-section">
                <h2>Tecnologías Utilizadas</h2>
                <div class="tech-grid">
                  <div class="tech-item">
                    <h4>Vite</h4>
                    <p>Build tool moderno y rápido para desarrollo frontend</p>
                  </div>
                  <div class="tech-item">
                    <h4>Vanilla JavaScript</h4>
                    <p>JavaScript puro con ES6+ modules y clases</p>
                  </div>
                  <div class="tech-item">
                    <h4>CSS3</h4>
                    <p>Estilos modernos con Flexbox, Grid y variables CSS</p>
                  </div>
                  <div class="tech-item">
                    <h4>HTML5</h4>
                    <p>Marcado semántico y accesible</p>
                  </div>
                </div>
              </section>
            </div>
            
            <div class="content-sidebar">
              <div class="stats-card">
                <h3>Estadísticas</h3>
                <div class="stat-item">
                  <span class="stat-label">Contador actual:</span>
                  <span class="stat-value">${state.counter}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Páginas:</span>
                  <span class="stat-value">3</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Componentes:</span>
                  <span class="stat-value">5</span>
                </div>
              </div>
              
              <div class="info-card">
                <h3>Arquitectura</h3>
                <p>La aplicación sigue una arquitectura modular con separación clara de responsabilidades:</p>
                <ul>
                  <li><strong>Router:</strong> Manejo de rutas</li>
                  <li><strong>State:</strong> Gestión de estado global</li>
                  <li><strong>Components:</strong> Componentes reutilizables</li>
                  <li><strong>Pages:</strong> Páginas de la aplicación</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  cleanup() {
    // Cleanup si es necesario
  }
}
