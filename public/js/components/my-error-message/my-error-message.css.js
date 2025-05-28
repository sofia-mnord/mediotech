export const cssTemplate = document.createElement('template')

cssTemplate.innerHTML = `
  <style>
    .error-message {
      padding: 1rem;
      border: 2px solid #ffcccc;
      border-radius: 0.5rem;
      background: #fff0f0;
    }

    p {
      margin-bottom: 1rem;
      font-weight: bold;
    }

    button {
      padding: 0.5rem 1rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 0.3rem;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  </style>
`
