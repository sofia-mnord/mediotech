import { cssTemplate } from './my-loan-confirmation.css.js'
import { htmlTemplate } from './my-loan-confirmation.html.js'

customElements.define('my-loan-confirmation',
  /**
   * Represents a my-loan-confirmation element.
   */
  class extends HTMLElement {
    #message
    #linkHref
    #linkText
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true))
      this.shadowRoot.appendChild(htmlTemplate.content.cloneNode(true))

      this.#message = ''
      this.#linkHref = 'oversikt.html'
      this.#linkText = 'Till översikt'
    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback () {
      this.#updateMessage(this.#message)
    }

    /**
     * Sets the confirmation text.
     *
     * @param {string} value - The confirmation text.
     */
    set message (value) {
      this.#message = value
      this.#updateMessage(value)
    }

    /**
     * Gets the confirmation message.
     *
     * @returns {string} - The confirmation text.
     */
    get message () {
      return this.#message
    }

    /**
     * Sets the link.
     *
     * @param {string} value - The link.
     */
    set linkHref (value) {
      this.#linkHref = value
    }

    /**
     * Gets the link.
     *
     * @readonly
     * @returns {string} - The link.
     */
    get linkHref () {
      return this.#linkHref
    }

    /**
     * Sets the text of the link.
     *
     * @param {string} value - The text to display.
     */
    set linkText (value) {
      this.#linkText = value
      this.#updateLink(this.#linkHref, value)
    }

    /**
     * Gets the text of the link.
     *
     * @readonly
     * @returns {string} - The text of the link.
     */
    get linkText () {
      return this.#linkText
    }

    /**
     * Updates the message for confirmation text.
     *
     * @param {string} value - The message.
     */
    #updateMessage (value) {
      const textElement = this.shadowRoot?.querySelector('#confirmationText')
      if (textElement) {
        textElement.textContent = value
      } else {
        console.error('confirmationTextElement hittades inte')
      }
    }

    /**
     * Updates the link in the UI.
     *
     * @param {string} href - The path of the link.
     * @param {string} text - The link text to display.
     */
    #updateLink (href, text) {
      const linkElement = this.shadowRoot?.querySelector('#overviewLink')
      if (linkElement) {
        linkElement.href = href
        linkElement.textContent = text
      }
    }
  }
)
