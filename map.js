function panggilMap(){
    var dataKota = ['jakarta','bandung','jogja'];
    dataKota.map((value, index, array) => {
        console.log(value);
        console.log(index);
        console.log(array);
    });
}

panggilMap();