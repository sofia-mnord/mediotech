export const htmlTemplate = document.createElement('template')

htmlTemplate.innerHTML = `
  <div class="wrapper">
    <h2>Utlåning</h2>
    <p>Obligatoriska fält är märkta med *</p>
    <form id="patient-info">
      <fieldset>
        <legend>Patient</legend>
        <div class="form-group">
          <label for="firstName">Förnamn*</label>
          <input type="text" name="firstName" id="firstName" required placeholder="Namn">
        </div>
        <div class="form-group">
          <label for="lastName">Efternamn*</label>
          <input type="text" name="lastName" id="lastName" required placeholder="Namnsson">
        </div>
        <div class="form-group">
          <label for="personalNumber">Personnummer* (12 siffror)</label>
          <input type="text" name="personalNumber" id="personalNumber" required placeholder="19XXXXXX-XXXX">
          <p class="error-message" hidden>Personnummer måste vara 12 siffror och med bindestreck</p>
        </div>
        <div class="form-group">
          <label for="contact">Telefonnummer*</label>
          <input type="text" name="contact" id="contact" required placeholder="07XXXXXXX">
          <p class="error-message" hidden>Telefonnummer måste vara 9 siffror och utan bindestreck</p>
        </div>
      </fieldset>
      <fieldset>
        <legend>Undersökning</legend>
        <div class="form-group">
          <label for="typOfExam">Typ av undersökning*</label>
          <select name="typeOfExam" id="typeOfExam">
            <option value="1">Långtids-EKG</option>
            <option value="2">Sömnapnéregistrering</option>
          </select>
        </div>
        <div class="form-group">
          <label for="equipmentId">Apparat-ID*</label>
          <input type="text" name="equipmentId" id="equipmentId" required>
        </div>
        <div class="form-group">
          <label for="loanDate">Utlåningsdatum*</label>
          <input type="date" name="loanDate" id="loanDate" required>
          <p class="error-message" hidden>Utlåningsdatum måste vara idag eller senare</p>
        </div>
        <div class="form-group">
          <label for="returnDate">Återlämningsdatum*</label>
          <input type="date" name="returnDate" id="returnDate" required>
          <p class="error-message" hidden>Återlämningsdatum måste vara efter utlåningsdatum</p>
        </div>
        <div class="form-group">
          <label for="staffName">Personal*</label>
          <input type="text" name="staffName" id="staffName" required>
        </div>
        <div class="form-group">
          <label for="comment">Kommentar</label>
          <textarea rows="3" name="comment" id="comment" maxlength="200"></textarea>
        </div>
      </fieldset>
      <div class="button-wrapper">
        <input type="button" value="Avbryt">
        <input type="submit" value="Bekräfta">
      </div>
    </form>
  </div>
`
