document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores de usuario y contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificar las credenciales (aquí debes implementar tu lógica de autenticación)
    if (checkCredentials(username, password)) {
        // Credenciales válidas, redirigir al usuario
        window.location.href = 'menuAdministrador.html'; // Redirige al archivo del menú
    } else {
        // Credenciales inválidas, mostrar mensaje de error
        let alerta=document.getElementById("alert-login")
        alerta.style.display='inline'
    
    }
});

// Función para verificar las credenciales (sustituye esto con tu lógica real)
function checkCredentials(username, password) {
    // Aquí podrías cargar y verificar las credenciales desde users.js
    // Por simplicidad, aquí verificaremos credenciales de ejemplo
    if (username === 'admin-cafeteria' && password === 'cegis@cafeteria') {
        return true; // Credenciales válidas
    } else {
        return false; // Credenciales inválidas
    }
}
