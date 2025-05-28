import { cssTemplate } from './my-overview-table.css.js'
import { htmlTemplate } from './my-overview-table.html.js'
import { getLoans } from '../../loan-service.js'

customElements.define('my-overview-table',
  /**
   * Represents a my-overview-table element.
   */
  class extends HTMLElement {
    /**
     * Table body element.
     *
     * @type {HTMLElement}
     */
    #tbody

    /**
     * Table element.
     *
     * @type {HTMLElement}
     */
    #table

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true))
      this.shadowRoot.appendChild(htmlTemplate.content.cloneNode(true))

      this.#tbody = this.shadowRoot.querySelector('tbody')
      this.#table = this.shadowRoot.querySelector('table')
    }

    /**
     * Called when the element is inserted into the DOM.
     */
    connectedCallback () {
      this.#loadLoansFromDatabase()
    }

    /**
     * Loads all loans from the Firestore database and renders them in the table.
     */
    async #loadLoansFromDatabase () {
      try {
        const loans = await getLoans()

        for (const loan of loans) {
          const tr = document.createElement('tr')

          tr.innerHTML = `
            <td>${loan.personalNumber}</td>
            <td>${loan.lastName}, ${loan.firstName}</td>
            <td>${loan.loanDate}</td>
            <td>${loan.returnDate}</td>
            <td>${loan.equipmentId}</td>
            `
          this.#tbody.appendChild(tr)
        }
      } catch (err) {
        console.error('Kunde inte hämta lån', err)
        this.#table.insertAdjacentHTML('afterend', '<p>Ett fel uppstod vid hämtningen av lån</p>')
      }
    }
  }
)
