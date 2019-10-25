function panggilParseInteger(){
    var a = "13.78";
    var b = "9 Naga";
    var c = "100.99 meter";

    hasil1 = parseInt(a);
    console.log(hasil1);

    hasil2 = parseInt(b);
    console.log(hasil2);

    hasil3 = parseInt(c);
    console.log(hasil3);

    hasil4 = parseFloat(a);
    console.log(hasil4);
}

panggilParseInteger();

/* parseInt, untuk merubah data menjadi integer */
/* parseFloat, untuk merubah data menjadi float / desimal */