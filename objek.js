function panggilObject(){
    var mobil = {
        type : 'toyota fortunes',
        harga : 'Rp500.000.000,-',
        warna : ['hitam','putih','grey','silver'] // array didalam object
    }

    console.log(mobil);

    console.log(mobil.harga); // memanggil lebih spesifik. maka hasilnya hanya akan tapil "Rp500.000.000,-"

    console.log(mobil.warna[2]); // array didalam object. maka hasilnya "grey"
}

panggilObject();