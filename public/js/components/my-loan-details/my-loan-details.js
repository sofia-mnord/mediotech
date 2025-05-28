import { htmlTemplate } from './my-loan-details.html.js'
import { cssTemplate } from './my-loan-details.css.js'

customElements.define('my-loan-details',
  /**
   * Represents a my-loan-details element.
   */
  class extends HTMLElement {
    #data
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true))
      this.shadowRoot.appendChild(htmlTemplate.content.cloneNode(true))
    }

    /**
     * Sets the data that should be shown in the component and updates the content of the DOM.
     *
     * @param {string} loan - The loan to display in the UI.
     */
    set data (loan) {
      this.#data = loan
      /**
       * Gets an element from the shadow DOM based on a CSS selector.
       *
       * @param {string} id - The CSS selector.
       * @returns {Element|null} - The matched DOM element, or null if not found.
       */
      const $ = (id) => this.shadowRoot.querySelector(id)

      $('#firstName').textContent = loan.firstName || ''
      $('#lastName').textContent = loan.lastName || ''
      $('#personalNumber').textContent = loan.personalNumber || ''
      $('#contact').textContent = loan.contact || ''

      // map exam types
      const examTypes = {
        1: 'Långtids-EKG',
        2: 'Sömnapnéregistrering'
      }
      $('#typeOfExam').textContent = examTypes[loan.typeOfExam] || 'Okänd'
      $('#equipmentId').textContent = loan.equipmentId || ''
      $('#loanDate').textContent = loan.loanDate || ''
      $('#returnDate').textContent = loan.returnDate || ''
      $('#staffName').textContent = loan.staffName || ''
      $('#comment').textContent = loan.comment || ''
    }

    /**
     * Gets the data of the loan object that should be shown in the component.
     *
     * @readonly
     * @returns {object} - The data of the loan.
     */
    get data () {
      return this.#data
    }
  }
)
