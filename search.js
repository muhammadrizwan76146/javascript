function cari(){
    var kata = "belajar di niomic academy dengan fasih";
    console.log(kata.search("di")); // hasil 8
    console.log(kata.search(/di/)); // hasil 8
}

cari();

/* funsi search hampir sama dengan indexOf. hanya saja search mencari index berdasarkan regular ekpresion */