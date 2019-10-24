function panggilPerintahMap(){
    var namaKota = ["jakarta","balikpapan","medan"];
    namaKota.map(function(value, index, array){
        console.log(value);
        console.log(index);
        console.log(array);
    })
}

panggilPerintahMap();