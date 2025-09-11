import { renderHeaders } from "./headers/headers.js";
import { contactMe, sendMail } from "./contactMe/contactMe.js";
function aboutMe() {
  renderHeaders()
  contactMe()
  document.querySelector('.js-send-button').addEventListener('click', async() => {
    await sendMail()
  })
};
aboutMe()