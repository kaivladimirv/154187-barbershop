var dialogLogin = document.querySelector('.js-modal-dialog-login');
var btnOpenDialogLogin = document.querySelector('.js-btn-open-login-form');
var btnCloseDialogForm = document.querySelector('.js-btn-close-login-form');
var formLogin = dialogLogin.querySelector('form');
var login = formLogin.querySelector('input[name="login"]');
var password = formLogin.querySelector('input[name="password"]');

initMap ();

btnOpenDialogLogin.addEventListener('click', function (event) {
  event.preventDefault();

  if (!dialogLogin.classList.contains('is-show')) {
    dialogLogin.classList.add('is-show');
  }

});

btnCloseDialogForm.addEventListener('click', function (event) {
  event.preventDefault();

  dialogLogin.classList.remove('is-show');

});

formLogin.addEventListener('submit', function(event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    console.log("Нужно ввести логин и пароль");
  }
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    dialogLogin.classList.remove('is-show');
  }
});

function initMap () {
  var map = document.querySelector('.js-map');
  if (!map) {
      return;
  }

  var btnOpenMap = document.querySelector('.js-btn-open-map');
  var btnCloseMap = document.querySelector('.js-btn-close-map');

  btnOpenMap.addEventListener('click', function (event) {
    event.preventDefault();

    if (!map.classList.contains('is-show')) {
      map.classList.add('is-show');
    }

  });

  btnCloseMap.addEventListener('click', function (event) {
    event.preventDefault();

    map.classList.remove('is-show');

  });
}
