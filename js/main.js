document.getElementById('login-form').addEventListener('submit',function(e){
    e.preventDefault();

    const usuario = document.getElementById('username').value;    
    const contrasena = document.getElementById('password').value;

    if(usuario === 'root' && contrasena === 'root'){

        localStorage.setItem('loggedIn','true');
        window.location.href = 'dashboard.html';
    }else{
        alert('Usuario o contraseña incorrecta');
    }

});

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('js/service-worker.js')
    .then(() => console.log('Service Worker registrado'))
    .catch(err => console.error('Error al registrar SW: ', err));
}