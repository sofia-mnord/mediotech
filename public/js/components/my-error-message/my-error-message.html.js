export const htmlTemplate = document.createElement('template')

htmlTemplate.innerHTML = `
  <div class="error-message">
    <p id="errorText"><slot>Tyvärr, något gick fel. Var god försök igen.</slot></p>
    <button id="backButton">Tillbaka</button>
  </div>
`
