var lock = new Auth0Lock('iXrnGNCaPTbiaD4Meng0OeFddWVIlSlq', 'rishravi.auth0.com');

var btn_login = document.getElementById('btn-login');

btn_login.addEventListener('click', function() {
  lock.show();
});