function panggilSplice(){
    var kota = ['bandung','surabaya','jakarta','malang'];
    console.log(kota);
    kota.splice(2,0,'palembang'); // menempatkan 'palembang' setelah index ke-2 dan '0' artinya tidak menghapus index setelahnya. 
                                // contoh apabila kita memasukan bukan 0 melainkan 1 maka 'jakarta' akan hilang

    return kota;
}

console.log(panggilSplice());