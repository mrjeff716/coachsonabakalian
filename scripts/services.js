import { renderHeaders } from "./headers/headers.js";
import { contactMe, sendMail } from "./contactMe/contactMe.js";
  function services() {
  renderHeaders()
  contactMe()
  
  document.querySelector('.js-send-button').addEventListener('click', async() => {
    await sendMail()
  })
  
}
services()
