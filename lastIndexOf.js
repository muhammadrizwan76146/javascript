function lasindexof(){
    var kata = "belajar bahasa di niomic dan mempelajari bahasa java";
    console.log(kata.lastIndexOf("bahasa")); // hasil: 41(bahasa(yg kedua)). karena mencari suatu index dimuali dari akhir suatu string
    console.log(kata.lastIndexOf("bahas", 40)); // hasil: 8(bahas(yg pertama)). karena akhir suatu index 40. jadi bahasa yg kedua tak terhitung
}

lasindexof();

/* lastIndexOf untuk mencari urutan index pada suatu string dimulai dari akhir  */