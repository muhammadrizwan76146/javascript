function konversi(){
    var kon = new String("Belajar Yuk...");
    console.log(typeof kon); // typeof, untuk mengecek type. hasil: type-nya 'Object'
    console.log(kon);

    var konf = kon.toString(); // toString, untuk merubah data Object yang tadi menjadi 'String'
    console.log(typeof konf); // cek type. hasil: 'String'
    console.log(konf);

    var konf2 = kon.valueOf(); // valueOf, fungsinya sama seperti toString untuk merubah data menjadi 'String'
    console.log(typeof konf2); // cek type
    console.log(konf2);
}

konversi();

/* untuk mengKonversi dari 'Object' ke 'String' ada Dua: 
dengan menggunakan 'toString' dan 'valueOf'.
dan mengkonversi dari string Object menjadi string data primitif */