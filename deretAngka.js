function deretAngka(n) {
    var hasilDeretAngka = '';
    for(var i=0; i<=n; i++){
        if(i%3===0) {
            hasilDeretAngka += 'Nio ';
        }else if(i%5===0) {
            hasilDeretAngka += 'mic ';
        }else {
            hasilDeretAngka += i+' ';
        }
    }
    return hasilDeretAngka;
}

console.log(deretAngka(10));
console.log(deretAngka(20));
console.log(deretAngka(30));