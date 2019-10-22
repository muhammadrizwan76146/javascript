function stingsub(){
    var kata = "aku pintar memasak";

    console.log(kata.substr(3)); // hasil:" pintar memasak"
    console.log(kata.substr(3,10)); // hasil:" pintar me"
    console.log(kata.substr(-3)); // hasil:"sak"
}

stingsub();