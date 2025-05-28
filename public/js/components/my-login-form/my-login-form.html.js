export const htmlTemplate = document.createElement('template')

htmlTemplate.innerHTML = `
  <div class="wrapper">
    <h2>Logga in</h2>
    <form action="">
        <label for="userName">E-postadress</label>
        <input type="text" name="userName" id="userName" required placeholder="namn@example.com">
        <label for="password">Lösenord</label>
        <input type="password" name="password" id="password" required>
        <p id="error" class="error-message"></p>
        <input type="submit" value="Logga in">
    </form>
  </div> 
`
