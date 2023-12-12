document.addEventListener("DOMContentLoaded", function () {
  loadData()
})

function loadData() {
  fetch("https://be-2-bandung-11-production.up.railway.app/User")
    .then((response) => response.json())
    .then((data) => {
      let output = ""

      // Ambil hanya satu entri pertama dari array data
      const firstEntry = data[0]

      if (firstEntry) {
        output += `
                    <ul>
                        <li>Nama Penghuni: ${firstEntry.nama_lengkap}</li>
                        <li>Nomer HP: ${firstEntry.no_telp}</li>
                        <li>Email: ${firstEntry.email}</li>
                        <li>Jenis Kelamin: ${firstEntry.jenis_kelamin}</li>
                        <li>Pekerjaan: ${firstEntry.pekerjaan}</li>
                    </ul>`
      } else {
        console.error("No data found.")
      }

      let dataList = document.getElementById("data-list")
      if (dataList) {
        dataList.innerHTML = output
      } else {
        console.error('Element with ID "data-list" not found.')
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error)
    })
}
