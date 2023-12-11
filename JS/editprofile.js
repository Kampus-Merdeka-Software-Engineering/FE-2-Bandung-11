document.addEventListener('DOMContentLoaded', function () {
    loadUserData();
    
    const saveButton = document.getElementById('saveButton');
    saveButton.addEventListener('click', saveUserData);
});

function loadUserData() {
    fetch('https://be-2-bandung-11-production.up.railway.app/User')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            if (data.length > 0) {
                const user = data[0];
                document.getElementById('emailInput').value = user.email;
                document.getElementById('fullNameInput').value = user.nama_lengkap;

                // Manipulasi tanggal lahir
                const dobInput = document.getElementById('dobInput');
                const dobDate = new Date(user.tgl_lahir);
                const formattedDate = dobDate.toISOString().split('T')[0];
                dobInput.value = formattedDate;

                document.getElementById('statusInput').value = user.pekerjaan;
                document.getElementById('phoneNumberInput').value = user.no_telp;

                if (user.jenis_kelamin === 'Laki-laki') {
                    document.getElementById('male').checked = true;
                } else if (user.jenis_kelamin === 'Perempuan') {
                    document.getElementById('female').checked = true;
                }
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

function saveUserData() {
    const email = document.getElementById('emailInput').value;
    const fullName = document.getElementById('fullNameInput').value;
    const dob = document.getElementById('dobInput').value;
    const status = document.getElementById('statusInput').value;
    const phoneNumber = document.getElementById('phoneNumberInput').value;

    let gender;
    if (document.getElementById('male').checked) {
        gender = 'Laki-laki';
    } else if (document.getElementById('female').checked) {
        gender = 'Perempuan';
    }

    const userData = {
        email: email,
        nama_lengkap: fullName,
        tgl_lahir: dob,
        pekerjaan: status,
        no_telp: phoneNumber,
        jenis_kelamin: gender,
    };

    fetch('https://be-2-bandung-11-production.up.railway.app/User', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Data saved successfully:', data);
        })
        .catch((error) => {
            console.error('Error saving data:', error);
        });
}
