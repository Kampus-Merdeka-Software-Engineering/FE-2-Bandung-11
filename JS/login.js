document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector(".container");
    const loginLink = document.querySelector(".login-link");
    const signupLink = document.querySelector(".signup-link");

    signupLink.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginLink.addEventListener('click', () => {
        container.classList.remove("active");
    });

    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        const dataToSend = {
            nama_lengkap: username, 
            email: email,
            password: password
        };

        saveDataToServer(dataToSend);
    });

    function saveDataToServer(dataToSend) {
        const apiUrl = 'https://be-2-bandung-11-production.up.railway.app/sign';

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        };

        fetch(apiUrl, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data berhasil dikirim ke server:', data);
                alert('Registrasi berhasil!');
            })
            .catch(error => {
                console.error('Error saat mengirim data ke server:', error);
                alert('Registrasi gagal. Silakan coba lagi!');
            });
    }
});
