export function renderHeaders() {
  function renderDefaultHeader() {
    let html = `
  <div class="header-left">
          <p class="header-left-text">Coach Sona Bakalian</p>
        </div>
        <div class="header-right">
          <nav class="nav-menu">
            <a class="nav-item home-page-nav-item" title="Go back to the home page" href="../index.html">
              Home
            </a>
            <a class="nav-item about-me-nav-item" href="/aboutMe/">
              About me
            </a>
            <div class="nav-seperator"></div>
            <a class="nav-item my-services-nav-item" href="/services/">
              My services
            </a>
            <a class="nav-item contact-me-nav-item js-contact-me-nav-item">
              Contact me
            </a>
          </nav>
        </div>
  `
  document.querySelector('.js-default-header-content').innerHTML = html
  };
  renderDefaultHeader()


  function renderHamburgerMenu() {
    let html = `
            <div class="header-left">
          <p class="header-left-text">Coach Sona Bakalian</p>
        </div>
        <div class="hamburger-menu-icon-container">
        <img class="hamburger-menu-icon js-hamburger-menu-icon" src="../images/icons/align-left (1).svg">
      </div>
      <div class="hamburger-menu-page js-hamburger-menu-page">
        <div class="hamburger-menu-page-header">
        <p class="header-left-text">Coach Sona Bakalian</p>
        <img class="close-icon js-close-icon" src="images/icons/cross.svg">
      </div>
      <div class="hamburger-menu-page-options">
        <a class="hamburger-menu-page-option home-page-nav-item" href="/index.html">Home</a>
        <a class="hamburger-menu-page-option about-me-nav-item" href="/aboutMe/">About me</a>
        <a class="hamburger-menu-page-option my-services-nav-item" href="/services/">My services</a>
        <a class="hamburger-menu-page-option contact-me-nav-item hamburger-menu-page-option-contact-me-nav-item js-contact-me-nav-item">Contact me</a>
      </div>
    </div>
    `
    document.querySelector('.js-hamburger-menu').innerHTML = html;

    const hamburgerMenuIcon = document.querySelector('.js-hamburger-menu-icon')
    const closeIcon = document.querySelector('.js-close-icon')
    const hamburgerMenuPage = document.querySelector('.js-hamburger-menu-page')

    hamburgerMenuPage.style.display = "none"

    hamburgerMenuIcon.addEventListener('click', () => {
      hamburgerMenuPage.style.display = "initial"
    })
    closeIcon.addEventListener('click', () => {
      hamburgerMenuPage.style.display = "none"
    })
    
  };
  renderHamburgerMenu()
  

};
renderHeaders()