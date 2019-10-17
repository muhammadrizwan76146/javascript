function arrayShift(){
    var kota = ['jakarta','bandung','semarang','jogja','surabaya','malang'];

    console.log(kota); // memanggil variabel kota
    console.log("============"); // haenya untuk pemisah 

    var kota2 = kota.shift(); // shift untuk menghapus data pertama pada variabel array
    console.log(kota2); // memanggil variabel kota2 yg data pertamanya sudah dihapus menggunakan shift

    return kota;
}

console.log(arrayShift()); // hasilnya jakarta akan hilang