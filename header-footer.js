
const mobileMenu = document.getElementById('mobile-menu');
const mobileNav = document.querySelector('.mobile-nav');

function toggleMenu() {


    // Toggle the 'is-active' class
    mobileMenu.addEventListener('click', () => {

        console.log('event')

      mobileMenu.classList.toggle('is-active');
     mobileNav.classList.toggle('show');
    })
  }


  toggleMenu();