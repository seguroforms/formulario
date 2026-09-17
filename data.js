
  const form = document.querySelector('form');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const datos = {
      access_key: "sf_164732b78635f1a7a01b1d24449986f6",
      nombre: document.getElementById('nombre').value.trim(),
      tipo: document.getElementById('tipo').value.trim(),
      email:  document.getElementById('email').value.trim()
    };

    const response = await fetch('https://api.snapitforms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    });

    if (response.ok) {
      window.location.href = "https://www.inter.edu/";
    } else {
      alert('❌ Hubo un error. Intenta de nuevo.');
    }
  });
