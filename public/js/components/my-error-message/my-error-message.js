import { cssTemplate } from './my-error-message.css.js'
import { htmlTemplate } from './my-error-message.html.js'

customElements.define('my-error-message',
  /**
   * Represents a my-error-message element.
   */
  class extends HTMLElement {
    #message
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true))
      this.shadowRoot.appendChild(htmlTemplate.content.cloneNode(true))

      this.#message = ''
    }

    /**
     * Called when the element is inserted into the DOM.
     */
    connectedCallback () {
      const backButton = this.shadowRoot.querySelector('#backButton')
      backButton.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('error.back', {
          bubbles: true,
          composed: true
        }))
      })

      const errorTextElement = this.shadowRoot.querySelector('#errorText')

      if (this.#message) {
        errorTextElement.textContent = this.#message
      }
    }

    /**
     * Sets the error text.
     *
     * @param {string} value - The error text.
     */
    set message (value) {
      this.#message = value
      this.#updateMessage(value)
    }

    /**
     * Gets the error text.
     *
     * @returns {string} - the error text.
     */
    get message () {
      return this.#message
    }

    /**
     * Updates the message for the error text.
     *
     * @param {string} value - The message.
     */
    #updateMessage (value) {
      const textElement = this.shadowRoot?.querySelector('#errorText')
      if (textElement) {
        textElement.textContent = value
      } else {
        console.error('errorTextElement hittades inte')
      }
    }
  }
)
