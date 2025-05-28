import { cssTemplate } from './my-loan-form.css.js'
import { htmlTemplate } from './my-loan-form.html.js'
import '../my-loan-confirmation/index.js'
import '../my-error-message/index.js'
import { validatePersonalNumber } from '../../utils/validators.js'
import { saveLoan } from '../../loan-service.js'

customElements.define('my-loan-form',
  /**
   * Represents a my-loan-form element.
   */
  class extends HTMLElement {
    /**
     * Form element.
     *
     * @type {HTMLElement}
     */
    #form

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

      // Get the form element
      this.#form = this.shadowRoot.querySelector('form')
      this.#abortController = new AbortController()
    }

    /**
     * Called after the element is inserted into the DOM.
     * Sets the loan date in the form to today's date.
     */
    connectedCallback () {
      this.#form.addEventListener('submit', this.#onSubmit.bind(this),
        { signal: this.#abortController.signal })
      this.#setDefaultDateToToday()
    }

    /**
     * Called after the element has been removed from the DOM.
     */
    disconnectedCallback () {
      this.#abortController.abort()
    }

    /**
     * Handles the submit event.
     *
     * @param {event} event - The submit event.
     */
    async #onSubmit (event) {
      event.preventDefault()

      const isValid = this.#validateFormData()
      if (!isValid) {
        return
      }

      // map the form data
      const formData = {
        firstName: this.#form.firstName.value,
        lastName: this.#form.lastName.value,
        personalNumber: this.#form.personalNumber.value,
        contact: this.#form.contact.value,
        typeOfExam: this.#form.typeOfExam.value,
        equipmentId: this.#form.equipmentId.value,
        loanDate: this.#form.loanDate.value,
        returnDate: this.#form.returnDate.value,
        staffName: this.#form.staffName.value,
        comment: this.#form.comment.value
      }

      try {
        await saveLoan(formData)
        this.#form.reset()
        // Clear form and show confirmation
        this.#showWebComponent('my-loan-confirmation', {
          message: 'Tack! Utlåningen är registrerad.',
          linkHref: 'oversikt.html',
          linkText: 'Till översikt'
        })
      } catch (err) {
        this.#showWebComponent('my-error-message', {
          message: err.message.includes('finns redan')
            ? 'Den här utlåningen är redan registrerad.'
            : 'Ett fel uppstod. Försök igen.'
        })
      }
    }

    /**
     * Validates the form data.
     *
     * @returns {boolean} isValid - true if the data is valid.
     */
    #validateFormData () {
      let isValid = true

      const errorMessages = this.#form.querySelectorAll('.error-message')

      // hide all error messages in the form
      errorMessages.forEach(p => { p.hidden = true })

      const personalNumber = this.#form.personalNumber.value.trim()
      const contact = this.#form.contact.value.trim()
      const loanDate = new Date(this.#form.loanDate.value)
      const returnDate = new Date(this.#form.returnDate.value)

      // Check personal number: 12 characters and -
      if (!validatePersonalNumber(personalNumber)) {
        this.#showFieldError('personalNumber')
        isValid = false
      }

      // Check phone number: 9 characters only
      // OBS 9 characters as to not accidentally match a real phone number
      if (!/^\d{9}$/.test(contact)) {
        this.#showFieldError('contact')
        isValid = false
      }

      // Check for valid dates
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      if (loanDate < today) {
        this.#showFieldError('loanDate')
        isValid = false
      }

      if (returnDate <= loanDate) {
        this.#showFieldError('returnDate')
        isValid = false
      }

      return isValid
    }

    /**
     * Displays the error text in the UI.
     *
     * @param {string} fieldId - The field to display the error text.
     */
    #showFieldError (fieldId) {
      const input = this.#form.querySelector(`#${fieldId}`)
      const inputGroup = input.closest('.form-group')
      const errorElement = inputGroup.querySelector('.error-message')
      if (errorElement) {
        errorElement.hidden = false
        input.classList.add('invalid')
      }

      // eventlistener to clear error message if user starts typing
      input.addEventListener('input', () => {
        input.classList.remove('invalid')
        errorElement.hidden = true
      }, { once: true })
    }

    /**
     * Sets the default value of the loanDate to today.
     */
    #setDefaultDateToToday () {
      const today = new Date()
      const year = today.getFullYear()
      const month = String(today.getMonth() + 1).padStart(2, '0')
      const date = String(today.getDate()).padStart(2, '0')

      const formattedToday = `${year}-${month}-${date}`
      this.#form.loanDate.value = formattedToday
    }

    /**
     * Replaces the content of the shadow root with a new component.
     *
     * @param {string} componentName - The name of the component to display.
     * @param {object} [properties={}] - Optional properties to set on the component.
     */
    #showWebComponent (componentName, properties = {}) {
      this.shadowRoot.innerHTML = ''
      const component = document.createElement(componentName)

      for (const [key, value] of Object.entries(properties)) {
        if (key in component) {
          component[key] = value
        } else {
          component.setAttribute(key, value)
        }
      }

      this.shadowRoot.appendChild(component)
    }
  }
)
