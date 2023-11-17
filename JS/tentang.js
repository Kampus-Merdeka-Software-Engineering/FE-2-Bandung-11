function sendwhatsapp() {
    var phoneNumber = "+6281329216484";

    var nama = document.querySelector('.nama').value;
    var pesan = document.querySelector('.pesan').value;

    var url = "https://wa.me/" + phoneNumber + "?text=" +
        "*Nama :* " + nama + "%0a" +
        "*Pesan :* " + pesan + "%0a";

    var newWindow = window.open(url, '_blank');
    newWindow.focus();
}