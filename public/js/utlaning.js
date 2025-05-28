// add event listener to back-button
document.addEventListener('error.back', () => {
  const main = document.querySelector('#loanPage')
  main.innerHTML = '<my-loan-form></my-loan-form>'
})
