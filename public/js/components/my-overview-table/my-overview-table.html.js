export const htmlTemplate = document.createElement('template')

htmlTemplate.innerHTML = `
  <div class="overview">
    <table>
      <thead>
        <tr>
          <th>Personnummer</th>
          <th>Namn</th>
          <th>Utlåningsdatum</th>
          <th>Återlämningsdatum</th>
          <th>Apparat-ID</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
`
