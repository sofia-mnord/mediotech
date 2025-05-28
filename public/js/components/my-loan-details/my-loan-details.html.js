export const htmlTemplate = document.createElement('template')

htmlTemplate.innerHTML = `
  <div class="section">
    <h3>Patient</h3>
    <div class="row"><span class="label">Förnamn:</span> <span id="firstName"></span></div>
    <div class="row"><span class="label">Efternamn:</span> <span id="lastName"></span></div>
    <div class="row"><span class="label">Personnummer:</span> <span id="personalNumber"></span></div>
    <div class="row"><span class="label">Telefonnummer:</span> <span id="contact"></span></div>
  </div>

  <div class="section">
    <h3>Undersökning</h3>
    <div class="row"><span class="label">Typ av undersökning:</span> <span id="typeOfExam"></span></div>
    <div class="row"><span class="label">Apparat-ID:</span> <span id="equipmentId"></span></div>
    <div class="row"><span class="label">Datum för utlåning:</span> <span id="loanDate"></span></div>
    <div class="row"><span class="label">Datum för återlämning:</span> <span id="returnDate"></span></div>
    <div class="row"><span class="label">Personal:</span> <span id="staffName"></span></div>
    <div class="row"><span class="label">Kommentar:</span> <span id="comment"></span></div>
  </div>
`
