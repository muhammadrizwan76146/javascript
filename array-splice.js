/* function panggilSplice(){
    var kota = ['bandung','surabaya','jakarta','malang'];
    console.log(kota);
    kota.splice(2,0,'palembang'); // menempatkan 'palembang' setelah index ke-2 dan '0' artinya tidak menghapus index setelahnya. 
                                // contoh apabila kita memasukan bukan 0 melainkan 1 maka 'jakarta' akan hilang

    return kota;
}

console.log(panggilSplice()); */

function spliceHapus(){
    var kota = ['sukabumi','bogor','jakarta','bekasi'];
    console.log(kota);
    kota.splice(2,1); // yang akan dihapus setelah index ke-2 dan hanya 1

    return kota;
}

console.log(spliceHapus());