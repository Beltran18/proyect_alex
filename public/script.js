document.getElementById('userForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const edad = document.getElementById('edad').value;
    const telefono = document.getElementById('telefono').value;

    try {
        // Enviar datos al servidor
        const response = await fetch('http://localhost:3000/api/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, apellidos, edad, telefono })
        });

        const messageElement = document.getElementById('message');

        if (response.ok) {
            const data = await response.json();
            messageElement.textContent = 'Usuario registrado correctamente';
            messageElement.className = 'message success';
            messageElement.style.display = 'block';
            document.getElementById('userForm').reset();
        } else {
            const error = await response.json();
            messageElement.textContent = `Error: ${error.message || 'No se pudo registrar el usuario'}`;
            messageElement.className = 'message error';
            messageElement.style.display = 'block';
        }
    } catch (error) {
        const messageElement = document.getElementById('message');
        messageElement.textContent = 'Error de conexión con el servidor';
        messageElement.className = 'message error';
        messageElement.style.display = 'block';
    }
});