// Minimal, accessible toggle
const nav = document.querySelector('.nav');
const btn = document.querySelector('.nav__toggle');
const menu = document.getElementById('nav-menu');

if (btn && menu) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('nav--open');
    btn.setAttribute('aria-expanded', String(open));
  });

  // Close the menu when focusing outside or pressing Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
      nav.classList.remove('nav--open');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if (
      nav.classList.contains('nav--open') &&
      !nav.contains(e.target)
    ) {
      nav.classList.remove('nav--open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
  menu.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('nav--open')) {
        nav.classList.remove('nav--open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// EmailJS initialisieren
emailjs.init("DubdJ_C_U0t3aQNtz");

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    /*const templateParams = {
        user_name: document.getElementById('user_name').value,
        user_email: document.getElementById('user_email').value,
        message: document.getElementById('message').value,
        to_email: 'carolinewendlandt@gmail.com' 
    };*/

    emailjs.sendForm('service_qvwm98d', 'template_yootooo', this)
        .then(function() {
            alert('Nachricht erfolgreich gesendet!');
        }, function(error) {
            alert('Fehler: ' + JSON.stringify(error));
        });

    document.getElementById('user_name').value='';
    document.getElementById('user_email').value='';
    document.getElementById('message').value='';

});