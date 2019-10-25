function panggilRegex(){
    let str = "abcdefghijklmnopqrstuvwxyz";

    return str.search(/a/); // hasil: 0, karena huruf a berada pada posisi ke 0
}

console.log(panggilRegex());