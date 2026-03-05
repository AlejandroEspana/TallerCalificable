// Productos de ejemplo
const productos = [
    {
        nombre: "Caminadora Eléctrica Goplus",
        precio: "$199.989",
        imagen: "assets/treadmill.png"
    },
    {
        nombre: "Nevera Mabe Frost 389L",
        precio: "$211.100",
        imagen: "assets/fridge.png"
    },
    {
        nombre: "Audífonos Bluetooth JBL",
        precio: "$89.900",
        imagen: "assets/audifonos.png"
    },
    {
        nombre: "Smart TV Samsung 50\"",
        precio: "$1.499.000",
        imagen: "assets/tv.png"
    },
    {
        nombre: "Portátil Lenovo 14\"",
        precio: "$2.199.000",
        imagen: "assets/laptop.png"
    },
    {
        nombre: "Celular Xiaomi Redmi Note 12",
        precio: "$899.000",
        imagen: "assets/phone.png"
    }
];

// Renderizar productos destacados
function renderProductos() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    productos.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <h4>${prod.nombre}</h4>
            <p>${prod.precio}</p>
        `;
        grid.appendChild(card);
    });
}
