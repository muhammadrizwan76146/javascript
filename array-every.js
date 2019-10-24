let product = [
    {name: "Apple", type: "Fruit"},
    {name: "Monitor", type: "Komputer"},
    {name: "Manggo", type: "Fruit"},
    {name: "Table", type: "Furniture"}
];

console.log(
    product.every(product => product.type === "Fruit") // hasilny: false. karena di-dalam array tidak hanya terdapat fruit, ada juga yang lainnya.
);