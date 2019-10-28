/* 1). perulangan: FOR */
//(+) FOR dapat digunakan untuk melakukan perulangan berdasarkan panjang dari sebuah array
function perulanganFor1(){
    var for1 = ['jakarta','bandung','yogyakarta'];
    for (var i=0; i<for1.length; i++) {
        console.log(for1[i]); // Value atau Item
        console.log(i); // Index
        console.log(for1); //array
    }
}
perulanganFor1();

//(+) dapat digunakan untuk melakukan perulangan berdasarkan jumlah yang sudah ditentukan
function perulanganFor2() {
    for(var i=0; i<=10; i++) {
        console.log('putaran ke :', i);
    }
}
perulanganFor2();


/* 2). Perulangan: FOREACH */
// (+) forEach dapat digunakan untuk melakukan perulangan berdasarkan panjang sebuah array
function perulanganForEach1(){
    var dataKota = ['jakarta','bandung','malang'];
    dataKota.forEach((value, index, array)=>{
        console.log(value);
        console.log(index);
        console.log(array);
    })
}
perulanganForEach1();


/* 3). Perulangan: MAP */
// (+) MAP dapat digunakan untuk melakukan perulangan berdasarkan panjang dari sebuah array
function perulanganMAP() {
    var dataKota = ['jakarta','bandung','malang'];
    dataKota.map((value, index, array)=>{
        console.log(value);
        console.log(index);
        console.log(array);
    });
}
perulanganMAP();

// (+) MAP dapat digunakan untuk menambahkan array baru tanpa menggunakan perintah push
function perulanganMAP2() {
    var dataKota = ['jakarta','bandung','malang'];
    var dataBaru = dataKota.map((value, index, array)=>{
        return 'Kota: ' + value;
    })
    console.log(dataBaru);
}
perulanganMAP2();


/* KESIMPULAN 
Perintah FOR :  DAPAT  melakukan perulangan berdasarkan jumlah yang ditentukan, sedangkan forEach dan Map Tidak bisa.
Perintah FOR,  forEach dan Map : DAPAT perulangan berdasarkan data pajang dari sebuah array
Perintah FOR dan forEach : TIDAK DAPAT Menghasilkan array baru
Perintah Map: DAPAT menghasilkan array baru
Selanjutnya ...
Jika kita ingin melakukan perulangan berdasarkan jumlah data yang sudah ditentukan, maka gunakanlah perintah FOR
Jika kita ingin melakukan perulangan berdasarkan panjang array dan tidak ingin mencetak array baru lagi, maka gunakanlah forEach
Jika kita ingin melakukan perulangan dan ingin menghasilkan array baru, maka gunakanlah MAP */