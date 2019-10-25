function panggilSort(){
    var kota = ['jakarta','makasar','yogyakarta','depok','lampung'];

    console.log(kota);
    console.log("==============================");
    kota = kota.sort(); // fungsinya untuk mengurutkan berdasarkan abjad

    return kota;
}

console.log(panggilSort()); // hasil: [ 'depok', 'jakarta', 'lampung', 'makasar', 'yogyakarta' ]