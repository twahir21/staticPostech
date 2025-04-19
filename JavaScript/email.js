  document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const submitBtn = document.getElementById('submitBtn');

    if (!name || !email || !message) {
      Swal.fire('Error', 'Tafadhali jaza sehemu zote!', 'error');
      return;
    }

    // Change button to loading state
    submitBtn.textContent = 'Inashughulikiwa...';
    submitBtn.disabled = true;

    try {
      const response = await fetch('http://localhost:3000/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire('Imetumwa!', result.message, 'success');
        document.getElementById('contactForm').reset();
      } else {
        throw new Error(result.message || 'Tatizo limejitokeza, tafadhali jaribu tena!');
      }
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
    } finally {
      // Restore button state
      submitBtn.textContent = 'Tuma Ujumbe';
      submitBtn.disabled = false;
    }
  });
