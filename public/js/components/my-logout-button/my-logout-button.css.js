export const cssTemplate = document.createElement('template')

cssTemplate.innerHTML = `
  <style>
    button {
      padding: 0.4rem 0.75rem; 
      font-size: 0.9rem;
      background-color: #3877d4;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }

    button:hover {
      background-color: #3167b9; 
    }
  </style>
`
