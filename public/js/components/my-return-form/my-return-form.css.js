export const cssTemplate = document.createElement('template')

cssTemplate.innerHTML = `
  <style>
    h2 {
      text-align: center;
    }

    .wrapper {
        max-width: 800px;
        margin: 2rem auto;
        background-color: white;
        padding: 2rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 2px 2px 20px 5px rgb(0 0 0 / 5%); 
    }

    .search-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-bottom: 2rem;
    }

    input[type="text"] {
      padding: 0.2rem;
      font-size: 1rem;
    }

    button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 0.3rem;
      cursor: pointer;
      font-size: 1rem;
    }

    #searchButton {
      background-color: #ddd;
    }

    .btn-row {
      margin-top: 2rem;
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
    }

    .btn-primary {
      background-color: #0049a8;
      color: white;
    }

    .label {
      font-weight: bold;
    }

    .no-result {
      text-align: center;
      color: #555;
    }

    .no-result-icon {
      font-size: 3rem;
      color: #ccc;
    }

    .no-result-text {
      margin-top: 1rem;
    }

    a.btn-primary {
      display: inline-block;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 0.3rem;
      background-color: #0049a8;
      color: white;
      font-size: 1rem;
      text-align: center;
    }
  </style>
  `
