function panggilNumber(){
    var a = "9";
    var b = 3;

    hasil = a + b; // hasil 93. karena 9 sebagai string, jadi 9 digabung 3 = 93
    console.log(hasil);

    konversi = Number(a) + b; // hasil 12. karena string sudah di konversi menjadi number
    console.log(konversi);
}

panggilNumber();

/* fungsi Number(a) adalah untuk mengkonveri dari string ke number */