function panggilBilanganGanjil() {
    var bilanganGanjil = [];
    for (var i=0; i<30; i++) {
        if(i%2===1) {
            bilanganGanjil.push(i);
        }
    }
    return bilanganGanjil.toString();
}

console.log(panggilBilanganGanjil());