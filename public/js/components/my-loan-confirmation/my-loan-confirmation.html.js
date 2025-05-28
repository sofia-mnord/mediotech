export const htmlTemplate = document.createElement('template')

htmlTemplate.innerHTML = `
  <div class="confirmation">
    <p id="confirmationText"><slot>Tack! Utlåningen är registrerad.</slot></p>
    <a id="overviewLink" href="oversikt.html">Till översikt</a>
  </div>
`
