export const cssTemplate = document.createElement('template')

cssTemplate.innerHTML = `
  <style>
    h2 {
      text-align: center;
    }

    p {
      text-align: center;
      margin-bottom: 1.5rem;
      font-size: 0.8rem;
    }

    form {
      max-width: 60%;
      margin-left: auto;
      margin-right: auto;
    }

    fieldset {
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 2px 2px 20px 5px rgb(0 0 0 / 5%); 
      margin-bottom: 1.5rem;
      padding: 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem 2rem;
    }

    legend {
      font-size: 1.2rem;
    }

    label {
      display: block;
    }

    input[type="text"],
    input[type="date"],
    select,
    textarea {
      width: 100%;
      padding: 0.5rem;
      box-sizing: border-box;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }

    textarea {
      resize: vertical;
    }
    
    button,
    input[type="submit"],
    input[type="button"] {
      padding: 0.5rem 1rem;
      margin-right: 0.5rem;
      margin-top: 1rem;
      cursor: pointer;
    }

    .button-wrapper {
      display: flex;
      justify-content: end;
    }

    .invalid {
      border: 2px solid red;
    }
    .error-message {
      color:rgb(208, 6, 43);
      text-align: start;
      margin-left: 0.2rem;
      font-weight: bold;
    }
  </style>
`
