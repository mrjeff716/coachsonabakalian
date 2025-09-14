export function contactMe() {

  function renderContactMeContainer() {
    let html = `
    <div class="form-container">
      <form>
        <button type="button" class="close-contact-form js-close-contact-form">&times;</button>
        <h1>Contact me</h1>
        
        <input type="text" class="name-input" id="js-name-input" placeholder="Name" required>
      
      
        <input type="email" class="email-input" id="js-email" placeholder="Email" required>
      
      
        <input type="tel" pattern="[0-9]+" class="phone-number-input" id="js-phone-number" placeholder="Mobile number (optional)">
      
      <div class="message-container">
        
        <textarea required placeholder="Type your message here" id="js-message"></textarea>
        <button type="button" class="send-button js-send-button">Send</button>

      </div>
      </form>
    </div>
    `
    const contactMeContainer = document.querySelector('.js-contact-me-container')
    contactMeContainer.innerHTML = html
    contactMeContainer.classList.add('form-removed')

    document.querySelectorAll('.js-contact-me-nav-item').forEach((navItem) => {
      navItem.addEventListener('click', () => {
        document.querySelector('.contact-me-container').style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        contactMeContainer.classList.remove('form-removed')
      })
    })

    document.querySelector('.js-close-contact-form').addEventListener('click', () => {
      contactMeContainer.classList.add('form-removed')
    })

    document.querySelector('.js-confirmation-message-container-modal').innerHTML = `
    <div class="confirmation-message-container">
      <p class="confirmation-message">Your message has been sent!</p>
    `

    document.querySelector('.js-confirmation-message-container-modal').classList.add('form-removed')
  };
  renderContactMeContainer()
};
contactMe()

export async function sendMail() {
  
    let parms = {
      //getElementById isnt like queryselector that uses '.' instead
      //its only ''
      userName: document.getElementById('js-name-input').value,
      email: document.getElementById('js-email').value,
      phoneNumber: document.getElementById('js-phone-number').value,
      message: document.getElementById('js-message').value
    }

    if(parms.userName && parms.email && parms.message) {
      await emailjs.send('service_l92bvcx', 'template_t3qyssh', parms)
      console.log('email has been sent')
      document.getElementById('js-name-input').value = ''
      document.getElementById('js-email').value = ''
      document.getElementById('js-phone-number').value = ''
      document.getElementById('js-message').value = ''

      document.querySelector('.js-contact-me-container').classList.add('form-removed');

      document.querySelector('.js-confirmation-message-container-modal').classList.remove('form-removed');

      setTimeout(() => {
        document.querySelector('.js-confirmation-message-container-modal').classList.add('form-removed');
      }, 2000)
    } else {
      alert("Please kindly fill out the form as requested")
    }
    
  }