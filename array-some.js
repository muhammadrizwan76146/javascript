let product = [
    {name: "Apple", type: "Fruit"},
    {name: "Monitor", type: "Komputer"},
    {name: "Manggo", type: "Fruit"},
    {name: "Table", type: "Furniture"}
];

console.log(
    product.some(product => product.type === "Fruit") // hasil: true
);

/* some, hanya butuh salah satu saja yg sesuai maka hasilnya akan true */