export const cssTemplate = document.createElement('template')

cssTemplate.innerHTML = `
  <style>
    .section {
      margin-top: 1rem;
      border-top: 1px solid #bbb;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    .row {
      display: flex;
      gap: 1rem;
      margin-bottom: 0.5rem;
    }

    .label {
      font-weight: bold;
    }
  </style>
`
