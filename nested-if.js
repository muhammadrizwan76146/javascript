/* nested if, untuk membuat kondisi if didalam if */

var x = 30;
var y = 20;
var z = 10;

if(x>y){
    if(x>z){
        console.log("x adalah yang paling besar")
    }else{
        console.log("x adalah yang terbesar kedua")
    }
}else{
    if(x<z){
        console.log("x adalah yang terkecil")
    }else{
        console.log("x adalah yang terkecil kedua")
    }
}