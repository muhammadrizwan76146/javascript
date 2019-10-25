var array1 = [5,12,8,130,44];

function istargetnumber(element){
    return element > 10;
}

console.log(array1.findIndex(istargetnumber));