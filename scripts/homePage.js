import { renderHeaders } from "./headers/headers.js";

function homePage() {
  renderHeaders()

  function renderHomePageQuotes() {
    let randomNumber = Math.random()
    let html = ``

    if(randomNumber >= 0 && randomNumber < 0.25) {
      html = `
        <p class="first-quote">Empower yourself</p>
        <p class="first-quote">and unlock your TRUE potential</p>
        <p class="first-quote">with Life Coach Sona</p>
      `
    } else if (randomNumber >= 0.25 && randomNumber < 0.5) {
      html = `
        <p class="first-quote">Discover your strength</p>
        <p class="first-quote">and create the life you deserve</p>
        <p class="first-quote">with Life Coach Sona</p>
      `
    } else if (randomNumber >= 0.5 && randomNumber < 0.75) {
      html = `
        <p class="first-quote">Transform your mindset</p>
        <p class="first-quote">and achieve lasting success</p>
        <p class="first-quote">with Life Coach Sona</p>
      `
    } else if (randomNumber >= 0.75 && randomNumber < 1) {
      html = `
        <p class="first-quote">Awaken your confidence</p>
        <p class="first-quote">and step into your best self</p>
        <p class="first-quote">with Life Coach Sona</p>
      `
    }

    document.querySelector('.js-first-quote-container').innerHTML = html
  }

  renderHomePageQuotes()
  setInterval(() => {
    renderHomePageQuotes()
  }, 3800)

}; homePage()