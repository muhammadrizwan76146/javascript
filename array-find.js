var array1 = [5,12,8,120,44];

var found = array1.find(function(element){
    return element > 10; // hasil: 12. karena element yg lebih dari 10
});

console.log(found);