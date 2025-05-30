// asset/js/contactme.js
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Supaya halaman tidak reload
      getData(e);
    });
  }
});

function getData(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !subject || !message) {
    alert('Tolong isi semua kolom yang wajib!');
    return;
  }

  // Tampilkan pop-up dengan isi data
  alert(`Nama saya ${name}, email saya ${email}, nomor HP saya ${phone || 'tidak diisi'}, saya ingin belajar ${subject}, dan pesan saya: ${message}`);

  // Kosongkan form
  event.target.reset();
}

// backend data
function getData(event) {
  event.preventDefault();

  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  };

  if (!data.name || !data.email || !data.subject || !data.message) {
    alert('Tolong isi semua kolom yang wajib!');
    return;
  }

  // Kirim ke server
  fetch('http://localhost:3000/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      console.log(result.message);
      alert('Form berhasil dikirim!');
      event.target.reset();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat mengirim data.');
    });
}
