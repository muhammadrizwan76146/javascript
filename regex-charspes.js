function panggilRegex(value) {
    var ambilData = value.match(/ke/g); // hasil: [ 'ke', 'ke' ]
    console.log(ambilData);

    var ambilData2 = value.match(/[ke]/g); // hasil: [ 'k', 'e', 'k', 'e' ]
    console.log(ambilData2);
}

panggilRegex("Bulan ke 1 sd ke 4");