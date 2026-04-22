
  const form = document.querySelector('form');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const datos = {
      nombre: document.getElementById('nombre').value.trim(),
      cedula: document.getElementById('cedula').value.trim(),
      email:  document.getElementById('email').value.trim()
    };

    const response = await fetch('https://formspree.io/f/xjgjewjv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    });

    if (response.ok) {
      window.location.href = "https://www.sugese.fi.cr/SitePages/index.aspx";
    } else {
      alert('❌ Hubo un error. Intenta de nuevo.');
    }
  });
