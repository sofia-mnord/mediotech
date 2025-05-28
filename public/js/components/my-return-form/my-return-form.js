import { cssTemplate } from './my-return-form.css.js'
import { htmlTemplate } from './my-return-form.html.js'
import { getLoanByEquipmentId, deleteLoanById } from '../../loan-service.js'
import '../my-loan-details/index.js'
import '../my-error-message/index.js'
import '../my-loan-confirmation/index.js'

customElements.define('my-return-form',
  /**
   * Represents a my-return-form element.
   */
  class extends HTMLElement {
    /**
     * Button element
     *
     * @type {HTMLElement}
     */
    #searchButton
    /**
     * Input element.
     *
     * @type {HTMLElement}
     */
    #equipmentId
    /**
     * Div element.
     *
     * @type {HTMLElement}
     */
    #resultContainer
    /**
     * Div element.
     *
     * @type {HTMLElement}
     */
    #feedbackContainer
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

      this.#searchButton = this.shadowRoot.querySelector('#searchBtn')
      this.#equipmentId = this.shadowRoot.querySelector('#equipmentId')
      this.#resultContainer = this.shadowRoot.querySelector('#resultContainer')
      this.#feedbackContainer = this.shadowRoot.querySelector('#feedbackContainer')
      this.#abortController = new AbortController()
    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback () {
      this.#searchButton.addEventListener('click', this.searchForEquipmentId.bind(this),
        { signal: this.#abortController.signal })
    }

    /**
     * Called after the element has been removed from the DOM.
     */
    disconnectedCallback () {
      this.#abortController.abort()
    }

    /**
     * Gets and renders the loan data in the UI.
     *
     * @returns {Promise} - Updates the DOM.
     */
    async searchForEquipmentId () {
      const input = this.#equipmentId.value.trim()
      this.#resultContainer.innerHTML = ''
      this.#feedbackContainer.innerHTML = ''

      if (!input) return

      const loan = await getLoanByEquipmentId(input)

      if (!loan) {
        this.#resultContainer.innerHTML = `
        <div class="no-result">
          <div class="no-result-image">
            <img src="../../../images/search-icon.png" alt="Magnifying glass">
          </div>
          <p class="no-result-text">Tyvärr, vi kunde inte hitta något resultat<br>som matchar sökningen.</p>
          <div class="btn-row">
            <a href="oversikt.html" class="btn-primary">Till översikt</a>
          </div>
        </div>
        `

        this.addResultButtons(false)
        return
      }

      const details = document.createElement('my-loan-details')
      details.data = loan

      this.#resultContainer.appendChild(details)

      // create the confirm button
      const confirmButton = document.createElement('button')
      confirmButton.id = 'confirmBtn'
      confirmButton.classList.add('btn-primary')
      confirmButton.textContent = 'Bekräfta återlämning'
      this.#resultContainer.appendChild(confirmButton)

      confirmButton.addEventListener('click', async () => {
        try {
          await deleteLoanById(loan.id)
          const confirmation = document.createElement('my-loan-confirmation')
          confirmation.message = 'Tack! Återlämningen är registrerad.'
          confirmation.linkHref = 'aterlamning.html'
          confirmation.linkText = 'Tillbaka till återlämning'
          this.shadowRoot.innerHTML = ''
          this.shadowRoot.appendChild(confirmation)
        } catch (err) {
          console.error('Något gick fel: ', err)
          const error = document.createElement('my-error-message')
          error.message = 'Ett fel uppstod vid återlämning. Försök igen.'
          this.shadowRoot.innerHTML = ''
          this.shadowRoot.appendChild(error)
          error.addEventListener('error.back', () => {
            location.reload()
          })
        }
      })
    }

    /**
     * Adds the result button events for navigation.
     *
     * @param {boolean} includeOverview - If true, an event handler is added.
     */
    addResultButtons (includeOverview = true) {
      if (includeOverview) {
        this.shadowRoot.querySelector('#overviewBtn')?.addEventListener('click', () => {
          window.location.href = 'oversikt.html'
        })
      }
    }
  }
)
