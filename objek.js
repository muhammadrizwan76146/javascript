function panggilObject(){
    var mobil = {
        type : 'toyota fortunes',
        harga : 'Rp500.000.000,-',
        warna : 'hitam',
    }

    console.log(mobil);

    console.log(mobil.harga); // memanggil lebih spesifik. maka hasilnya hanya akan tapil "Rp500.000.000,-"
}

panggilObject();