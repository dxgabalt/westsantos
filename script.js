document.addEventListener('DOMContentLoaded', function () {
    const productos = document.querySelectorAll('.producto');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total');
    const comprarBtn = document.getElementById('comprar');

    productos.forEach(producto => {
        producto.querySelector('.agregar-carrito').addEventListener('click', agregarAlCarrito);
    });

    listaCarrito.addEventListener('click', eliminarDelCarrito);
    comprarBtn.addEventListener('click', comprar);

    function agregarAlCarrito(e) {
        const producto = e.target.parentElement;
        const productoId = producto.getAttribute('data-id');
        const productoNombre = producto.querySelector('h3').textContent;
        const productoPrecio = parseFloat(producto.querySelector('p').textContent.match(/\d+\.\d{2}/)[0]);

        const nuevoItem = document.createElement('li');
        nuevoItem.innerHTML = `${productoNombre} - $${productoPrecio.toFixed(2)} <span class="eliminar-item" data-id="${productoId}">X</span>`;
        listaCarrito.appendChild(nuevoItem);

        actualizarTotal();
    }

    function eliminarDelCarrito(e) {
        if (e.target.classList.contains('eliminar-item')) {
            const productoId = e.target.getAttribute('data-id');
            const itemsEnCarrito = listaCarrito.querySelectorAll('li');
            itemsEnCarrito.forEach(item => {
                if (item.querySelector('.eliminar-item').getAttribute('data-id') === productoId) {
                    item.remove();
                }
            });

            actualizarTotal();
        }
    }

    function actualizarTotal() {
        const itemsEnCarrito = listaCarrito.querySelectorAll('li');
        let total = 0;

        itemsEnCarrito.forEach(item => {
            const precio = parseFloat(item.textContent.match(/\d+\.\d{2}/)[0]);
            total += precio;
        });

        totalCarrito.textContent = total.toFixed(2);
    }

    function comprar() {
        const itemsEnCarrito = listaCarrito.querySelectorAll('li');
        if (itemsEnCarrito.length === 0) {
            alert('El carrito está vacío. Agrega productos antes de comprar.');
            return;
        }

        alert('Gracias por tu compra. Total: $' + totalCarrito.textContent);
    }
});

function comprar(producto) {
    const numeroWhatsApp = '50586921636'; // Reemplaza con el número de WhatsApp al que deseas enviar el mensaje
    const mensaje = `Estoy interesado en el ${producto} de West Santos FC. Por favor, contáctame para realizar la compra.`;
    const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    // Abre WhatsApp en una nueva ventana o pestaña del navegador con el mensaje
    window.open(enlaceWhatsApp, '_blank');
}

    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("show-menu");
    });