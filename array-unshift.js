function panggilUnshift(){
    var kota = ['jakarta','bandung','malang'];
    console.log(kota);

    kota.unshift('surabaya','jogja'); // menambah data index di depan jakarta : surabaya,jogja,jakarta,bandung,malang

    return kota;
}

console.log(panggilUnshift());