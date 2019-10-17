function arrayPop(){
    var kota = ['jakarta','bandung','semarang','jogja','surabaya','malang'];

    console.log(kota); // memanggil variabel kota
    console.log("============"); // haenya untuk pemisah 

    kota.pop(); // pop untuk menghapus data paling ujung pada variabel array

    return kota;
}

console.log(arrayPop()); // hasilnya malang akan hilang