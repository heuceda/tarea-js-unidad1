// EJERCICIO #4: Procesamiento de una lista de Productos

const productos = [
 { nombre: "Televisor", precio: 500, categoria: "Electrónica" },
 { nombre: "Silla", precio: 100, categoria: "Muebles" },
 { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
 { nombre: "Mesa", precio: 200, categoria: "Muebles" },
 { nombre: "Auriculares", precio: 150, categoria: "Electrónica" }
];

// 1. Filtrar los productos que pertenecen a la categoría "Electrónica" usando filter()
const productosElectronica = productos.filter(producto => producto.categoria === "Electrónica");
console.log("Productos de la categoría Electrónica:" + " " + JSON.stringify(productosElectronica));
console.log("\n");

// 2. Usar map() para crear una nuevo array con solo los nombres de los productos filtrados
const nombresProductosElectronica = productosElectronica.map(producto => producto.nombre);
console.log("Nombres de los productos de la categoría Electrónica:" + " " + JSON.stringify(nombresProductosElectronica));
console.log("\n");

//5. Usar reduce() para calcualr el precio total de los productos filtrados
const precioTotalElectronica = productosElectronica.reduce((total, producto) => total + producto.precio, 0);
console.log("Precio total de los productos de la categoría Electrónica es de:" + " " + precioTotalElectronica);