function startEnds(){
    var kata = "saya pintar menggambar menggunakan clip studio";

    /* fungsi startsWith adalah untuk mengoreksi awal string pada suatu variabel */
    console.log(kata.startsWith('saya')); // true
    console.log(kata.startsWith('Saya')); // false
    console.log(kata.startsWith('pintar', 5)); // true

    /* fungsi endsWith adalah untuk mengoreksi akhir string pada suatu variabel */
    console.log(kata.endsWith('studio')); // true
}

startEnds();