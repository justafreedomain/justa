document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Menghentikan pengiriman formulir default

        // Ambil nilai input
        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const message = form.querySelector('textarea').value.trim();

        // Validasi input
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Kirim formulir (simulasi, Anda dapat menyesuaikan dengan logika pengiriman yang sesungguhnya)
        alert('Form submitted successfully!');
        form.reset(); // Reset formulir setelah pengiriman berhasil
    });
});
