function panggilregex() {
    let str = "abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz";

    console.log(str.match(/c/g)); // g disini artinya global, mencari huruf c keseluruhan
    console.log(str.match(/c/)); 
}

panggilregex();