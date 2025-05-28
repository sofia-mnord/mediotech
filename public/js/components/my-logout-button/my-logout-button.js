import { htmlTemplate } from './my-logout-button.html.js'
import { cssTemplate } from './my-logout-button.css.js'
import { logout } from '../../firebase-init.js'

customElements.define('my-logout-button',
  /**
   * Represents a my-logout-button element.
   */
  class extends HTMLElement {
    /**
     * Button element.
     *
     * @type {HTMLElement}
     */
    #button
    /**
     * AbortController.
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

      this.#button = this.shadowRoot.querySelector('button')
      this.#abortController = new AbortController()
    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback () {
      this.#button.addEventListener('click', this.#logoutUser.bind(this),
        { signal: this.#abortController.signal })
    }

    /**
     * Called after the element has been removed from the DOM.
     */
    disconnectedCallback () {
      this.#abortController.abort()
    }

    /**
     * Attempts to log out the user.
     */
    async #logoutUser () {
      try {
        await logout()
        window.location.href = 'login.html'
      } catch (error) {
        console.error('Utloggning misslyckades', error.message)
      }
    }
  }
)
