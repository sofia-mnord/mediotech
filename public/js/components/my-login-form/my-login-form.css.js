export const cssTemplate = document.createElement('template')

cssTemplate.innerHTML = `
  <style>
    div {
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 2px 2px 20px 5px rgb(0 0 0 / 5%);
      width: 40%; 
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 5rem;
    }

    h2 {
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        max-width: 500px;
        margin: 0 auto;
    }

    label {
        margin-top: 1rem;
        margin-bottom: 0.5rem;
        width: 80%;
        text-align: left;
    }

    input {
        width: 80%;
        height: 1.5rem;
    }

    input[type="submit"] {
        margin-top: 2.5rem;
        margin-bottom: 3rem;
        height: 2.5rem;
        font-size: 0.9rem;
        background-color: #3877d4;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.2s ease;
    }

    input[type="submit"]:hover {
        background-color: #3167b9;
    }

    .error-message {
      color: red;
      margin-top: 1rem;
      font-size: 0.9rem;
      text-align: center;
    }

  </style>
`
