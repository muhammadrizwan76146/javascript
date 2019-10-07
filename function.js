/* function */

// contoh penulisan function
function jalanSatu(){
    console.log("ini jalansatu")
};

// ini contoh penulisan function menggunakan variable, dianjurkan untuk menggunakan variable "const"
const jalanDua = function () {
    console.log("ini jalandua")
};

// memanggil function
jalanSatu();
jalanDua();

/*-------------------------------------------*/

// contoh lain
const jalanTiga = () => {
    console.log("ini jalan tiga")
}

jalanTiga();