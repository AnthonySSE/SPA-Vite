import { stateManager } from "../state/StateManager.js"

export class HomePage {
  constructor() {
    this.container = document.getElementById("main-content")
    this.unsubscribe = null
  }

  render() {
    const state = stateManager.getState()

    this.container.innerHTML = `
      <div class="page home-page">
        <div class="hero-section">
          <div class="hero-content">
            <h1 class="hero-title">Bienvenido a Mi App</h1>
            <p class="hero-subtitle">Una aplicación moderna construida con Vite y Vanilla JavaScript</p>
            <div class="hero-actions">
              <a href="#sobre" class="btn btn-primary">Conocer más</a>
              <a href="#contacto" class="btn btn-secondary">Contactar</a>
            </div>
          </div>
        </div>
        
        <div class="features-section">
          <div class="container">
            <h2>Características</h2>
            <div class="features-grid">
              <div class="feature-card">
                <div class="feature-icon">🚀</div>
                <h3>Rápido</h3>
                <p>Construido con Vite para un desarrollo ultrarrápido</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">📱</div>
                <h3>Responsive</h3>
                <p>Diseño adaptable a todos los dispositivos</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">⚡</div>
                <h3>Moderno</h3>
                <p>JavaScript ES6+ y arquitectura modular</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="counter-section">
          <div class="container">
            <div class="counter-card">
              <h3>Contador Global</h3>
              <div class="counter-display">
                <span class="counter-value">${state.counter}</span>
              </div>
              <div class="counter-controls">
                <button class="btn btn-outline" id="decrement">-</button>
                <button class="btn btn-outline" id="reset">Reset</button>
                <button class="btn btn-outline" id="increment">+</button>
              </div>
              <p class="counter-info">Este contador se mantiene entre páginas y se guarda en localStorage</p>
            </div>
          </div>
        </div>
      </div>
    `

    this.setupEventListeners()
    this.subscribeToState()
  }

  setupEventListeners() {
    const incrementBtn = this.container.querySelector("#increment")
    const decrementBtn = this.container.querySelector("#decrement")
    const resetBtn = this.container.querySelector("#reset")

    incrementBtn?.addEventListener("click", () => stateManager.incrementCounter())
    decrementBtn?.addEventListener("click", () => stateManager.decrementCounter())
    resetBtn?.addEventListener("click", () => stateManager.resetCounter())
  }

  subscribeToState() {
    this.unsubscribe = stateManager.subscribe((newState) => {
      const counterValue = this.container.querySelector(".counter-value")
      if (counterValue) {
        counterValue.textContent = newState.counter
      }
    })
  }

  cleanup() {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }
}
