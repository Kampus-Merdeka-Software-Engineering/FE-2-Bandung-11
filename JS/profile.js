document.addEventListener('DOMContentLoaded', function () {
    loadData();
});

function loadData() {
    fetch('https://be-2-bandung-11-production.up.railway.app/User')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            let output = '';

            data.forEach(User => {
                output += `
                    <div class="box-email">
                        <h4>Email</h4>
                        <p>${User.email}</p>
                    </div>
                    <div class="box-name">
                        <h4>Nama</h4>
                        <p>${User.nama_lengkap}</p>
                    </div>
                    <div class="box-date">
                        <h4>Tanggal Lahir</h4>
                        <p>${User.tgl_lahir}</p>
                    </div>
                    <div class="box-job">
                        <h4>Pekerjaan</h4>
                        <p>${User.pekerjaan}</p>
                    </div>
                    <div class="box-gender">
                        <h4>Jenis Kelamin</h4>
                        <p>${User.jenis_kelamin}</p>
                    </div>
                    <div class="box-phone">
                        <h4>No Telepon</h4>
                        <p>${User.no_telp}</p>
                    </div>`;
            });

            let dataList = document.getElementById('biodata-list');
            if (dataList) {
                dataList.innerHTML = output;
            } else {
                console.error('Element with ID "biodata-list" not found.');
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}
