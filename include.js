function stringInclude(){
    var kata = "saya sedang belajar javascript";

    /* untuk mengkoreksi sebuah string dalam suatu variabel, apakah benar atau salah*/
    console.log(kata.includes('sedang')); // true, karena sesuai
    console.log(kata.includes('Sedang')); // false, tidak sesuai karena huruf "S" kafital sedangkan pada variabel 'kata' kecil
    console.log(kata.includes('ya')); // true
}

stringInclude();