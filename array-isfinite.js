function panggilIsFinite(){
    var a = isFinite([1,2,3,4,5]);
    var b = isFinite(["jakarta","bandung","surabaya"]);
    var c = isFinite(1,2,3,"hello","niomic");
    var d = isFinite(-25232.42,9,546,95,2); 

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

panggilIsFinite();