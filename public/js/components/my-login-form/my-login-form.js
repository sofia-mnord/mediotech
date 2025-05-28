import { htmlTemplate } from './my-login-form.html.js'
import { cssTemplate } from './my-login-form.css.js'
import { login } from '../../firebase-init.js'

customElements.define('my-login-form',
  /**
   * Represents a my-login-form element.
   */
  class extends HTMLElement {
    /**
     * Form element.
     *
     * @type {HTMLFormElement}
     */
    #form
    /**
     * p element.
     *
     * @type {HTMLFormElement}
     */
    #errorMessage

    /**
     * AbortController
     *
     * @type {AbortController}
     */
    #abortController

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true))
      this.shadowRoot.appendChild(htmlTemplate.content.cloneNode(true))

      this.#form = this.shadowRoot.querySelector('form')
      this.#errorMessage = this.shadowRoot.querySelector('#error')
      this.#abortController = new AbortController()
    }

    /**
     * Called when the element is inserted in to the DOM.
     */
    connectedCallback () {
      this.#form.addEventListener('submit', this.#onSubmit.bind(this), {
        signal: this.#abortController.signal
      })
    }

    /**
     * Called when the element is removed from the DOM.
     */
    disconnectedCallback () {
      this.#abortController.abort()
    }

    /**
     * Submits the login form.
     *
     * @param {event} event - The submit event.
     */
    async #onSubmit (event) {
      event.preventDefault()
      this.#errorMessage.textContent = ''

      const email = this.#form.userName.value.trim()
      const password = this.#form.password.value.trim()

      try {
        await login(email, password)
        window.location.href = 'index.html'
      } catch (error) {
        if (error.code === 'auth/invalid-credential') {
          this.#errorMessage.textContent = 'Felaktig e-postadress eller lösenord.'
        } else {
          this.#errorMessage.textContent = 'Något gick fel. Försök igen.'
        }
      }
    }
  }
)
