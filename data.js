
  const form = document.querySelector('form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const datos = {
      nombre: document.getElementById('nombre').value.trim(),
      cedula: document.getElementById('cedula').value.trim(),
      email: document.getElementById('email').value.trim(),
    };

    console.log('Datos capturados:', datos);
  window.location.href = "https://smseguros.cr/";
    // Aquí puedes enviar los datos a un servidor, guardarlos, etc.
  });
