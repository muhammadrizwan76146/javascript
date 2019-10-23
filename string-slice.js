function slice(){
    var kata = "aku sedang belajar";

    console.log(kata.slice(3)); // slice ini sama seperti substring, hasil: " sedang belajar"
    console.log(kata.slice(4,10)); // hasil: "sedang"
    console.log(kata.slice(-3)); // hasil: "jar"
}

slice();