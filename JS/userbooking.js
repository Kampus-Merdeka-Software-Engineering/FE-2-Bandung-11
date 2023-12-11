document.addEventListener('DOMContentLoaded', function () {
    loadData();
});

function loadData() {
    //url data user
    const userURL = 'https://be-2-bandung-11-production.up.railway.app/User';
    
    //url data kamar 
    const kamarURL = 'https://be-2-bandung-11-production.up.railway.app/kamar/kost/1';

    //fetch data user
    const userRequest = fetch(userURL).then(response => response.json());

    //fetch data kamar
    const kamarRequest = fetch(kamarURL).then(response => response.json());

    // Gabungkan kedua promise fetch
    Promise.all([userRequest, kamarRequest])
        .then(([userData, kamarData]) => {
            // Proses data user
            let userOutput = '';
            const firstEntryUser = userData[0];
            if (firstEntryUser) {
                userOutput += `
                    <ul>
                        <li>Nama Penghuni: ${firstEntryUser.nama_lengkap}</li>
                        <li>Nomer HP: ${firstEntryUser.no_telp}</li>
                        <li>Email: ${firstEntryUser.email}</li>
                        <li>Jenis Kelamin: ${firstEntryUser.jenis_kelamin}</li>
                        <li>Pekerjaan: ${firstEntryUser.pekerjaan}</li>
                    </ul>`;
            } else {
                console.error('No user data found.');
            }

            // Proses data kamar
            let kamarOutput = '';
            kamarData.forEach((kamar) => {
                kamarOutput += `
                    <li class="card">
                        <div class="imgbooking"><img src="${kamar.imgUrl}"></div>
                        <div class="content">
                            <div class="text">
                                <h2>${kamar.nama_kamar}</h2>
                                <p>${kamar.harga_kamar}</p>
                            </div>
                        </div>
                    </li>`;
            });

            // Tampilkan hasil data user dan kamar
            let userDataList = document.getElementById('user-data-list');
            let kamarList = document.getElementById('kamar-list');

            if (userDataList && kamarList) {
                userDataList.innerHTML = userOutput;
                kamarList.innerHTML = kamarOutput;
            } else {
                console.error('Element not found.');
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

function saveDataToServer(selectedKamar) {
    const apiUrl = 'https://be-2-bandung-11-production.up.railway.app/booking'; 
    const dataToSend = {
      kamarId: selectedKamar.id_kamar,
      // Tambahkan properti lain sesuai kebutuhan
    };
  
    const requestOptions = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend), 
    };
  
    // Kirim permintaan ke server
    return fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Data berhasil dikirim ke server:', data);
      })
      .catch(error => {
        console.error('Error saat mengirim data ke server:', error);
      });
  }
  
  function saveDataAndNavigateToReview() {
    const selectedKamarId = 'get_selected_kamar_id';  
    saveDataToServer({ id_kamar: selectedKamarId })
      .then(() => {
        // Setelah data berhasil disimpan, arahkan ke halaman review
        window.location.href = './bookingreview.html';
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Booking gagal. Silakan coba lagi!');
      });
  }
  