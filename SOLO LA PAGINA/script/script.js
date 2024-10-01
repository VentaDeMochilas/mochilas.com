// Variables globales
let cart = [];

// Función para añadir un producto al carrito
function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);
    updateCartUI();
    saveCartToLocalStorage();
}

// Función para actualizar la interfaz del carrito
function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
}

// Guardar el carrito en localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Cargar el carrito desde localStorage
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Función para filtrar productos
function filterProducts() {
    const filterValue = document.getElementById('filter').value;
    const allProducts = document.querySelectorAll('.product');

    allProducts.forEach(product => {
        const productType = product.getAttribute('data-type');

        if (filterValue === 'todos' || productType === filterValue) {
            product.style.display = 'inline-block'; // Mostrar el producto
        } else {
            product.style.display = 'none'; // Ocultar el producto
        }
    });
}


// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromLocalStorage(); // Cargar carrito si hay algo en localStorage

    // Evento para el filtro de productos
    const filterDropdown = document.getElementById('filter');
    filterDropdown.addEventListener('change', filterProducts);

    // Evento para los botones de "Añadir al carrito"
    const addButtons = document.querySelectorAll('.add-to-cart');
    addButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.product');
            const productName = productElement.querySelector('h3').textContent;
            const productPrice = productElement.querySelector('p').textContent.replace('Precio: ', '');

            addToCart(productName, productPrice);
        });
    });
});

//* funcionamiento de boton izquierda a derecha *//
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slidesContainer = document.querySelector('.slide-wrapper');
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100; /* Mueve las diapositivas */
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function moveSlide(n) {
    showSlide(currentSlide + n);
}

/* Movimiento automático cada 6 segundos */
setInterval(() => {
    moveSlide(1);
}, 6000);



function filterProducts() {
    // Obtener el valor del input de búsqueda
    var input = document.getElementById('searchInput').value.toLowerCase();
    var products = document.querySelectorAll('.product');

    // Recorrer cada producto en el catálogo
    products.forEach(function(product) {
        var productName = product.getAttribute('data-name').toLowerCase();
        
        // Si el nombre coincide con la búsqueda, mostrar el producto
        if (productName.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
