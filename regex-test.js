function panggilTestRegex(){
    let data = "Belajar satu tahun bersama niomic";

    console.log(/satu/.test(data)); // hasil: true

    console.log(/dua/.test(data)); // hasil: false
}

panggilTestRegex();