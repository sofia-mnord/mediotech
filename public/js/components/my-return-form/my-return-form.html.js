export const htmlTemplate = document.createElement('template')

htmlTemplate.innerHTML = `
  <h2>Registrera återlämning</h2>
  <div class="wrapper">
    <div class="search-row">
      <label for="equipmentId">Sök på apparat-ID:</label>
      <input type="text" id="equipmentId" placeholder="t.ex. 86601">
      <button id="searchBtn">Sök</button>
    </div>
    <div id="resultContainer"></div>
    <div id="feedbackContainer"></div>
  </div>
  `
