export const cssTemplate = document.createElement('template')

cssTemplate.innerHTML = `
  <style>
    .overview {
      max-width: 80%;
      margin: 0 auto;
      background-color: white;
      border-radius: 3px;
      box-shadow: 2px 2px 20px 5px rgb(0 0 0 / 5%);
      overflow: hidden;
      margin-top: 3rem;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th {
      background-color: #004aad;
      color: white;
      text-align: left;
      padding: 0.75rem;
      font-weight: 600;
    }

    td {
      padding: 0.75rem;
      border-bottom: 1px solid #eee;
    }

    tr:nth-child(even) td {
      background-color: #f9f9ff;
    }

    tr:last-child td {
      border-bottom: none;
    }
  </style>
`
