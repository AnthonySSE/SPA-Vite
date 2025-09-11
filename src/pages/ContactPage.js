export class ContactPage {
  constructor() {
    this.container = document.getElementById("main-content")
  }

  render() {
    this.container.innerHTML = `
      <div class="page contact-page">
        <div class="container">
          <div class="page-header">
            <h1>Contacto</h1>
            <p class="page-subtitle">¿Tienes alguna pregunta? ¡Nos encantaría escucharte!</p>
          </div>
          
          <div class="contact-grid">
            <div class="contact-form-section">
              <form class="contact-form" id="contactForm">
                <div class="form-group">
                  <label for="name">Nombre completo</label>
                  <input type="text" id="name" name="name" required>
                </div>
                
                <div class="form-group">
                  <label for="email">Correo electrónico</label>
                  <input type="email" id="email" name="email" required>
                </div>
                
                <div class="form-group">
                  <label for="subject">Asunto</label>
                  <select id="subject" name="subject" required>
                    <option value="">Selecciona un asunto</option>
                    <option value="general">Consulta general</option>
                    <option value="technical">Soporte técnico</option>
                    <option value="business">Propuesta de negocio</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label for="message">Mensaje</label>
                  <textarea id="message" name="message" rows="5" required placeholder="Escribe tu mensaje aquí..."></textarea>
                </div>
                
                <button type="submit" class="btn btn-primary btn-full">Enviar mensaje</button>
              </form>
            </div>
            
            <div class="contact-info-section">
              <div class="contact-info">
                <h3>Información de contacto</h3>
                
                <div class="contact-item">
                  <div class="contact-icon">📧</div>
                  <div class="contact-details">
                    <h4>Email</h4>
                    <p><a href="mailto:anthonyasse01@gmail.com">anthonyasse01@gmail.com</a></p>
                  </div>
                </div>
                
                <div class="contact-item">
                  <div class="contact-icon">📱</div>
                  <div class="contact-details">
                    <h4>Teléfono</h4>
                    <p>+1 809-123-4567</p>
                  </div>
                </div>
                
                <div class="contact-item">
                  <div class="contact-icon">📍</div>
                  <div class="contact-details">
                    <h4>Dirección</h4>
                    <p>Calle Ejemplo 123<br>SDE, República Dominicana</p>
                  </div>
                </div>
                
                <div class="contact-item">
                  <div class="contact-icon">🕒</div>
                  <div class="contact-details">
                    <h4>Horario</h4>
                    <p>Lunes a Viernes<br>8:00 a.m. - 04:00 p.m.</p>
                  </div>
                </div>
              </div>
              
              <div class="social-links">
                <h3>Síguenos</h3>
                <div class="social-grid">
                  <a href="https://x.com/" target="_blank" class="social-link">
                    <span class="social-icon"><img src="https://images.icon-icons.com/4029/PNG/512/twitter_x_new_logo_x_rounded_icon_256078.png" alt="X" width="48" height="36"></span>
                    <span class="social-text">X</span>
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" class="social-link">
                    <span class="social-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="Facebook" width="36" height="36"></span>
                    <span class="social-text">Facebook</span>
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" class="social-link">
                    <span class="social-icon"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="LinkedIn" width="36" height="36"></span>
                    <span class="social-text">LinkedIn</span>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" class="social-link">
                    <span class="social-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" width="36" height="36"></span>
                    <span class="social-text">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `

    this.setupForm()
  }

  setupForm() {
    const form = this.container.querySelector("#contactForm")

    form.addEventListener("submit", (e) => {
      e.preventDefault()

      const formData = new FormData(form)
      const data = Object.fromEntries(formData)

      // Simular envío del formulario
      this.showSuccessMessage()
      form.reset()
    })
  }

  showSuccessMessage() {
    const existingMessage = this.container.querySelector(".success-message")
    if (existingMessage) {
      existingMessage.remove()
    }

    const message = document.createElement("div")
    message.className = "success-message"
    message.innerHTML = `
      <div class="alert alert-success">
        <strong>¡Mensaje enviado!</strong> Gracias por contactarnos. Te responderemos pronto.
      </div>
    `

    const form = this.container.querySelector(".contact-form")
    form.parentNode.insertBefore(message, form)

    // Remover mensaje después de 5 segundos
    setTimeout(() => {
      message.remove()
    }, 5000)
  }

  cleanup() {
    // Cleanup si es necesario
  }
}
