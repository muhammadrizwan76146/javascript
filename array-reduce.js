const array1 = [1,2,3,4];
const reducer = (accumulator, curentValue) => accumulator + curentValue;

console.log(array1.reduce(reducer)); // hasil:10. penjumlahan dari 1+2+3+4=10

console.log(array1.reduce(reducer, 5)); // hasil: 15