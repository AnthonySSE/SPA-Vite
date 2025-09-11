export class StateManager {
  constructor() {
    this.state = {
      counter: this.loadFromStorage("counter", 0),
      theme: this.loadFromStorage("theme", "light"),
    }

    this.subscribers = []
  }

  // Cargar datos del localStorage
  loadFromStorage(key, defaultValue) {
    try {
      const stored = localStorage.getItem(`app_${key}`)
      return stored ? JSON.parse(stored) : defaultValue
    } catch (error) {
      console.warn(`Error loading ${key} from storage:`, error)
      return defaultValue
    }
  }

  // Guardar en localStorage
  saveToStorage(key, value) {
    try {
      localStorage.setItem(`app_${key}`, JSON.stringify(value))
    } catch (error) {
      console.warn(`Error saving ${key} to storage:`, error)
    }
  }

  // Obtener estado
  getState() {
    return { ...this.state }
  }

  // Actualizar estado
  setState(updates) {
    const oldState = { ...this.state }
    this.state = { ...this.state, ...updates }

    // Guardar cambios en localStorage
    Object.keys(updates).forEach((key) => {
      this.saveToStorage(key, this.state[key])
    })

    // Notificar a los suscriptores
    this.subscribers.forEach((callback) => {
      callback(this.state, oldState)
    })
  }

  // Suscribirse a cambios de estado
  subscribe(callback) {
    this.subscribers.push(callback)

    // Retornar función para desuscribirse
    return () => {
      const index = this.subscribers.indexOf(callback)
      if (index > -1) {
        this.subscribers.splice(index, 1)
      }
    }
  }

  // Métodos específicos para el contador
  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 })
  }

  decrementCounter() {
    this.setState({ counter: this.state.counter - 1 })
  }

  resetCounter() {
    this.setState({ counter: 0 })
  }
}

// Instancia singleton
export const stateManager = new StateManager()
