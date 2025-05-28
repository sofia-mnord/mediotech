export const cssTemplate = document.createElement('template')

cssTemplate.innerHTML = `
  <style>
    .confirmation {
      padding: 1rem;
      border: 2px solid #ccc;
      border-radius: 0.5rem;
      background: #f0fff0;
    }

    p {
      margin-bottom: 1rem;
      font-weight: bold;
    }

    a {
      display: inline-block;
      padding: 0.5rem 1rem;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 0.3rem;
    }

    a:hover {
      background-color: #0056b3;
    }
  </style>
  `
